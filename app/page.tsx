"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CircleCheck as CheckCircle2,
  Code as Code2,
  Film,
  Printer,
  Star,
  Users,
  Award,
  TrendingUp,
  Play,
  Quote,
  MapPin,
  Calendar,
  Zap,
  Shield,
  Clock,
  CheckCircle,
  Globe,
  Mail,
  Phone,
  ChevronDown,
  ExternalLink,
  Loader2,
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
import { apiClient } from "@/lib/api-client";
import { companyInfo } from "@/lib/data";

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

interface Service {
  id: string;
  title: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
}

// Service icon mapping
const getServiceIcon = (serviceId: string) => {
  const iconMap: { [key: string]: any } = {
    "software-development": Code2,
    "media-production": Film,
    "printing-services": Printer,
  };

  // Try to match by service title as fallback
  const titleMap: { [key: string]: any } = {
    software: Code2,
    media: Film,
    printing: Printer,
  };

  return iconMap[serviceId] || titleMap[serviceId.toLowerCase()] || Code2;
};

interface PortfolioProject {
  id: number;
  title: string;
  client: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  year: string;
}

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

interface Client {
  id: string;
  name: string;
  logoUrl: string;
  logo?: string;
  description?: string;
  isFeatured?: boolean;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export default function Home() {
  const [services, setServices] = useState<Service[]>([]);
  const [portfolioProjects, setPortfolioProjects] = useState<
    PortfolioProject[]
  >([]);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [clients, setClients] = useState<Client[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const heroRef = useRef(null);
  const scrollYProgress = useMotionValue(0);

  useEffect(() => {
    if (typeof window === "undefined" || !heroRef.current) return;

    const { scrollYProgress: scrollProgressValue } = useScroll({
      target: heroRef,
      offset: ["start start", "end start"],
    });

    const unsubscribe = scrollProgressValue.on("change", (value) => {
      scrollYProgress.set(value);
    });

    return unsubscribe;
  }, [scrollYProgress]);

  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          servicesData,
          projectsData,
          blogsData,
          clientsData,
          testimonialsData,
        ] = await Promise.all([
          apiClient.getServices(),
          apiClient.getPortfolioProjects(),
          apiClient.getBlogPosts(),
          apiClient.getClients(),
          apiClient.getTestimonials(),
        ]);

        setServices(servicesData as Service[]);
        setPortfolioProjects(projectsData as PortfolioProject[]);
        setBlogPosts(blogsData as BlogPost[]);
        setClients(clientsData as Client[]);
        setTestimonials(testimonialsData as Testimonial[]);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      try {
        await apiClient.subscribeNewsletter(newsletterEmail);
        setIsSubscribed(true);
        setNewsletterEmail("");
        setTimeout(() => setIsSubscribed(false), 3000);
      } catch (error) {
        console.error("Newsletter subscription error:", error);
      }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4 text-navy-900 dark:text-navy-50" />
          <p className="text-navy-600 dark:text-navy-300">Loading...</p>
        </div>
      </div>
    );
  }

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
            className="max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-8"
            >
              <div className="flex items-center gap-2 px-4 py-2 bg-navy-50 dark:bg-navy-900/30 border border-navy-200 dark:border-navy-800 rounded-sm">
                <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-navy-900 dark:text-navy-100 tracking-wider uppercase">
                  Ethiopia's Technology Partner
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-navy-900 dark:text-navy-50 mb-6 leading-[0.95] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Building Digital
              <br />
              <span className="text-amber-600 dark:text-amber-400">
                Excellence
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-navy-600 dark:text-navy-300 mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Enterprise software development, professional media production,
              and precision printing services for organizations across Ethiopia.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
                  <Link href="/services">
                    Explore Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-base font-semibold border-2 border-navy-900 dark:border-navy-400 text-navy-900 dark:text-navy-400 hover:bg-navy-50 dark:hover:bg-navy-900/20"
                >
                  <Link href="/contact">Get in Touch</Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-navy-500 dark:text-navy-400"
            >
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span>Award Winning</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>50+ Enterprise Clients</span>
              </div>
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

      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-navy-900 dark:text-navy-50 mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-navy-600 dark:text-navy-300 max-w-2xl mx-auto text-lg">
              Enterprise-grade solutions tailored to transform your business
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service, index) => {
              const Icon = getServiceIcon(service.id);

              return (
                <motion.div key={service.id} variants={fadeInUp}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50">
                    <CardHeader>
                      <div className="w-14 h-14 bg-navy-100 dark:bg-navy-800 rounded-sm flex items-center justify-center mb-4">
                        <Icon className="h-7 w-7 text-navy-900 dark:text-navy-100" />
                      </div>
                      <CardTitle className="text-xl font-semibold text-navy-900 dark:text-navy-50">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-navy-600 dark:text-navy-300">
                        {service.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Link href={`/services#${service.id}`}>
                        <Button
                          variant="ghost"
                          className="w-full group text-navy-900 dark:text-navy-100 hover:bg-navy-50 dark:hover:bg-navy-800"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-navy-50 dark:bg-navy-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-navy-50 mb-4">
              Trusted by Leading Organizations
            </h2>
            <p className="text-navy-600 dark:text-navy-300">
              Proud partners with government agencies and top enterprises
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {clients.map((client) => (
              <motion.div
                key={client.id}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-navy-900 p-6 rounded-sm border border-navy-200 dark:border-navy-800 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <img
                  src={client.logoUrl}
                  alt={`${client.name} logo`}
                  className="h-12 w-12 object-contain mb-2"
                />
                <p className="text-sm font-medium text-navy-700 dark:text-navy-300">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

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
              Featured Projects
            </h2>
            <p className="text-navy-600 dark:text-navy-300">
              Recent work that showcases our expertise
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
          >
            {portfolioProjects.map((project: PortfolioProject) => (
              <motion.div key={project.id} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50">
                  <CardHeader className="p-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle className="text-lg font-semibold text-navy-900 dark:text-navy-50 mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-navy-600 dark:text-navy-300 mb-4">
                      {project.client}
                    </CardDescription>
                    <p className="text-sm text-navy-600 dark:text-navy-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="text-xs bg-navy-100 dark:bg-navy-800 text-navy-700 dark:text-navy-300 px-2 py-1 rounded-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
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

      <section className="py-20 bg-navy-50 dark:bg-navy-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 dark:text-navy-50 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-navy-600 dark:text-navy-300">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <motion.div
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{testimonial.image}</div>
                      <div>
                        <CardTitle className="text-lg font-semibold text-navy-900 dark:text-navy-50">
                          {testimonial.name}
                        </CardTitle>
                        <CardDescription className="text-navy-600 dark:text-navy-300">
                          {testimonial.role}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy-600 dark:text-navy-400 italic">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-8">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-navy-900 dark:border-navy-400 text-navy-900 dark:text-navy-400 hover:bg-navy-50 dark:hover:bg-navy-900/20"
              >
                <Link href="/about">
                  View All Testimonials <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Users, number: "50+", label: "Happy Clients" },
              { icon: Award, number: "100+", label: "Projects Completed" },
              { icon: TrendingUp, number: "6+", label: "Years Experience" },
              { icon: Star, number: "5.0", label: "Client Rating" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-navy-100 dark:bg-navy-800 rounded-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-all duration-300 border-2 border-navy-200 dark:border-navy-800 group-hover:border-amber-500 dark:group-hover:border-amber-400">
                  <stat.icon className="h-10 w-10 text-navy-900 dark:text-navy-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" />
                </div>
                <div className="text-4xl font-bold text-navy-900 dark:text-navy-50 mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-navy-600 dark:text-navy-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
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
              Partner with Ethiopia's leading technology company. Let's
              collaborate to bring your ideas to life with comprehensive
              solutions.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
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
                <span>+251911879421</span>
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
                  <p className="text-lg font-medium">Demo Video Placeholder</p>
                  <p className="text-sm opacity-80 mt-2">
                    Video content would be embedded here
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
