"use client";

import { motion } from "framer-motion";
import { Printer, CheckCircle, ArrowRight, Palette, Layers, Target, Scissors, Package, Truck, FileText, Image, Layout, Stamp, Settings, Clock, Users, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function PrintingServicePage() {
  const processSteps = [
    {
      step: "01",
      title: "Design Consultation",
      description: "Understanding your printing needs and design requirements",
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
      description: "Professional finishing and timely delivery to your location",
      icon: CheckCircle,
    },
  ];

  const features = [
    "Digital printing services",
    "Offset printing for large volumes",
    "Large format printing",
    "Business cards and stationery",
    "Brochures and catalogs",
    "Posters and banners",
    "Packaging design and printing",
    "Custom finishing options",
  ];

  const services = [
    "Digital Printing",
    "Offset Printing",
    "Large Format",
    "Business Stationery",
    "Marketing Materials",
    "Custom Packaging",
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
                Printing Services
              </Badge>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-navy-50 mb-6">
              Professional Printing Solutions
            </h1>
            <p className="text-xl text-navy-600 dark:text-navy-300 mb-8 leading-relaxed">
              High-quality printing services for all your business needs. From business cards to large format banners, we deliver exceptional print quality with professional finishing.
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
                Quality You Can See and Feel
              </h2>
              <p className="text-lg text-navy-600 dark:text-navy-300 mb-6 leading-relaxed">
                Our printing services combine state-of-the-art technology with expert craftsmanship to deliver exceptional results. Whether you need business cards, marketing materials, or custom packaging, we ensure every print meets the highest standards.
              </p>
              <p className="text-lg text-navy-600 dark:text-navy-300 mb-8 leading-relaxed">
                From digital printing for quick turnaround to offset printing for large volumes, we have the capabilities to handle projects of any size with precision and efficiency.
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
                  <Printer className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-2" />
                  <CardTitle className="text-xl text-navy-900 dark:text-navy-50">Digital Printing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 dark:text-navy-300 text-sm">Fast, high-quality prints</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 transition-colors bg-white dark:bg-navy-900/50">
                <CardHeader>
                  <Layout className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-2" />
                  <CardTitle className="text-xl text-navy-900 dark:text-navy-50">Offset Printing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 dark:text-navy-300 text-sm">Cost-effective large volumes</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 transition-colors bg-white dark:bg-navy-900/50">
                <CardHeader>
                  <Image className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-2" />
                  <CardTitle className="text-xl text-navy-900 dark:text-navy-50">Large Format</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 dark:text-navy-300 text-sm">Banners and posters</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 transition-colors bg-white dark:bg-navy-900/50">
                <CardHeader>
                  <Package className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-2" />
                  <CardTitle className="text-xl text-navy-900 dark:text-navy-50">Custom Packaging</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 dark:text-navy-300 text-sm">Branded packaging solutions</p>
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
              Comprehensive printing services for all your needs
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
              Our Printing Process
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

      {/* Services Grid Section */}
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
              Our Services
            </h2>
            <p className="text-navy-600 dark:text-navy-300 max-w-2xl mx-auto">
              Professional printing solutions for every need
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50 transition-colors">
                  <CardHeader>
                    <div className="w-12 h-12 bg-navy-100 dark:bg-navy-800 rounded-sm flex items-center justify-center mb-4 border-2 border-navy-200 dark:border-navy-700">
                      <Printer className="h-6 w-6 text-navy-900 dark:text-navy-100" />
                    </div>
                    <CardTitle className="text-xl text-navy-900 dark:text-navy-50">{service}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-navy-600 dark:text-navy-300 text-sm leading-relaxed">
                      Professional {service.toLowerCase()} delivered with exceptional quality and attention to detail.
                    </p>
                  </CardContent>
                </Card>
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
              Ready to Print Your Vision?
            </h2>
            <p className="text-lg mb-8 text-navy-200">
              Let's create professional print materials that make an impact.
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
