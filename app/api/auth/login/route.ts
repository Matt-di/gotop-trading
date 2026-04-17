import { NextResponse } from "next/server";
import { AuthService } from "@/lib/auth";

export async function POST() {
  try {
    // For demo purposes, we'll use hardcoded credentials
    // In production, you'd use request body parsing with proper validation
    const email = "admin@gotop.et";
    const password = "admin123456";

    const { user, token } = await AuthService.authenticateUser(email, password);

    return NextResponse.json({
      message: "Login successful",
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Login failed" },
      { status: 401 },
    );
  }
}
