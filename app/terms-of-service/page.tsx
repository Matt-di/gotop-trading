"use client";

import { motion } from "framer-motion";
import {
  Scale,
  FileText,
  AlertTriangle,
  CheckCircle,
  Users,
  Shield,
  Clock,
  Mail,
  Phone,
  MapPin,
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

export default function TermsOfServicePage() {
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
                <Scale className="h-8 w-8 text-navy-900 dark:text-navy-100" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Please read these terms carefully before using our services.
            </p>
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <span className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Effective date: January 2025
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
            {/* Agreement Overview */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-amber-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <FileText className="mr-3 h-6 w-6 text-amber-600 dark:text-amber-400" />
                    Agreement to Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    By accessing and using GoTop Trading PLC's services,
                    website, or any related platforms, you accept and agree to
                    be bound by the terms and provision of this agreement. These
                    Terms of Service constitute a legally binding agreement
                    between you and GoTop Trading PLC.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    If you do not agree to abide by the above, please do not use
                    this service.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Services Description */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <CheckCircle className="mr-3 h-6 w-6 text-green-600" />
                    Services Description
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    GoTop Trading PLC provides the following services:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                    <li>
                      <strong>Software Development:</strong> Custom software
                      solutions, web applications, mobile apps, and system
                      integration
                    </li>
                    <li>
                      <strong>Media Production:</strong> Professional media
                      production, dubbing services, and content localization
                    </li>
                    <li>
                      <strong>Printing Services:</strong> High-quality digital
                      and offset printing, large format printing, and finishing
                      services
                    </li>
                    <li>
                      <strong>Consulting Services:</strong> Technology
                      consulting, project management, and digital transformation
                      guidance
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* User Responsibilities */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-navy-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Users className="mr-3 h-6 w-6 text-navy-600 dark:text-navy-400" />
                    User Responsibilities
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                    <li>
                      Provide accurate and complete information when requesting
                      services
                    </li>
                    <li>
                      Use our services in compliance with applicable laws and
                      regulations
                    </li>
                    <li>
                      Respect intellectual property rights and confidentiality
                      agreements
                    </li>
                    <li>
                      Not engage in any harmful, fraudulent, or malicious
                      activities
                    </li>
                    <li>
                      Cooperate with our team during project development and
                      implementation
                    </li>
                    <li>Provide timely feedback and approvals as required</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Intellectual Property */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Shield className="mr-3 h-6 w-6 text-orange-600" />
                    Intellectual Property Rights
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Our Intellectual Property
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        All content, features, and functionality of our
                        services, including but not limited to text, graphics,
                        logos, software code, and designs, are owned by GoTop
                        Trading PLC and are protected by copyright, trademark,
                        and other intellectual property laws.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Client Intellectual Property
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        We respect your intellectual property rights. Any
                        materials, specifications, or content you provide remain
                        your property. Custom solutions developed for you will
                        be delivered with appropriate usage rights as specified
                        in project agreements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Service Delivery and Support */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-amber-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Clock className="mr-3 h-6 w-6 text-amber-600 dark:text-amber-400" />
                    Service Delivery and Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Project Timelines
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        We strive to deliver all projects according to
                        agreed-upon timelines. However, delays may occur due to
                        factors beyond our control, including but not limited to
                        client feedback delays, technical challenges, or
                        external dependencies.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Support and Maintenance
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Post-delivery support is provided according to the terms
                        specified in individual project agreements. Emergency
                        support may incur additional charges depending on the
                        service level agreement.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Payment Terms */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-green-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Scale className="mr-3 h-6 w-6 text-green-600" />
                    Payment Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Payment Schedule
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Payment terms are specified in individual project
                        proposals and contracts. Generally, we require:
                      </p>
                      <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                        <li>50% advance payment for project initiation</li>
                        <li>25% at project midpoint/milestone completion</li>
                        <li>25% upon project completion and delivery</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Late Payments
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Late payments may result in project suspension and
                        additional charges. Interest at the rate of 1.5% per
                        month may be applied to overdue amounts after 30 days.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Limitation of Liability */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-red-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <AlertTriangle className="mr-3 h-6 w-6 text-red-600" />
                    Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    To the maximum extent permitted by applicable law, GoTop
                    Trading PLC shall not be liable for:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                    <li>
                      Indirect, incidental, special, or consequential damages
                    </li>
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>
                      Damages exceeding the amount paid for services in the 12
                      months preceding the claim
                    </li>
                    <li>Issues arising from misuse of delivered solutions</li>
                    <li>Third-party claims or disputes</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Confidentiality */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-yellow-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Shield className="mr-3 h-6 w-6 text-yellow-600" />
                    Confidentiality
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Both parties agree to maintain the confidentiality of
                    proprietary and sensitive information shared during the
                    course of business relationships. This includes but is not
                    limited to:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                    <li>Trade secrets and business strategies</li>
                    <li>Technical specifications and source code</li>
                    <li>Customer data and project details</li>
                    <li>Financial information and pricing structures</li>
                  </ul>
                  <p className="text-gray-700 dark:text-gray-300 mt-4">
                    Confidentiality obligations survive the termination of
                    service agreements for a period of 3 years.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Termination */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-navy-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <FileText className="mr-3 h-6 w-6 text-navy-600 dark:text-navy-400" />
                    Termination of Services
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        By Client
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Clients may terminate services with written notice,
                        subject to payment for completed work and applicable
                        cancellation fees.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                        By GoTop Trading PLC
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        We reserve the right to terminate services for
                        violations of these terms, non-payment, or other
                        reasonable causes with appropriate notice.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Governing Law */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-indigo-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Scale className="mr-3 h-6 w-6 text-indigo-600" />
                    Governing Law and Dispute Resolution
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    These Terms of Service are governed by the laws of the
                    Federal Democratic Republic of Ethiopia. Any disputes
                    arising from these terms or our services shall be resolved
                    through:
                  </p>
                  <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                    <li>Good faith negotiations between the parties</li>
                    <li>Mediation through a mutually agreed-upon mediator</li>
                    <li>
                      Arbitration in Addis Ababa, Ethiopia (if mediation fails)
                    </li>
                    <li>Litigation in Ethiopian courts (as a last resort)</li>
                  </ol>
                </CardContent>
              </Card>
            </motion.div>

            {/* Updates to Terms */}
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-pink-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Clock className="mr-3 h-6 w-6 text-pink-600" />
                    Updates to Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300">
                    We reserve the right to modify these Terms of Service at any
                    time. We will notify users of material changes via email or
                    prominent notice on our website. Continued use of our
                    services after changes constitute acceptance of the updated
                    terms.
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
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    For questions about these Terms of Service, please contact
                    us:
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300">
                      <strong>GoTop Trading PLC</strong>
                      <br />
                      Email: legal@gotop.et
                      <br />
                      Phone: +251911879421
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
