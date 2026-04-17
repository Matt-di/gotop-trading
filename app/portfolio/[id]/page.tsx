"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Building,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectPageProps {
  params: {
    id: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    fetchProject();
  }, [params.id]);

  const fetchProject = async () => {
    try {
      const response = await fetch(`/api/portfolio/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setProject(data);
      } else {
        setNotFound(true);
      }
    } catch (error) {
      console.error("Error fetching project:", error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Loading project...
          </p>
        </div>
      </div>
    );
  }

  if (notFound || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Project Not Found
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Button asChild>
            <Link href="/portfolio">Back to Portfolio</Link>
          </Button>
        </div>
      </div>
    );
  }

  const service = { id: project.category, title: project.category };

  // Mock additional project details
  const projectDetails = {
    challenge:
      "The client needed a comprehensive solution to streamline their operations and improve efficiency. They were facing challenges with manual processes and outdated systems.",
    solution:
      "We developed a custom software solution with modern architecture, implementing best practices and cutting-edge technologies to address their specific needs.",
    results: [
      "50% increase in operational efficiency",
      "90% reduction in manual processing time",
      "99.9% system uptime and reliability",
      "Significant cost savings and ROI improvement",
    ],
    testimonial: {
      content:
        "GoTop Trading delivered exceptional results that exceeded our expectations. Their technical expertise and project management were outstanding.",
      author: "Project Manager",
      company: project.client,
      role: "Director of Operations",
    },
  };

  // Mock image gallery
  const projectImages = [
    project.imageUrl,
    project.imageUrl, // Duplicate for demo
    project.imageUrl, // Duplicate for demo
  ];

  const relatedProjects: any[] = []; // Will fetch related projects from API

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-industrial-pattern bg-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-300 border-2 border-navy-200 dark:border-navy-700">
                {service?.title} Project
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {project.title}
              </h1>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Building className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {project.client}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {project.year}
                  </span>
                </div>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <Card className="overflow-hidden border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 transition-colors duration-300">
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <img
                    src={project.imageUrl || "/placeholder.jpg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Project Gallery
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="aspect-video bg-navy-50 dark:bg-navy-800 flex items-center justify-center">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Challenge & Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <TrendingUp className="mr-3 h-6 w-6 text-amber-600 dark:text-amber-400" />
                      Challenge & Solution
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        The Challenge
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {projectDetails.challenge}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                        Our Solution
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {projectDetails.solution}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Technologies Used */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <CheckCircle className="mr-3 h-6 w-6 text-green-600" />
                      Technologies Used
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech: string) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-sm py-2 px-4"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Results */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-2xl">
                      <Award className="mr-3 h-6 w-6 text-navy-600 dark:text-navy-400" />
                      Results & Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {projectDetails.results.map((result, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">
                            {result}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Project Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Client:
                      </span>
                      <span className="font-medium">{project.client}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Category:
                      </span>
                      <span className="font-medium">{service?.title}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Year:
                      </span>
                      <span className="font-medium">{project.year}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Duration:
                      </span>
                      <span className="font-medium">6 months</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Client Testimonial */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-navy-50 dark:bg-navy-900/30 border-navy-200 dark:border-navy-800">
                  <CardHeader>
                    <CardTitle className="text-navy-900 dark:text-navy-100">
                      Client Testimonial
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy-800 dark:text-navy-200 italic mb-4">
                      "{projectDetails.testimonial.content}"
                    </p>
                    <div className="text-sm">
                      <p className="font-medium text-navy-900 dark:text-navy-100">
                        {projectDetails.testimonial.author}
                      </p>
                      <p className="text-navy-700 dark:text-navy-300">
                        {projectDetails.testimonial.role},{" "}
                        {projectDetails.testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-navy-900 dark:bg-navy-800 text-white border-2 border-navy-900 dark:border-navy-700">
                  <CardHeader>
                    <CardTitle className="text-white">
                      Ready to Start Your Project?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy-200 mb-4">
                      Let's discuss how we can help you achieve similar results.
                    </p>
                    <Button
                      asChild
                      size="lg"
                      variant="secondary"
                      className="w-full"
                    >
                      <Link href="/contact">
                        Get Started{" "}
                        <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Related Projects
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                More projects in the {service?.title?.toLowerCase()} category
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject: any, index: number) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/portfolio/${relatedProject.id}`}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50 group cursor-pointer">
                      <div className="aspect-video bg-navy-50 dark:bg-navy-800 flex items-center justify-center relative overflow-hidden">
                        <img
                          src={relatedProject.image}
                          alt={relatedProject.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {relatedProject.title}
                        </CardTitle>
                        <CardDescription>
                          {relatedProject.client}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                          {relatedProject.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {relatedProject.technologies
                              .slice(0, 2)
                              .map((tech: string) => (
                                <Badge
                                  key={tech}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                          </div>
                          <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-amber-600" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-lg mb-8 text-navy-200">
              Join our list of satisfied clients and let's create something
              amazing together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-navy-900 border-2 border-amber-500"
                >
                  <Link href="/contact">Start Your Project</Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-navy-900"
                >
                  <Link href="/portfolio">View All Projects</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
