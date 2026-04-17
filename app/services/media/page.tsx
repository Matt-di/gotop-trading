"use client";

import { motion } from "framer-motion";
import { Film, CheckCircle, ArrowRight, Camera, Megaphone, Palette, Mic, Video, Radio, Globe, Languages, Music, Image, Play, Clock, Users, Award } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function MediaServicePage() {
  const processSteps = [
    {
      step: "01",
      title: "Content Analysis",
      description: "Understanding your content requirements and target audience",
      icon: Camera,
    },
    {
      step: "02",
      title: "Script & Planning",
      description: "Creating detailed production plans and localization strategies",
      icon: Megaphone,
    },
    {
      step: "03",
      title: "Recording",
      description: "Professional recording sessions with experienced voice artists",
      icon: Mic,
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
  ];

  const features = [
    "Professional dubbing services",
    "Voice-over recording",
    "Video production and editing",
    "Audio post-production",
    "Content localization",
    "Subtitling and captioning",
    "Media format conversion",
    "Quality assurance and testing",
  ];

  const services = [
    "Dubbing Services",
    "Voice-Over Recording",
    "Video Production",
    "Audio Editing",
    "Localization",
    "Subtitling",
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
                Media Production
              </Badge>
            </motion.div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 dark:text-navy-50 mb-6">
              Professional Media Services
            </h1>
            <p className="text-xl text-navy-600 dark:text-navy-300 mb-8 leading-relaxed">
              High-quality media production, dubbing, and localization services to help your content reach global audiences with professional excellence.
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
                Bring Your Content to Life
              </h2>
              <p className="text-lg text-navy-600 dark:text-navy-300 mb-6 leading-relaxed">
                Our media production team delivers professional-quality content that engages audiences worldwide. From dubbing to video production, we ensure every project meets the highest standards.
              </p>
              <p className="text-lg text-navy-600 dark:text-navy-300 mb-8 leading-relaxed">
                With experienced professionals and state-of-the-art equipment, we transform your content into compelling media experiences that resonate with your target audience.
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
                  <Video className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-2" />
                  <CardTitle className="text-xl text-navy-900 dark:text-navy-50">Video Production</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 dark:text-navy-300 text-sm">Professional video creation</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 transition-colors bg-white dark:bg-navy-900/50">
                <CardHeader>
                  <Mic className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-2" />
                  <CardTitle className="text-xl text-navy-900 dark:text-navy-50">Dubbing Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 dark:text-navy-300 text-sm">Multi-language voice-over</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 transition-colors bg-white dark:bg-navy-900/50">
                <CardHeader>
                  <Languages className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-2" />
                  <CardTitle className="text-xl text-navy-900 dark:text-navy-50">Localization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 dark:text-navy-300 text-sm">Cultural adaptation</p>
                </CardContent>
              </Card>
              <Card className="border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 transition-colors bg-white dark:bg-navy-900/50">
                <CardHeader>
                  <Music className="h-8 w-8 text-amber-600 dark:text-amber-400 mb-2" />
                  <CardTitle className="text-xl text-navy-900 dark:text-navy-50">Audio Production</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-navy-600 dark:text-navy-300 text-sm">Sound design and mixing</p>
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
              Comprehensive media production services tailored to your needs
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
              Our Production Process
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
              Professional media solutions for every need
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
                      <Film className="h-6 w-6 text-navy-900 dark:text-navy-100" />
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
              Ready to Create Compelling Media?
            </h2>
            <p className="text-lg mb-8 text-navy-200">
              Let's bring your content to life with professional media production.
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
