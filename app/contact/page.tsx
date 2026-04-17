"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader as Loader2,
  Clock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { companyInfo } from "@/lib/data";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic client-side validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        if (data.errors && data.errors.length > 0) {
          data.errors.forEach((error: string) => toast.error(error));
        } else {
          toast.error(
            data.message || "Failed to send message. Please try again.",
          );
        }
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Have a project in mind or questions about our services? We'd love
              to hear from you!
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: Mail,
                title: "Email Us",
                content: companyInfo.email,
                href: `mailto:${companyInfo.email}`,
              },
              {
                icon: Phone,
                title: "Call Us",
                content: companyInfo.phone,
                href: `tel:${companyInfo.phone}`,
              },
              {
                icon: MapPin,
                title: "Visit Us",
                content: companyInfo.address,
                href: "#",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow duration-300 border-2 border-navy-200 dark:border-navy-800 hover:border-amber-500 dark:hover:border-amber-400 bg-white dark:bg-navy-900/50">
                  <CardHeader>
                    <div className="w-14 h-14 bg-navy-100 dark:bg-navy-800 rounded-sm flex items-center justify-center mx-auto mb-4 border-2 border-navy-200 dark:border-navy-700">
                      <item.icon className="h-7 w-7 text-navy-900 dark:text-navy-100" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.href.startsWith("#") ? (
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.content}
                      </p>
                    ) : (
                      <a
                        href={item.href}
                        className="text-amber-600 dark:text-amber-400 hover:underline"
                      >
                        {item.content}
                      </a>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll respond as soon as
                    possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        minLength={2}
                        maxLength={100}
                      />
                    </div>

                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        placeholder="What is this regarding?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1"
                        minLength={5}
                        maxLength={200}
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell us more about your project or inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="mt-1"
                        minLength={10}
                        maxLength={2000}
                      />
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-navy-900 dark:bg-navy-50 hover:bg-navy-800 dark:hover:bg-navy-100 text-white dark:text-navy-900 border-2 border-navy-900 dark:border-navy-50"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Why Contact Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    {
                      title: "Expert Consultation",
                      description:
                        "Get professional advice on your software, media, or printing needs",
                    },
                    {
                      title: "Custom Solutions",
                      description:
                        "We design tailored solutions that perfectly fit your requirements",
                    },
                    {
                      title: "Quick Response",
                      description:
                        "Our team responds promptly to all inquiries within 24 hours",
                    },
                    {
                      title: "Transparent Pricing",
                      description:
                        "Receive clear, competitive quotes with no hidden costs",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-amber-500 pl-4"
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-navy-900 dark:bg-navy-800 text-white border-2 border-navy-900 dark:border-navy-700">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Clock className="mr-2 h-5 w-5" />
                    Office Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-navy-200">
                  <div className="flex justify-between items-center">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saturday</span>
                    <span className="font-semibold">9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-amber-600 text-white border-2 border-amber-600">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    What Happens Next?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-amber-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      1
                    </div>
                    <p className="text-sm">
                      We'll review your message within 2 hours
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      2
                    </div>
                    <p className="text-sm">
                      Our team will respond with next steps
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                      3
                    </div>
                    <p className="text-sm">
                      We'll schedule a consultation if needed
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
