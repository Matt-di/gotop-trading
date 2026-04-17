"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AdminLayout } from "@/components/admin/AdminLayout";
import { ClientsManager } from "@/components/admin/ClientsManager";

export default function AdminClientsPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
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
    <AdminLayout currentPage="clients">
      <ClientsManager />
    </AdminLayout>
  );
}
