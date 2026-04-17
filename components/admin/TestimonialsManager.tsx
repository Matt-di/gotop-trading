"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import {
  Plus,
  Edit,
  Trash2,
  Save,
  X,
  Star,
  Image as ImageIcon,
} from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  imageUrl?: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingTestimonial, setEditingTestimonial] =
    useState<Testimonial | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const response = await fetch("/api/admin/testimonials");
      if (response.ok) {
        const data = await response.json();
        setTestimonials(data);
      }
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTestimonial = async (
    testimonialData: Partial<Testimonial>,
  ) => {
    try {
      const response = await fetch("/api/admin/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonialData),
      });

      if (response.ok) {
        fetchTestimonials();
        setIsDialogOpen(false);
      }
    } catch (error) {
      console.error("Error creating testimonial:", error);
    }
  };

  const handleUpdateTestimonial = async (
    id: string,
    testimonialData: Partial<Testimonial>,
  ) => {
    try {
      const response = await fetch(`/api/admin/testimonials/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testimonialData),
      });

      if (response.ok) {
        fetchTestimonials();
        setEditingTestimonial(null);
      }
    } catch (error) {
      console.error("Error updating testimonial:", error);
    }
  };

  const handleDeleteTestimonial = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;

    try {
      const response = await fetch(`/api/admin/testimonials/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchTestimonials();
      }
    } catch (error) {
      console.error("Error deleting testimonial:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading testimonials...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Testimonials</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Testimonial
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Testimonial</DialogTitle>
              <DialogDescription>
                Add a new testimonial to your website
              </DialogDescription>
            </DialogHeader>
            <TestimonialForm
              onSubmit={handleCreateTestimonial}
              onCancel={() => setIsDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                  <CardDescription className="mt-1">
                    {testimonial.role}
                    {testimonial.company && ` • ${testimonial.company}`}
                  </CardDescription>
                </div>
                {testimonial.featured && (
                  <Badge variant="default">Featured</Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">{testimonial.content}</p>
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= testimonial.rating
                          ? "fill-amber-500 text-amber-500"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingTestimonial(testimonial)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeleteTestimonial(testimonial.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {editingTestimonial && (
        <Dialog
          open={!!editingTestimonial}
          onOpenChange={() => setEditingTestimonial(null)}
        >
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Testimonial</DialogTitle>
              <DialogDescription>
                Update testimonial information
              </DialogDescription>
            </DialogHeader>
            <TestimonialForm
              testimonial={editingTestimonial}
              onSubmit={(data) =>
                handleUpdateTestimonial(editingTestimonial.id, data)
              }
              onCancel={() => setEditingTestimonial(null)}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

interface TestimonialFormProps {
  testimonial?: Testimonial;
  onSubmit: (data: Partial<Testimonial>) => void;
  onCancel: () => void;
}

function TestimonialForm({
  testimonial,
  onSubmit,
  onCancel,
}: TestimonialFormProps) {
  const [formData, setFormData] = useState({
    name: testimonial?.name || "",
    role: testimonial?.role || "",
    company: testimonial?.company || "",
    content: testimonial?.content || "",
    rating: testimonial?.rating || 5,
    imageUrl: testimonial?.imageUrl || "",
    featured: testimonial?.featured || false,
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
        setFormData({ ...formData, imageUrl: data.url });
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
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">Role</Label>
        <Input
          id="role"
          value={formData.role}
          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company (optional)</Label>
        <Input
          id="company"
          value={formData.company}
          onChange={(e) =>
            setFormData({ ...formData, company: e.target.value })
          }
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Testimonial</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          required
          rows={4}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="rating">Rating (1-5)</Label>
        <Input
          id="rating"
          type="number"
          min="1"
          max="5"
          value={formData.rating}
          onChange={(e) =>
            setFormData({ ...formData, rating: parseInt(e.target.value) })
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">Image URL (optional)</Label>
        <div
          className={`border-2 border-dashed rounded-lg p-4 text-center transition-colors ${
            dragActive
              ? "border-amber-500 bg-amber-50 dark:bg-amber-900/20"
              : "border-gray-300 dark:border-gray-600"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          {formData.imageUrl ? (
            <div className="relative">
              <img
                src={formData.imageUrl}
                alt="Image Preview"
                className="w-full h-32 object-contain rounded-md"
              />
              <Button
                type="button"
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => setFormData({ ...formData, imageUrl: "" })}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div>
              <ImageIcon className="h-8 w-8 mx-auto mb-2 text-gray-400" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {uploading
                  ? "Uploading..."
                  : "Drag & drop an image or click to upload"}
              </p>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files && handleImageUpload(e.target.files[0])
                }
                className="hidden"
                id="image-upload"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-2"
                onClick={() => document.getElementById("image-upload")?.click()}
                disabled={uploading}
              >
                {uploading ? "Uploading..." : "Choose File"}
              </Button>
            </div>
          )}
        </div>
        <Input
          id="imageUrl"
          value={formData.imageUrl}
          onChange={(e) =>
            setFormData({ ...formData, imageUrl: e.target.value })
          }
          placeholder="Or paste image URL"
          className="mt-2"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="featured"
          checked={formData.featured}
          onCheckedChange={(checked) =>
            setFormData({ ...formData, featured: checked })
          }
        />
        <Label htmlFor="featured">Featured</Label>
      </div>

      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          <X className="h-4 w-4 mr-2" />
          Cancel
        </Button>
        <Button type="submit">
          <Save className="h-4 w-4 mr-2" />
          Save
        </Button>
      </div>
    </form>
  );
}
