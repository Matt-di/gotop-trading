"use client";

import { motion } from "framer-motion";
import { Code2, CheckCircle, ArrowRight, Target, Layers, Shield, Zap, Clock, Users, Award, Globe, Database, Smartphone, Cloud, Lock, BarChart, GitBranch } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function SoftwareServicePage() {
  const processSteps = [
    {
      step: "01",
      title: "Requirements Analysis",
      description: "In-depth consultation to understand your technical needs and business objectives",
      icon: Target,
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Creating scalable system architecture and technology stack selection",
      icon: Layers,
    },
    {
      step: "03",
      title: "Development",
      description: "Agile development with regular updates and iterative improvements",
      icon: Code2,
    },
    {
      step: "04",
      title: "Testing & QA",
      description: "Comprehensive testing, security audits, and performance optimization",
      icon: Shield,
    },
    {
      step: "05",
      title: "Deployment",
      description: "Seamless deployment with training and ongoing support",
      icon: Zap,
    },
  ];

  const features = [
    "Custom web applications and platforms",
    "Mobile app development (iOS & Android)",
    "Enterprise software solutions",
    "API development and integration",
    "Cloud infrastructure and DevOps",
    "Database design and optimization",
    "Legacy system modernization",
    "E-commerce solutions",
  ];

  const technologies = [
    "React / Next.js",
    "Node.js / Express",
    "Python / Django",
    "TypeScript",
    "PostgreSQL / MongoDB",
    "AWS / Azure / GCP",
    "Docker / Kubernetes",
    "GraphQL / REST APIs",
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-industrial-pattern bg-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <Badge className="bg-navy-900 dark:bg-navy-50 text-white dark:text-navy-900 text-sm font-semibold px-6 py-2 rounded-sm shadow-lg border-2 border-navy-900 dark:border-navy-50">
                Software Development
              </Badge>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-navy-50 mb-6">
              Custom Software Solutions
            </h1>
            <p className="text-xl text-navy-600 dark:text-navy-300 mb-8 leading-relaxed">
              Build powerful, scalable software tailored to your unique business needs. From web applications to mobile apps, we deliver cutting-edge solutions that drive growth.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-navy-900 dark:bg-navy-50 hover:bg-navy-800 dark:hover:bg-navy-100 text-white dark:text-navy-900 px-8 py-4 text-base font-semibold border-2 border-navy-900 dark:border-navy-50"
              >
                <Link href="/contact">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-white dark:bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-navy-50 mb-6">
                Transform Your Ideas Into Reality
              </h2>
              <p className="text-lg text-navy-600 dark:text-navy-300 mb-6 leading-relaxed">
                Our software development team specializes in creating robust, scalable, and user-friendly applications. We leverage modern technologies and best practices to deliver solutions that exceed expectations.
              </p>
              <p className="text-lg text-navy-600 dark:text-navy-300 mb-8 leading-relaxed">
                Whether you need a simple web application or a complex enterprise system, we have the expertise to bring your vision to life with precision and excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 transition-colors bg-white dark:bg-navy-900/50">
                <CardHeader>
                  <Code2 className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-2" />
                  <CardTitle className="text-xl text-navy-900 dark:text-navy-50">Web Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 dark:text-navy-300 text-sm">Modern, responsive web applications</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 transition-colors bg-white dark:bg-navy-900/50">
                <CardHeader>
                  <Smartphone className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-2" />
                  <CardTitle className="text-xl text-navy-900 dark:text-navy-50">Mobile Apps</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 dark:text-navy-300 text-sm">iOS and Android applications</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 transition-colors bg-white dark:bg-navy-900/50">
                <CardHeader>
                  <Cloud className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-2" />
                  <CardTitle className="text-xl text-navy-900 dark:text-navy-50">Cloud Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 dark:text-navy-300 text-sm">Scalable cloud infrastructure</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 transition-colors bg-white dark:bg-navy-900/50">
                <CardHeader>
                  <Database className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-2" />
                  <CardTitle className="text-xl text-navy-900 dark:text-navy-50">Data Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 dark:text-navy-300 text-sm">Database design and analytics</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-navy-50 dark:bg-navy-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-navy-50 mb-4">
              What We Offer
            </h2>
            <p className="text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              Comprehensive software development services tailored to your needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50 transition-colors">
                  <CardContent className="pt-6">
                    <CheckCircle className="h-6 w-6 text-amber-600 dark:text-amber-400 mb-3" />
                    <p className="text-navy-700 dark:text-navy-300 font-medium">{feature}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white dark:bg-navy-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-navy-50 mb-4">
              Our Development Process
            </h2>
            <p className="text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              A systematic approach ensuring quality and timely delivery
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <Card className="h-full text-center border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50 transition-colors">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-navy-100 dark:bg-navy-800 rounded-sm flex items-center justify-center mx-auto mb-4 border-2 border-navy-200 dark:border-navy-700">
                      <step.icon className="h-8 w-8 text-navy-900 dark:text-navy-100" />
                    </div>
                    <div className="text-sm font-bold text-navy-900 dark:text-navy-50 mb-2">{step.step}</div>
                    <CardTitle className="text-lg text-navy-900 dark:text-navy-50">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-navy-600 dark:text-navy-300 leading-relaxed">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-navy-50 dark:bg-navy-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-navy-50 mb-4">
              Technologies We Use
            </h2>
            <p className="text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              Modern, proven technologies for robust solutions
            </p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Badge className="px-6 py-3 bg-white dark:bg-navy-900 text-navy-900 dark:text-navy-100 border-2 border-navy-200 dark:border-navy-800 text-base font-semibold">
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Software Solution?
            </h2>
            <p className="text-lg mb-8 text-navy-200">
              Let's discuss your project and create something amazing together.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-navy-900 border-2 border-amber-500"
              >
                <Link href="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
