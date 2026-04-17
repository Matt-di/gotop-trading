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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Plus, Edit, Trash2, Save, X, Image as ImageIcon } from "lucide-react";

interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  year: string;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}

export function PortfolioManager() {
  const [projects, setProjects] = useState<PortfolioProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<PortfolioProject | null>(
    null,
  );
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/admin/portfolio");

      if (response.ok) {
        const data = await response.json();
        setProjects(data);
      } else {
        console.error("Failed to fetch portfolio projects");
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async (
    projectData: Partial<PortfolioProject>,
  ) => {
    try {
      const response = await fetch("/api/admin/portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        fetchProjects();
        setIsDialogOpen(false);
      }
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  const handleUpdateProject = async (
    id: string,
    projectData: Partial<PortfolioProject>,
  ) => {
    try {
      const response = await fetch(`/api/admin/portfolio/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        fetchProjects();
        setEditingProject(null);
      }
    } catch (error) {
      console.error("Error updating project:", error);
    }
  };

  const handleDeleteProject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;

    try {
      const response = await fetch(`/api/admin/portfolio/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchProjects();
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading projects...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Portfolio Management</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Project
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Project</DialogTitle>
              <DialogDescription>
                Add a new portfolio project to showcase your work.
              </DialogDescription>
            </DialogHeader>
            <PortfolioForm onSubmit={handleCreateProject} />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant={project.isFeatured ? "default" : "secondary"}>
                  {project.isFeatured ? "Featured" : "Standard"}
                </Badge>
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setEditingProject(project)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDeleteProject(project.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="aspect-video bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center overflow-hidden">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ImageIcon className="h-8 w-8 text-gray-400" />
                )}
              </div>
              <CardTitle className="text-lg">{project.title}</CardTitle>
              <CardDescription>{project.client}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {Array.isArray(project.technologies)
                  ? project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))
                  : []}
              </div>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Edit Dialog */}
      {editingProject && (
        <Dialog
          open={!!editingProject}
          onOpenChange={() => setEditingProject(null)}
        >
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>Edit Project</DialogTitle>
              <DialogDescription>
                Update the project information.
              </DialogDescription>
            </DialogHeader>
            <PortfolioForm
              initialData={editingProject}
              onSubmit={(data) => handleUpdateProject(editingProject.id, data)}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

interface PortfolioFormProps {
  initialData?: PortfolioProject;
  onSubmit: (data: Partial<PortfolioProject>) => void;
}

function PortfolioForm({ initialData, onSubmit }: PortfolioFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    client: initialData?.client || "",
    category: initialData?.category || "",
    description: initialData?.description || "",
    technologies: Array.isArray(initialData?.technologies)
      ? initialData.technologies.join(", ")
      : "",
    imageUrl: initialData?.imageUrl || "",
    year: initialData?.year || new Date().getFullYear().toString(),
    isFeatured: initialData?.isFeatured ?? false,
  });
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const projectData = {
      ...formData,
      technologies: formData.technologies
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
    };

    onSubmit(projectData);
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
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Project Title</Label>
          <Input
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="client">Client</Label>
          <Input
            id="client"
            value={formData.client}
            onChange={(e) =>
              setFormData({ ...formData, client: e.target.value })
            }
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select
            value={formData.category}
            onValueChange={(value) =>
              setFormData({ ...formData, category: value })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Software Development">
                Software Development
              </SelectItem>
              <SelectItem value="Web Development">Web Development</SelectItem>
              <SelectItem value="Mobile Development">
                Mobile Development
              </SelectItem>
              <SelectItem value="Government">Government</SelectItem>
              <SelectItem value="E-commerce">E-commerce</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="year">Year</Label>
          <Input
            id="year"
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: e.target.value })}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          rows={3}
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="technologies">Technologies (comma-separated)</Label>
          <Input
            id="technologies"
            value={formData.technologies}
            onChange={(e) =>
              setFormData({ ...formData, technologies: e.target.value })
            }
            placeholder="React, Node.js, PostgreSQL"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="imageUrl">Project Image</Label>
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
                  alt="Preview"
                  className="w-full h-32 object-cover rounded-md"
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
                  onClick={() =>
                    document.getElementById("image-upload")?.click()
                  }
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
      </div>

      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="isFeatured"
          checked={formData.isFeatured}
          onChange={(e) =>
            setFormData({ ...formData, isFeatured: e.target.checked })
          }
          className="rounded"
        />
        <Label htmlFor="isFeatured">Featured Project</Label>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={() => onSubmit({})}>
          Cancel
        </Button>
        <Button type="submit">
          <Save className="h-4 w-4 mr-2" />
          Save Project
        </Button>
      </div>
    </form>
  );
}
