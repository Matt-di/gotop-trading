"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Code as Code2,
  Film,
  Printer,
  CircleCheck as CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Award,
  Zap,
  Shield,
  Star,
  Play,
  ChevronDown,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  TrendingUp,
  Globe,
  Target,
  Layers,
  Database,
  Palette,
  Camera,
  Megaphone,
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
import { services, portfolioProjects, testimonials } from "@/lib/data";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const icons = {
    software: Code2,
    media: Film,
    printing: Printer,
  };

  const serviceProcesses = {
    software: [
      {
        step: "01",
        title: "Requirements Analysis",
        description:
          "In-depth consultation to understand your technical needs and business objectives",
        icon: Target,
      },
      {
        step: "02",
        title: "Architecture Design",
        description:
          "Creating scalable system architecture and technology stack selection",
        icon: Layers,
      },
      {
        step: "03",
        title: "Development",
        description:
          "Agile development with regular updates and iterative improvements",
        icon: Code2,
      },
      {
        step: "04",
        title: "Testing & QA",
        description:
          "Comprehensive testing, security audits, and performance optimization",
        icon: Shield,
      },
      {
        step: "05",
        title: "Deployment",
        description: "Seamless deployment with training and ongoing support",
        icon: Zap,
      },
    ],
    media: [
      {
        step: "01",
        title: "Content Analysis",
        description:
          "Understanding your content requirements and target audience",
        icon: Camera,
      },
      {
        step: "02",
        title: "Script & Planning",
        description:
          "Creating detailed production plans and localization strategies",
        icon: Megaphone,
      },
      {
        step: "03",
        title: "Recording",
        description:
          "Professional recording sessions with experienced voice artists",
        icon: Film,
      },
      {
        step: "04",
        title: "Post-Production",
        description: "Editing, mixing, and quality assurance processes",
        icon: Palette,
      },
      {
        step: "05",
        title: "Delivery",
        description: "Final delivery in multiple formats with usage rights",
        icon: CheckCircle,
      },
    ],
    printing: [
      {
        step: "01",
        title: "Design Consultation",
        description:
          "Understanding your printing needs and design requirements",
        icon: Palette,
      },
      {
        step: "02",
        title: "Material Selection",
        description: "Choosing the right paper, inks, and finishing options",
        icon: Layers,
      },
      {
        step: "03",
        title: "Pre-production",
        description: "Proofing, color correction, and quality preparation",
        icon: Target,
      },
      {
        step: "04",
        title: "Production",
        description: "High-quality printing with attention to detail",
        icon: Printer,
      },
      {
        step: "05",
        title: "Finishing & Delivery",
        description:
          "Professional finishing and timely delivery to your location",
        icon: CheckCircle,
      },
    ],
  };

  const getServiceProjects = (serviceId: string) => {
    return portfolioProjects.filter(
      (project) => project.category === serviceId,
    );
  };

  return (
    <div className="flex flex-col">
      {/* Professional Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
      >
        <div className="absolute inset-0 bg-industrial-pattern opacity-100"></div>
        <div className="absolute inset-0 bg-noise"></div>

        {/* Subtle geometric accent */}
        <motion.div
          className="absolute top-20 right-10 w-96 h-96 border border-navy-200 dark:border-navy-800 opacity-20"
          animate={{
            rotate: [0, 5, 0],
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-64 h-64 border-2 border-amber-400 opacity-10"
          animate={{
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <Badge className="bg-navy-900 dark:bg-navy-50 text-white dark:text-navy-900 text-sm font-semibold px-6 py-2 rounded-sm shadow-lg border-2 border-navy-900 dark:border-navy-50">
                Comprehensive Solutions
              </Badge>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-navy-900 dark:text-navy-50 mb-8 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-navy-600 dark:text-navy-300 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Comprehensive technology and media solutions designed to drive
              your business forward with innovation, quality, and reliability.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-navy-900 dark:bg-navy-50 hover:bg-navy-800 dark:hover:bg-navy-100 text-white dark:text-navy-900 px-8 py-4 text-base font-semibold border-2 border-navy-900 dark:border-navy-50"
                >
                  <Link href="#services">
                    Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-base font-semibold border-2 border-navy-900 dark:border-navy-400 text-navy-900 dark:text-navy-400 hover:bg-navy-50 dark:hover:bg-navy-900/20"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-navy-400 dark:text-navy-600" />
        </motion.div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-navy-50 mb-4">
              Our Services
            </h2>
            <p className="text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              Click on a service to learn more about our comprehensive solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = icons[service.id as keyof typeof icons];
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/services/${service.id}`}>
                    <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50 group cursor-pointer">
                      <CardHeader className="pb-4">
                        <div className="w-16 h-16 bg-navy-100 dark:bg-navy-800 rounded-sm flex items-center justify-center mb-4 border-2 border-navy-200 dark:border-navy-700 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 group-hover:border-amber-500 dark:group-hover:border-amber-400 transition-all duration-300">
                          <Icon className="h-8 w-8 text-navy-900 dark:text-navy-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
                        </div>
                        <CardTitle className="text-2xl text-navy-900 dark:text-navy-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {service.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-navy-600 dark:text-navy-300 mb-6 leading-relaxed">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center text-amber-600 dark:text-amber-400 font-medium">
                          Learn More{" "}
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Case Studies/Projects Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-navy-50 mb-4">
              Recent{" "}
              <span className="text-amber-600 dark:text-amber-400">
                Projects
              </span>
            </h2>
            <p className="text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              Explore our latest work and see how we've helped clients achieve
              their goals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioProjects.slice(0, 6).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50 group cursor-pointer">
                  <CardHeader className="pb-4">
                    <div className="aspect-video bg-navy-50 dark:bg-navy-800 rounded-sm mb-4 flex items-center justify-center">
                      <div className="text-4xl">
                        {project.category === "software" && (
                          <Code2 className="h-12 w-12 text-navy-300 dark:text-navy-600" />
                        )}
                        {project.category === "media" && (
                          <Film className="h-12 w-12 text-navy-300 dark:text-navy-600" />
                        )}
                        {project.category === "printing" && (
                          <Printer className="h-12 w-12 text-navy-300 dark:text-navy-600" />
                        )}
                      </div>
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {services.find((s) => s.id === project.category)?.title}
                      </Badge>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {project.year}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-navy-900 dark:text-navy-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-navy-600 dark:text-navy-300">
                      {project.client}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-navy-600 dark:text-navy-400 mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-300 px-2 py-1 rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <Link href={`/portfolio/${project.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full group/btn"
                      >
                        View Details
                        <ExternalLink className="ml-1 h-3 w-3 group-hover/btn:translate-x-0.5 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-navy-900 dark:border-navy-400 text-navy-900 dark:text-navy-400 hover:bg-navy-50 dark:hover:bg-navy-900/20"
              >
                <Link href="/portfolio">
                  View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-navy-900 dark:text-navy-50 mb-6">
              Why Choose{" "}
              <span className="text-amber-600 dark:text-amber-400">GoTop</span>
            </h2>
            <p className="text-xl text-navy-600 dark:text-navy-300 max-w-3xl mx-auto">
              Discover what sets us apart and makes us the preferred technology
              partner
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Quality Assurance",
                description:
                  "Rigorous testing and quality control processes ensure reliable, bug-free solutions",
              },
              {
                icon: Clock,
                title: "Timely Delivery",
                description:
                  "We respect deadlines and deliver projects on time without compromising quality",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Skilled professionals with extensive experience across multiple technology domains",
              },
              {
                icon: Globe,
                title: "Local Expertise",
                description:
                  "Deep understanding of Ethiopian market dynamics and local business requirements",
              },
              {
                icon: Award,
                title: "Award Winning",
                description:
                  "Recognized for excellence in software development and customer satisfaction",
              },
              {
                icon: TrendingUp,
                title: "Proven Results",
                description:
                  "Track record of successful projects that drive real business value",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50">
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 bg-navy-100 dark:bg-navy-800 rounded-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-all duration-300 border-2 border-navy-200 dark:border-navy-700 group-hover:border-amber-500 dark:group-hover:border-amber-400">
                      <feature.icon className="h-8 w-8 text-navy-900 dark:text-navy-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
                    </div>
                    <CardTitle className="text-xl text-navy-900 dark:text-navy-50">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-base leading-relaxed text-navy-600 dark:text-navy-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA Section */}
      <section className="py-24 bg-navy-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-noise opacity-5"></div>

        {/* Geometric accent */}
        <motion.div
          className="absolute top-0 right-0 w-64 h-64 border border-amber-500/20"
          animate={{
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 bg-amber-500 rounded-sm flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-navy-900" />
              </div>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to Transform Your{" "}
              <span className="text-amber-500">Business</span>?
            </h2>
            <p className="text-xl mb-8 text-navy-200 max-w-3xl mx-auto leading-relaxed">
              Join hands with Ethiopia's leading technology partner. Let's
              collaborate to bring your ideas to life with our comprehensive
              technology solutions and turn your vision into reality.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-navy-900 px-8 py-4 text-base font-semibold border-2 border-amber-500"
                >
                  <Link href="/contact">
                    Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-navy-600 text-white hover:bg-navy-800 px-8 py-4 text-base"
                  onClick={() => setIsVideoPlaying(true)}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Our Story
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-navy-300"
            >
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+251 11 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@gotop.et</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Addis Ababa, Ethiopia</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoPlaying && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setIsVideoPlaying(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute -top-12 right-0 text-white hover:bg-white/20"
                onClick={() => setIsVideoPlaying(false)}
              >
                Close
              </Button>
              <div className="aspect-video bg-navy-900 rounded-lg flex items-center justify-center shadow-2xl border-2 border-navy-800">
                <div className="text-center text-white">
                  <Play className="h-16 w-16 mx-auto mb-4 opacity-80" />
                  <p className="text-lg font-medium">Services Demo Video</p>
                  <p className="text-sm opacity-80 mt-2">
                    Video showcasing our service capabilities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
