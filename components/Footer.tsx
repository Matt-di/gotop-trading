"use client";

import Link from "next/link";
import {
  Code as Code2,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import { motion } from "framer-motion";
import { companyInfo } from "@/lib/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="/assets/logos/company/gotop-logo.png"
                alt="GoTop Trading Logo"
                className="h-8 w-8 object-contain"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                GoTop Trading
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {companyInfo.tagline}
            </p>
            <div className="flex space-x-3">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://linkedin.com/company/gotop-trading"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-navy-900 hover:text-white dark:hover:bg-navy-50 dark:hover:text-navy-900 transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://twitter.com/gotoptrading"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-navy-900 hover:text-white dark:hover:bg-navy-50 dark:hover:text-navy-900 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-4 w-4" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://facebook.com/gotoptrading"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-navy-900 hover:text-white dark:hover:bg-navy-50 dark:hover:text-navy-900 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-4 w-4" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services#software"
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 text-sm transition-colors"
                >
                  Software Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services#media"
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 text-sm transition-colors"
                >
                  Media & Dubbing
                </Link>
              </li>
              <li>
                <Link
                  href="/services#printing"
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 text-sm transition-colors"
                >
                  Printing Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 text-sm transition-colors"
                >
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-gray-600 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 text-sm transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-400 text-sm">
                  {companyInfo.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
              © {currentYear} GoTop Trading PLC. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                href="/privacy-policy"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
