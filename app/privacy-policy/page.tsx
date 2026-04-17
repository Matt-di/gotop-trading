"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Eye,
  Lock,
  Database,
  Users,
  FileText,
  Calendar,
  Mail,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-industrial-pattern bg-background py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-block mb-6"
            >
              <div className="w-16 h-16 bg-navy-100 dark:bg-navy-800 rounded-sm flex items-center justify-center mx-auto mb-4 border-2 border-navy-200 dark:border-navy-700">
                <Shield className="h-8 w-8 text-navy-900 dark:text-navy-100" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Your privacy is important to us. This policy explains how we
              collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                Last updated: January 2025
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={{ animate: { transition: { staggerChildren: 0.1 } } }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-amber-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Eye className="mr-3 h-6 w-6 text-amber-600 dark:text-amber-400" />
                    Introduction
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    GoTop Trading PLC ("we," "our," or "us") respects your
                    privacy and is committed to protecting your personal
                    information. This Privacy Policy explains how we collect,
                    use, disclose, and safeguard your information when you visit
                    our website, use our services, or interact with us.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Information We Collect */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Database className="mr-3 h-6 w-6 text-green-600" />
                    Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Personal Information
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        We may collect personal information such as:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                        <li>
                          Name, email address, phone number, and company details
                        </li>
                        <li>
                          Project requirements and technical specifications
                        </li>
                        <li>Communication preferences and history</li>
                        <li>Payment information for services rendered</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Automatically Collected Information
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        When you visit our website, we may automatically
                        collect:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                        <li>
                          IP address, browser type, and device information
                        </li>
                        <li>Pages visited and time spent on our site</li>
                        <li>Referring website information</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* How We Use Information */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-navy-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Users className="mr-3 h-6 w-6 text-navy-600 dark:text-navy-400" />
                    How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We use collected information for various purposes,
                    including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                    <li>Providing and maintaining our services</li>
                    <li>
                      Processing transactions and sending related information
                    </li>
                    <li>Communicating with you about projects and updates</li>
                    <li>Improving our website and service offerings</li>
                    <li>Complying with legal obligations</li>
                    <li>Protecting against fraud and unauthorized access</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Information Sharing */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Lock className="mr-3 h-6 w-6 text-orange-600" />
                    Information Sharing and Disclosure
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We do not sell, trade, or rent your personal information to
                    third parties. We may share your information only in the
                    following circumstances:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                    <li>With your explicit consent</li>
                    <li>
                      With trusted service providers who assist in our
                      operations
                    </li>
                    <li>When required by law or to protect our rights</li>
                    <li>
                      In connection with a business transfer or acquisition
                    </li>
                    <li>
                      To protect the safety and security of our users and
                      services
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Data Security */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Shield className="mr-3 h-6 w-6 text-red-600" />
                    Data Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300">
                    We implement appropriate technical and organizational
                    security measures to protect your personal information
                    against unauthorized access, alteration, disclosure, or
                    destruction. These measures include encryption, secure
                    servers, access controls, and regular security assessments.
                    However, no method of transmission over the internet is 100%
                    secure, and we cannot guarantee absolute security.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Your Rights */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-amber-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <FileText className="mr-3 h-6 w-6 text-amber-600 dark:text-amber-400" />
                    Your Rights and Choices
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    You have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                    <li>
                      <strong>Access:</strong> Request information about the
                      personal data we hold about you
                    </li>
                    <li>
                      <strong>Correction:</strong> Request correction of
                      inaccurate or incomplete information
                    </li>
                    <li>
                      <strong>Deletion:</strong> Request deletion of your
                      personal information (subject to legal requirements)
                    </li>
                    <li>
                      <strong>Restriction:</strong> Request limitation of
                      processing under certain circumstances
                    </li>
                    <li>
                      <strong>Portability:</strong> Request a copy of your data
                      in a structured format
                    </li>
                    <li>
                      <strong>Objection:</strong> Object to processing for
                      direct marketing purposes
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Cookies */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Database className="mr-3 h-6 w-6 text-yellow-600" />
                    Cookies and Tracking Technologies
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We use cookies and similar tracking technologies to enhance
                    your experience on our website:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                    <li>
                      <strong>Essential Cookies:</strong> Required for basic
                      website functionality
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Help us understand how
                      visitors interact with our site
                    </li>
                    <li>
                      <strong>Functional Cookies:</strong> Remember your
                      preferences and settings
                    </li>
                    <li>
                      <strong>Marketing Cookies:</strong> Used to deliver
                      relevant advertisements
                    </li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    You can control cookie settings through your browser
                    preferences. However, disabling certain cookies may affect
                    website functionality.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-green-600 bg-green-50 dark:bg-green-950/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Mail className="mr-3 h-6 w-6 text-green-600" />
                    Contact Us
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    If you have any questions about this Privacy Policy or our
                    privacy practices, please contact us:
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>GoTop Trading PLC</strong>
                      <br />
                      Email: privacy@gotop.et
                      <br />
                      Phone: +251 11 123 4567
                      <br />
                      Address: Addis Ababa, Ethiopia
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
