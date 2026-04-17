"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  ArrowRight,
  Share2,
  BookmarkPlus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/lib/data";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  featured: boolean;
}

interface BlogPostClientProps {
  post: BlogPost;
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  const relatedPosts = blogPosts
    .filter(
      (p) =>
        p.id !== post.id &&
        (p.category === post.category ||
          p.tags.some((tag) => post.tags.includes(tag))),
    )
    .slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-col">
      <article className="bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </motion.div>

          {/* Article Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-12"
          >
            <div className="flex items-center gap-2 mb-4">
              <Badge
                variant={post.category === "insights" ? "default" : "secondary"}
                className="text-sm"
              >
                {post.category === "insights"
                  ? "Industry Insights"
                  : "Company Updates"}
              </Badge>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {post.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-6 border-t border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>By {post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" size="sm">
                  <BookmarkPlus className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </motion.header>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose prose-lg dark:prose-invert max-w-none"
          >
            {post.content.split("\n\n").map((paragraph, index) => {
              if (paragraph.startsWith("## ")) {
                return (
                  <h2
                    key={index}
                    className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mt-12 mb-6"
                  >
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              }
              if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                return (
                  <h3
                    key={index}
                    className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4"
                  >
                    {paragraph.replace(/\*\*/g, "")}
                  </h3>
                );
              }
              if (paragraph.startsWith("- ")) {
                return (
                  <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
                    {paragraph.split("\n- ").map((item, i) => (
                      <li key={i} className="text-gray-700 dark:text-gray-300">
                        {item.replace("- ", "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.trim() === "") {
                return <br key={index} />;
              }
              return (
                <p
                  key={index}
                  className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed"
                >
                  {paragraph}
                </p>
              );
            })}
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-sm">
                  #{tag}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="flex justify-between items-center">
              <div>
                {(() => {
                  const currentIndex = blogPosts.findIndex(
                    (p) => p.id === post.id,
                  );
                  const prevPost =
                    currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
                  return prevPost ? (
                    <Button variant="outline" asChild>
                      <Link href={`/blog/${prevPost.slug}`}>
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Previous Post
                      </Link>
                    </Button>
                  ) : null;
                })()}
              </div>
              <div>
                {(() => {
                  const currentIndex = blogPosts.findIndex(
                    (p) => p.id === post.id,
                  );
                  const nextPost =
                    currentIndex < blogPosts.length - 1
                      ? blogPosts[currentIndex + 1]
                      : null;
                  return nextPost ? (
                    <Button variant="outline" asChild>
                      <Link href={`/blog/${nextPost.slug}`}>
                        Next Post
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  ) : null;
                })()}
              </div>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Related Posts
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Card
                    key={relatedPost.id}
                    className="hover:shadow-lg transition-shadow duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge
                          variant={
                            relatedPost.category === "insights"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {relatedPost.category === "insights"
                            ? "Industry Insights"
                            : "Company Updates"}
                        </Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {relatedPost.readTime}
                        </span>
                      </div>
                      <CardTitle className="text-lg hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </CardTitle>
                      <CardDescription>{relatedPost.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <User className="h-4 w-4" />
                            <span>{relatedPost.author}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(relatedPost.date)}</span>
                          </div>
                        </div>
                        <Link href={`/blog/${relatedPost.slug}`}>
                          <Button variant="ghost" size="sm">
                            Read More <ArrowRight className="ml-1 h-3 w-3" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
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
            <h2 className="text-3xl font-bold mb-4">Want to Stay Updated?</h2>
            <p className="text-lg mb-8 text-navy-200">
              Subscribe to our newsletter for the latest insights and company
              updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
