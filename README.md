# GoTop Trading PLC

Enterprise-grade web platform for GoTop Trading PLC - a leading Ethiopian technology company specializing in software development, media production, and professional printing services.

## 🚀 Tech Stack

- **Framework**: Next.js 15.1.0 (React 18.3.1)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js v5
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation

## 📋 Features

### Public Website

- **Services Showcase**: Dynamic service cards with detailed descriptions
- **Portfolio Gallery**: Project portfolio with images and technology tags
- **Blog System**: Full-featured blog with categories and tags
- **Client Testimonials**: Customer reviews and ratings
- **Contact Form**: Integrated contact with email notifications
- **Responsive Design**: Mobile-first approach with dark mode support

### Admin Panel

- **Service Management**: CRUD operations for services
- **Portfolio Management**: Manage projects and case studies
- **Blog Management**: Create and publish blog posts
- **Authentication**: Secure admin access

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Run database migrations
npx prisma migrate dev

# Seed database (optional)
npx prisma db seed

# Start development server
npm run dev
```

## 🔧 Environment Variables

```env
DATABASE_URL="postgresql://user:password@localhost:5432/gotop_trading"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
```

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start

# Type checking
npm run typecheck

# Linting
npm run lint
```

## 📁 Project Structure

```
├── app/              # Next.js app directory
│   ├── about/        # About page
│   ├── admin/        # Admin panel
│   ├── api/          # API routes
│   ├── blog/         # Blog pages
│   ├── contact/      # Contact page
│   ├── portfolio/    # Portfolio pages
│   └── services/     # Services pages
├── components/       # React components
│   ├── admin/        # Admin components
│   └── ui/           # shadcn/ui components
├── lib/              # Utility libraries
├── prisma/           # Database schema and migrations
└── public/           # Static assets
```

## 🎨 Design System

The platform uses a refined, professional aesthetic with:

- **Typography**: Distinctive font pairing for visual hierarchy
- **Color Palette**: Professional color scheme with strategic accents
- **Motion**: Subtle animations for enhanced user experience
- **Layout**: Asymmetric compositions with intentional spacing

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

Copyright © 2024 GoTop Trading PLC. All rights reserved.

## 📞 Contact

- **Website**: https://gotop.et
- **Email**: info@gotop.et
- **Location**: Addis Ababa, Ethiopia
