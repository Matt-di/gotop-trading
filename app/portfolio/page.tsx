"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code as Code2,
  Film,
  Printer,
  Filter,
  ExternalLink,
  Calendar,
  Building,
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

const categories = [
  { id: "all", label: "All Projects", icon: Filter },
  { id: "software", label: "Software", icon: Code2 },
  { id: "media", label: "Media", icon: Film },
  { id: "printing", label: "Printing", icon: Printer },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/portfolio");
      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="flex flex-col">
      <section className="bg-industrial-pattern bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore our successful projects across software development, media
              production, and printing services
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mx-auto"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Loading projects...
              </p>
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap justify-center gap-3 mb-12"
              >
                {categories.map((category) => {
                  const Icon = category.icon;
                  const isActive = activeCategory === category.id;

                  return (
                    <motion.div
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        onClick={() => setActiveCategory(category.id)}
                        variant={isActive ? "default" : "outline"}
                        size="lg"
                        className={
                          isActive
                            ? "bg-navy-900 dark:bg-navy-50 hover:bg-navy-800 dark:hover:bg-navy-100 text-white dark:text-navy-900 border-2 border-navy-900 dark:border-navy-50"
                            : ""
                        }
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {category.label}
                      </Button>
                    </motion.div>
                  );
                })}
              </motion.div>

              <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                <AnimatePresence mode="popLayout">
                  {filteredProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Link href={`/portfolio/${project.id}`}>
                        <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50 overflow-hidden group cursor-pointer">
                          <div className="aspect-video bg-navy-50 dark:bg-navy-800 flex items-center justify-center relative overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                              <ExternalLink className="h-6 w-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                            <div className="absolute top-3 right-3">
                              <span
                                className={`px-3 py-1 rounded-sm text-xs font-semibold ${
                                  project.category === "software"
                                    ? "bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-300"
                                    : project.category === "media"
                                      ? "bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300"
                                      : "bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-300"
                                }`}
                              >
                                {project.category.charAt(0).toUpperCase() +
                                  project.category.slice(1)}
                              </span>
                            </div>
                          </div>
                          <CardHeader>
                            <CardTitle className="text-xl group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                              {project.title}
                            </CardTitle>
                            <CardDescription className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <Building className="h-3 w-3" />
                                <span>{project.client}</span>
                              </div>
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-3 w-3" />
                                <span className="text-xs">{project.year}</span>
                              </div>
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies
                                .slice(0, 3)
                                .map((tech: string) => (
                                  <span
                                    key={tech}
                                    className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              {project.technologies.length > 3 && (
                                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                                  +{project.technologies.length - 3} more
                                </span>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>

              {filteredProjects.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <p className="text-gray-500 dark:text-gray-400 text-lg">
                    No projects found in this category.
                  </p>
                </motion.div>
              )}
            </>
          )}
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's work together to bring your vision to life with our
              expertise and dedication
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="bg-navy-900 dark:bg-navy-50 hover:bg-navy-800 dark:hover:bg-navy-100 text-white dark:text-navy-900 border-2 border-navy-900 dark:border-navy-50"
              >
                <a href="/contact">Start Your Project</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
