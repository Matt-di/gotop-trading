"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Code as Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-navy-950/90 backdrop-blur-md border-b border-navy-200 dark:border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/assets/logos/company/gotop-logo.png"
                alt="GoTop Trading Logo"
                className="h-8 w-8 object-contain group-hover:brightness-110 transition-all"
              />
            </motion.div>
            <span className="text-xl font-bold text-navy-900 dark:text-navy-50 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
              GoTop Trading
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium transition-colors group"
              >
                <span
                  className={
                    pathname === link.href
                      ? "text-amber-600 dark:text-amber-400"
                      : "text-navy-700 dark:text-navy-300 hover:text-amber-600 dark:hover:text-amber-400"
                  }
                >
                  {link.label}
                </span>
                {pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 dark:bg-amber-400"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-600 dark:bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-navy-100 dark:hover:bg-navy-800 transition-colors"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-navy-900 dark:text-navy-50" />
              ) : (
                <Menu className="h-6 w-6 text-navy-900 dark:text-navy-50" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-navy-200 dark:border-navy-800 bg-white dark:bg-navy-950"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "bg-amber-50 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400"
                      : "text-navy-700 dark:text-navy-300 hover:bg-navy-100 dark:hover:bg-navy-800"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
