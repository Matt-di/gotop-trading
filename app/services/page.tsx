"use client";

import { motion } from "framer-motion";
import { Code as Code2, Film, Printer, CircleCheck as CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/data";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ServicesPage() {
  const icons = {
    software: Code2,
    media: Film,
    printing: Printer
  };

  return (
    <div className="flex flex-col">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Comprehensive technology and media solutions designed to drive your business forward
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = icons[service.id as keyof typeof icons];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="scroll-mt-24"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {service.title}
                      </h2>
                      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                        {service.fullDescription}
                      </p>
                      <div className="space-y-3 mb-8">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Link href="/contact">
                            Get Started <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </motion.div>
                    </div>

                    <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                      <Card className="overflow-hidden border-2 hover:border-blue-500 dark:hover:border-blue-400 transition-colors duration-300">
                        <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-blue-950 flex items-center justify-center p-12">
                          <div className="text-9xl">
                            {service.id === 'software' && '💻'}
                            {service.id === 'media' && '🎬'}
                            {service.id === 'printing' && '🖨️'}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-lg mb-8 text-blue-100 max-w-2xl mx-auto">
              We specialize in creating tailored solutions that meet your unique business requirements.
              Let's discuss how we can help you achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="secondary">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                  <Link href="/portfolio">View Our Work</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
