import { prisma } from "./prisma";
import {
  clients,
  services,
  portfolioProjects,
  testimonials,
  blogPosts,
  companyInfo,
} from "./data";

async function main() {
  console.log("🌱 Starting database seeding...");

  // Create admin user
  try {
    const adminUser = await prisma.user.create({
      data: {
        email: "admin@gotop.et",
        password: "admin123456",
        name: "Admin User",
        role: "ADMIN",
      },
    });
    console.log("✅ Created admin user:", adminUser.email);
  } catch (error) {
    console.log("ℹ️ Admin user already exists");
  }

  // Seed services
  for (const service of services) {
    try {
      await prisma.service.create({
        data: {
          name: service.title,
          icon: service.icon,
          shortDescription: service.shortDescription,
          fullDescription: service.fullDescription,
          features: JSON.stringify(service.features),
          technologies:
            service.id === "software"
              ? JSON.stringify(["React", "Node.js", "PostgreSQL", "AWS"])
              : undefined,
          processSteps: JSON.stringify([
            {
              step: "01",
              title: "Requirements Analysis",
              description: "In-depth consultation to understand your needs",
            },
            {
              step: "02",
              title: "Planning & Design",
              description: "Creating detailed project plans and specifications",
            },
            {
              step: "03",
              title: "Development",
              description: "Building your solution with regular updates",
            },
            {
              step: "04",
              title: "Testing & QA",
              description: "Comprehensive testing and quality assurance",
            },
            {
              step: "05",
              title: "Deployment",
              description: "Final delivery and ongoing support",
            },
          ]),
          isActive: true,
        },
      });
      console.log("✅ Created service:", service.title);
    } catch (error) {
      console.log("ℹ️ Service already exists:", service.title);
    }
  }

  // Seed clients
  for (const client of clients) {
    try {
      await prisma.client.create({
        data: {
          name: client.name,
          logoUrl: client.logo,
          description: `Valued partner: ${client.name}`,
          isFeatured: true,
        },
      });
      console.log("✅ Created client:", client.name);
    } catch (error) {
      console.log("ℹ️ Client already exists:", client.name);
    }
  }

  // Seed portfolio projects
  for (const project of portfolioProjects) {
    try {
      await prisma.portfolioProject.create({
        data: {
          title: project.title,
          client: project.client,
          category: project.category,
          description: project.description,
          technologies: JSON.stringify(project.technologies),
          imageUrl: project.image,
          year: project.year,
          isFeatured: project.id <= 3, // Mark first 3 as featured
        },
      });
      console.log("✅ Created portfolio project:", project.title);
    } catch (error) {
      console.log("ℹ️ Portfolio project already exists:", project.title);
    }
  }

  // Seed testimonials
  for (const testimonial of testimonials) {
    try {
      await prisma.testimonial.create({
        data: {
          name: testimonial.name,
          role: testimonial.role,
          company: testimonial.role.includes(",")
            ? testimonial.role.split(",")[1]?.trim()
            : undefined,
          content: testimonial.content,
          rating: testimonial.rating,
          imageUrl: testimonial.image,
          isFeatured: testimonial.rating === 5,
        },
      });
      console.log("✅ Created testimonial:", testimonial.name);
    } catch (error) {
      console.log("ℹ️ Testimonial already exists:", testimonial.name);
    }
  }

  // Get admin user for blog posts
  const adminUser = await prisma.user.findUnique({
    where: { email: "admin@gotop.et" },
  });

  if (adminUser) {
    // Seed blog posts
    for (const post of blogPosts) {
      try {
        await prisma.blogPost.create({
          data: {
            title: post.title,
            slug: post.slug,
            excerpt: post.excerpt,
            content: post.content,
            authorId: adminUser.id,
            category: post.category,
            tags: JSON.stringify(post.tags),
            featuredImage: `/assets/images/blog/${post.slug}.jpg`,
            readTime: post.readTime,
            isFeatured: post.featured,
            publishedAt: new Date(post.date),
          },
        });
        console.log("✅ Created blog post:", post.title);
      } catch (error) {
        console.log("ℹ️ Blog post already exists:", post.title);
      }
    }
  }

  // Seed blog categories
  const categories = [
    {
      name: "Industry Insights",
      slug: "insights",
      description: "Latest trends and insights in technology and business",
    },
    {
      name: "Company Updates",
      slug: "updates",
      description: "News and updates from GoTop Trading",
    },
  ];

  for (const category of categories) {
    try {
      await prisma.blogCategory.create({
        data: category,
      });
      console.log("✅ Created blog category:", category.name);
    } catch (error) {
      console.log("ℹ️ Blog category already exists:", category.name);
    }
  }

  console.log("🎉 Database seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Error during seeding:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
