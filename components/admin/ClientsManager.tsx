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
import { Plus, Edit, Trash2, Save, X, Building2 } from 'lucide-react';

interface Client {
  id: string;
  name: string;
  logoUrl: string;
  description: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export function ClientsManager() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await fetch('/api/admin/clients');

      if (response.ok) {
        const data = await response.json();
        setClients(data);
      } else {
        console.error('Failed to fetch clients');
      }
    } catch (error) {
      console.error('Error fetching clients:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateClient = async (clientData: Partial<Client>) => {
    try {
      const response = await fetch('/api/admin/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      });

      if (response.ok) {
        fetchClients();
        setIsDialogOpen(false);
      }
    } catch (error) {
      console.error('Error creating client:', error);
    }
  };

  const handleUpdateClient = async (id: string, clientData: Partial<Client>) => {
    try {
      const response = await fetch(`/api/admin/clients/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(clientData),
      });

      if (response.ok) {
        fetchClients();
        setEditingClient(null);
      }
    } catch (error) {
      console.error('Error updating client:', error);
    }
  };

  const handleDeleteClient = async (id: string) => {
    if (!confirm('Are you sure you want to delete this client?')) return;

    try {
      const response = await fetch(`/api/admin/clients/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchClients();
      }
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading clients...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Clients Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Client
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Client</DialogTitle>
              <DialogDescription>
                Add a new client to showcase your partnerships.
              </DialogDescription>
            </DialogHeader>
            <ClientForm onSubmit={handleCreateClient} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clients.map((client) => (
          <Card key={client.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant={client.isFeatured ? "default" : "secondary"}>
                  {client.isFeatured ? 'Featured' : 'Standard'}
                </Badge>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingClient(client)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteClient(client.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden">
                {client.logoUrl ? (
                  <img
                    src={client.logoUrl}
                    alt={client.name}
                    className="w-full h-full object-contain p-4"
                  />
                ) : (
                  <Building2 className="h-12 w-12 text-gray-400" />
                )}
              </div>
              <CardTitle className="text-lg">{client.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {client.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      {editingClient && (
        <Dialog open={!!editingClient} onOpenChange={() => setEditingClient(null)}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Client</DialogTitle>
              <DialogDescription>
                Update the client information.
              </DialogDescription>
            </DialogHeader>
            <ClientForm
              initialData={editingClient}
              onSubmit={(data) => handleUpdateClient(editingClient.id, data)}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

interface ClientFormProps {
  initialData?: Client;
  onSubmit: (data: Partial<Client>) => void;
}

function ClientForm({ initialData, onSubmit }: ClientFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    description: initialData?.description || '',
    logoUrl: initialData?.logoUrl || '',
    isFeatured: initialData?.isFeatured ?? false,
  });
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleImageUpload = async (file: File) => {
    setUploading(true);
    try {
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);

      const response = await fetch("/api/admin/upload", {
        method: "POST",
        body: uploadFormData,
      });

      if (response.ok) {
        const data = await response.json();
        setFormData({ ...formData, logoUrl: data.url });
      } else {
        console.error("Failed to upload image");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Client Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="logoUrl">Client Logo</Label>
        <div
          className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
            dragActive ? 'border-amber-500 bg-amber-50 dark:bg-amber-900/20' : 'border-gray-300 dark:border-gray-600'
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {formData.logoUrl ? (
            <div className="relative">
              <img
                src={formData.logoUrl}
                alt="Logo Preview"
                className="w-full h-32 object-contain rounded-md"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => setFormData({ ...formData, logoUrl: '' })}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div>
              <Building2 className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {uploading ? 'Uploading...' : 'Drag & drop a logo or click to upload'}
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files && handleImageUpload(e.target.files[0])}
                className="hidden"
                id="logo-upload"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => document.getElementById('logo-upload')?.click()}
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : 'Choose File'}
              </Button>
            </div>
          )}
        </div>
        <Input
          id="logoUrl"
          value={formData.logoUrl}
          onChange={(e) => setFormData({ ...formData, logoUrl: e.target.value })}
          placeholder="Or paste logo URL"
          className="mt-2"
        />
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="isFeatured"
          checked={formData.isFeatured}
          onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
          className="rounded"
        />
        <Label htmlFor="isFeatured">Featured Client</Label>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={() => onSubmit({})}>
          Cancel
        </Button>
        <Button type="submit">
          <Save className="h-4 w-4 mr-2" />
          Save Client
        </Button>
      </div>
    </form>
  );
}
