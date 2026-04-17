"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Filter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const categories = [
    { id: "all", label: "All Posts" },
    { id: "insights", label: "Industry Insights" },
    { id: "updates", label: "Company Updates" },
  ];

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const recentPosts = blogPosts.slice(0, 3);

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
              Blog & Insights
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Stay updated with industry trends, company news, and expert
              insights on technology and business solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search posts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    onClick={() => setSelectedCategory(category.id)}
                    className="whitespace-nowrap"
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Featured Posts */}
          {selectedCategory === "all" && featuredPosts.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Featured Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <motion.div key={post.id} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant={
                              post.category === "insights"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {post.category === "insights"
                              ? "Industry Insights"
                              : "Company Updates"}
                          </Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {post.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-xl hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-base">
                          {post.excerpt}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(post.date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                          <Link href={`/blog/${post.slug}`}>
                            <Button variant="ghost" size="sm">
                              Read More <ArrowRight className="ml-1 h-3 w-3" />
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* All Posts */}
          <motion.div
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
              {selectedCategory === "all"
                ? "All Posts"
                : `${categories.find((c) => c.id === selectedCategory)?.label}`}
            </h2>

            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No posts found matching your criteria.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <motion.div key={post.id} variants={fadeInUp}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50">
                      <CardHeader>
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant={
                              post.category === "insights"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {post.category === "insights"
                              ? "Industry Insights"
                              : "Company Updates"}
                          </Badge>
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {post.readTime}
                          </span>
                        </div>
                        <CardTitle className="text-lg hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </CardTitle>
                        <CardDescription>{post.excerpt}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              <span>
                                {new Date(post.date).toLocaleDateString()}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="text-xs"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" size="sm" className="w-full">
                            Read More <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Subscribe to our newsletter for the latest insights and company
              updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                type="email"
                className="flex-1"
              />
              <Button>Subscribe</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
