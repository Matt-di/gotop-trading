"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Settings, Users, FileText, Image, MessageSquare } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AdminLayout } from "@/components/admin/AdminLayout";

interface DashboardStats {
  services: number;
  portfolio: number;
  blogPosts: number;
  testimonials: number;
  clients: number;
  contactSubmissions: number;
}

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats>({
    services: 0,
    portfolio: 0,
    blogPosts: 0,
    testimonials: 0,
    clients: 0,
    contactSubmissions: 0,
  });
  const router = useRouter();

  useEffect(() => {
    checkAuth();
    fetchStats();
  }, []);

  const checkAuth = async () => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAuthenticated(true);
    } else {
      router.push("/admin/login");
    }
    setLoading(false);
  };

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/dashboard/stats");
      if (response.ok) {
        const data = await response.json();
        setStats(data);
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <AdminLayout currentPage="dashboard">
      <div className="space-y-8">
        <h2 className="text-2xl font-bold">Dashboard Overview</h2>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Services
              </CardTitle>
              <Settings className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.services}</div>
              <p className="text-xs text-muted-foreground">
                Active service offerings
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Portfolio Projects
              </CardTitle>
              <Image className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.portfolio}</div>
              <p className="text-xs text-muted-foreground">
                Completed projects
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Blog Posts</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.blogPosts}</div>
              <p className="text-xs text-muted-foreground">
                Published articles
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Testimonials
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.testimonials}</div>
              <p className="text-xs text-muted-foreground">Client reviews</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.clients}</div>
              <p className="text-xs text-muted-foreground">
                Partner organizations
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Contact Messages
              </CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {stats.contactSubmissions}
              </div>
              <p className="text-xs text-muted-foreground">Unread messages</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a href="/admin/services" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2" />
                  Manage Services
                </CardTitle>
                <CardDescription>
                  Add, edit, or remove service offerings
                </CardDescription>
              </CardHeader>
            </Card>
          </a>

          <a href="/admin/portfolio" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Image className="h-5 w-5 mr-2" />
                  Manage Portfolio
                </CardTitle>
                <CardDescription>
                  Update projects and showcase work
                </CardDescription>
              </CardHeader>
            </Card>
          </a>

          <a href="/admin/clients" className="block">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Manage Clients
                </CardTitle>
                <CardDescription>
                  Update client logos and information
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
        </div>
      </div>
    </AdminLayout>
  );
}
