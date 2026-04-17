"use client";

import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Award,
  Users,
  Calendar,
  MapPin,
  Star,
  TrendingUp,
  Heart,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { companyInfo, clients } from "@/lib/data";
import type { Metadata } from "next";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function AboutPage() {
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
              About GoTop Trading PLC
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Leading the way in integrated technology and media solutions since{" "}
              {companyInfo.founded}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Who We Are
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                {companyInfo.about}
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Founded
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {companyInfo.founded}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Location
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">
                      {companyInfo.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-navy-900 dark:bg-navy-800 rounded-sm overflow-hidden border-2 border-navy-200 dark:border-navy-700">
                <div className="absolute inset-0 flex items-center justify-center text-navy-300 dark:text-navy-600 text-8xl">
                  🏢
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-l-4 border-l-amber-600">
                <CardHeader>
                  <div className="w-12 h-12 bg-amber-100 dark:bg-amber-900/30 rounded-sm flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {companyInfo.mission}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-l-4 border-l-navy-600">
                <CardHeader>
                  <div className="w-12 h-12 bg-navy-100 dark:bg-navy-900/30 rounded-sm flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-navy-600 dark:text-navy-400" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {companyInfo.vision}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We bring together expertise, innovation, and commitment to deliver
              exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Proven Excellence",
                description:
                  "Years of successful projects with prestigious clients across government and private sectors",
              },
              {
                icon: Users,
                title: "Expert Team",
                description:
                  "Skilled professionals combining technical expertise with creative excellence",
              },
              {
                icon: Heart,
                title: "Client-Focused",
                description:
                  "Dedicated to understanding and exceeding client expectations with tailored solutions",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50">
                  <CardHeader>
                    <div className="w-16 h-16 bg-navy-100 dark:bg-navy-800 rounded-sm flex items-center justify-center mx-auto mb-4 border-2 border-navy-200 dark:border-navy-700">
                      <item.icon className="h-8 w-8 text-navy-900 dark:text-navy-100" />
                    </div>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Star,
                title: "Quality First",
                description:
                  "We never compromise on quality, ensuring every project meets the highest standards",
              },
              {
                icon: TrendingUp,
                title: "Innovation",
                description:
                  "We continuously explore new technologies and methods to deliver cutting-edge solutions",
              },
              {
                icon: Heart,
                title: "Integrity",
                description:
                  "We build lasting relationships through honesty, transparency, and ethical practices",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50">
                  <CardHeader>
                    <div className="w-16 h-16 bg-navy-100 dark:bg-navy-800 rounded-sm flex items-center justify-center mx-auto mb-4 border-2 border-navy-200 dark:border-navy-700">
                      <item.icon className="h-8 w-8 text-navy-900 dark:text-navy-100" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Clients & Collaborations
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Trusted by leading organizations across Ethiopia
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {clients.map((client, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md flex flex-col items-center justify-center text-center"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-16 w-16 object-contain mb-3"
                />
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {client.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
