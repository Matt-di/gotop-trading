"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  LayoutDashboard,
  Settings,
  Users,
  FileText,
  Image,
  MessageSquare,
  Mail,
  User,
  Menu,
  X,
  Search,
  Sun,
  Moon,
  Bell,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

interface AdminLayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

export function AdminLayout({ children, currentPage }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    router.push("/admin/login");
  };

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      current: currentPage === "dashboard",
    },
    {
      name: "Services",
      href: "/admin/services",
      icon: Settings,
      current: currentPage === "services",
    },
    {
      name: "Portfolio",
      href: "/admin/portfolio",
      icon: Image,
      current: currentPage === "portfolio",
    },
    {
      name: "Blog",
      href: "/admin/blog",
      icon: FileText,
      current: currentPage === "blog",
    },
    {
      name: "Testimonials",
      href: "/admin/testimonials",
      icon: MessageSquare,
      current: currentPage === "testimonials",
    },
    {
      name: "Clients",
      href: "/admin/clients",
      icon: Users,
      current: currentPage === "clients",
    },
    {
      name: "Messages",
      href: "/admin/messages",
      icon: Mail,
      current: currentPage === "messages",
    },
    {
      name: "Profile",
      href: "/admin/profile",
      icon: User,
      current: currentPage === "profile",
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-gray-600 bg-opacity-75"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:flex-shrink-0`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-navy-900 dark:bg-amber-500 rounded-lg flex items-center justify-center">
              <LayoutDashboard className="h-5 w-5 text-white dark:text-navy-900" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              Admin
            </span>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <nav className="mt-6 px-3">
          <div className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  item.current
                    ? "bg-navy-100 text-navy-700 dark:bg-navy-900 dark:text-navy-200"
                    : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                <item.icon
                  className={`mr-3 h-5 w-5 ${item.current ? "text-amber-600 dark:text-amber-400" : "text-gray-400 group-hover:text-gray-500"}`}
                />
                {item.name}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top header */}
        <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden mr-2"
                  onClick={() => setSidebarOpen(true)}
                >
                  <Menu className="h-5 w-5" />
                </Button>

                <div className="flex items-center space-x-4">
                  <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    {navigation.find((nav) => nav.current)?.name || "Dashboard"}
                  </h1>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input placeholder="Search..." className="pl-10 w-64" />
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>

                <Button variant="ghost" size="sm" className="relative">
                  <Bell className="h-5 w-5" />
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                    3
                  </Badge>
                </Button>

                <Button variant="outline" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">
          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
