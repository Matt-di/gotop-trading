"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';

interface Service {
  id: string;
  name: string;
  icon: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  technologies: string[];
  processSteps: any[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export function ServicesManager() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await fetch('/api/admin/services');

      if (response.ok) {
        const data = await response.json();
        setServices(data);
      } else {
        console.error('Failed to fetch services');
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateService = async (serviceData: Partial<Service>) => {
    try {
      const response = await fetch('/api/admin/services', {
        method: 'POST',
      });

      if (response.ok) {
        fetchServices();
        setIsDialogOpen(false);
      }
    } catch (error) {
      console.error('Error creating service:', error);
    }
  };

  const handleUpdateService = async (id: string, serviceData: Partial<Service>) => {
    try {
      const response = await fetch(`/api/admin/services/${id}`, {
        method: 'PUT',
      });

      if (response.ok) {
        fetchServices();
        setEditingService(null);
      }
    } catch (error) {
      console.error('Error updating service:', error);
    }
  };

  const handleDeleteService = async (id: string) => {
    if (!confirm('Are you sure you want to delete this service?')) return;

    try {
      const response = await fetch(`/api/admin/services/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchServices();
      }
    } catch (error) {
      console.error('Error deleting service:', error);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading services...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Services Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Service
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Service</DialogTitle>
              <DialogDescription>
                Create a new service offering for your business.
              </DialogDescription>
            </DialogHeader>
            <ServiceForm onSubmit={handleCreateService} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant={service.isActive ? "default" : "secondary"}>
                  {service.isActive ? 'Active' : 'Inactive'}
                </Badge>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingService(service)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteService(service.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="text-4xl mb-2">{service.icon}</div>
              <CardTitle className="text-xl">{service.name}</CardTitle>
              <CardDescription>{service.shortDescription}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {service.fullDescription}
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">{service.features?.length || 0} features</Badge>
                <Badge variant="outline">{service.technologies?.length || 0} technologies</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      {editingService && (
        <Dialog open={!!editingService} onOpenChange={() => setEditingService(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Service</DialogTitle>
              <DialogDescription>
                Update the service information.
              </DialogDescription>
            </DialogHeader>
            <ServiceForm
              initialData={editingService}
              onSubmit={(data) => handleUpdateService(editingService.id, data)}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

interface ServiceFormProps {
  initialData?: Service;
  onSubmit: (data: Partial<Service>) => void;
}

function ServiceForm({ initialData, onSubmit }: ServiceFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    icon: initialData?.icon || '',
    shortDescription: initialData?.shortDescription || '',
    fullDescription: initialData?.fullDescription || '',
    features: Array.isArray(initialData?.features) ? initialData.features.join(', ') : '',
    technologies: Array.isArray(initialData?.technologies) ? initialData.technologies.join(', ') : '',
    isActive: initialData?.isActive ?? true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const serviceData = {
      ...formData,
      features: formData.features.split(',').map(f => f.trim()).filter(Boolean),
      technologies: formData.technologies.split(',').map(t => t.trim()).filter(Boolean),
    };

    onSubmit(serviceData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Service Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="icon">Icon (Emoji)</Label>
          <Input
            id="icon"
            value={formData.icon}
            onChange={(e) => setFormData({ ...formData, icon: e.target.value })}
            placeholder="💻"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="shortDescription">Short Description</Label>
        <Input
          id="shortDescription"
          value={formData.shortDescription}
          onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="fullDescription">Full Description</Label>
        <Textarea
          id="fullDescription"
          value={formData.fullDescription}
          onChange={(e) => setFormData({ ...formData, fullDescription: e.target.value })}
          rows={3}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="features">Features (comma-separated)</Label>
          <Input
            id="features"
            value={formData.features}
            onChange={(e) => setFormData({ ...formData, features: e.target.value })}
            placeholder="Feature 1, Feature 2, Feature 3"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="technologies">Technologies (comma-separated)</Label>
          <Input
            id="technologies"
            value={formData.technologies}
            onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
            placeholder="React, Node.js, PostgreSQL"
          />
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="isActive"
          checked={formData.isActive}
          onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
        />
        <Label htmlFor="isActive">Active</Label>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={() => onSubmit({})}>
          Cancel
        </Button>
        <Button type="submit">
          <Save className="h-4 w-4 mr-2" />
          Save Service
        </Button>
      </div>
    </form>
  );
}
