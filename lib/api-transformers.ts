/**
 * Utility functions to transform data between database and frontend formats
 */

export function transformServiceForFrontend(service: any) {
  return {
    id: service.id,
    title: service.name,
    icon: service.icon || '💻',
    shortDescription: service.shortDescription,
    fullDescription: service.fullDescription,
    features: JSON.parse(service.features || '[]'),
    technologies: service.technologies ? JSON.parse(service.technologies) : undefined,
    processSteps: service.processSteps ? JSON.parse(service.processSteps) : undefined,
  };
}

export function transformPortfolioProjectForFrontend(project: any) {
  return {
    id: project.id,
    title: project.title,
    client: project.client,
    category: project.category,
    image: project.imageUrl || '/assets/images/projects/placeholder.jpg',
    description: project.description,
    technologies: JSON.parse(project.technologies || '[]'),
    year: project.year,
  };
}

export function transformBlogPostForFrontend(post: any) {
  return {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    author: post.author?.name || 'Anonymous',
    date: post.publishedAt?.toISOString().split('T')[0] || new Date().toISOString().split('T')[0],
    category: post.category,
    tags: JSON.parse(post.tags || '[]'),
    readTime: post.readTime || '5 min read',
    featured: post.isFeatured,
  };
}

export function transformClientForFrontend(client: any) {
  return {
    name: client.name,
    logo: client.logoUrl || '/assets/logos/company/placeholder-logo.png',
  };
}

export function transformTestimonialForFrontend(testimonial: any) {
  return {
    name: testimonial.name,
    role: testimonial.role,
    content: testimonial.content,
    rating: testimonial.rating,
    image: testimonial.imageUrl || '👨‍💼',
  };
}

export function transformContactSubmissionForAdmin(submission: any) {
  return {
    id: submission.id,
    name: submission.name,
    email: submission.email,
    subject: submission.subject,
    message: submission.message,
    isRead: submission.isRead,
    createdAt: submission.createdAt,
    ipAddress: submission.ipAddress,
    userAgent: submission.userAgent,
  };
}
