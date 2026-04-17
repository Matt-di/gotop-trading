import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
import { prisma } from "./prisma";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const JWT_EXPIRES_IN = "7d";

export interface JWTPayload {
  userId: string;
  email: string;
  role: string;
}

export class AuthService {
  static async hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  static async verifyPassword(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return bcrypt.compare(password, hashedPassword);
  }

  static generateToken(payload: JWTPayload): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });
  }

  static verifyToken(token: string): JWTPayload | null {
    try {
      return jwt.verify(token, JWT_SECRET) as JWTPayload;
    } catch (error) {
      return null;
    }
  }

  static async createUser(email: string, password: string, name?: string) {
    const hashedPassword = await this.hashPassword(password);

    return prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
  }

  static async authenticateUser(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const isValidPassword = await this.verifyPassword(password, user.password);
    if (!isValidPassword) {
      throw new Error("Invalid credentials");
    }

    // Update last login
    await prisma.user.update({
      where: { id: user.id },
      data: { lastLogin: new Date() },
    });

    const token = this.generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    return { user, token };
  }

  static async getUserFromToken(token: string) {
    const payload = this.verifyToken(token);
    if (!payload) return null;

    return prisma.user.findUnique({
      where: { id: payload.userId },
    });
  }
}

// Middleware function for protecting admin routes
export async function authMiddleware(request: NextRequest) {
  const authHeader = request.headers.get("authorization");

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new Error("Unauthorized: No token provided");
  }

  const token = authHeader.substring(7);
  const user = await AuthService.getUserFromToken(token);

  if (!user) {
    throw new Error("Unauthorized: Invalid token");
  }

  if (user.role !== "ADMIN") {
    throw new Error("Forbidden: Admin access required");
  }

  return user;
}
