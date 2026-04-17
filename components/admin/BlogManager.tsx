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
import { Plus, Edit, Trash2, Save, X, Image as ImageIcon } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  authorId: string;
  category: string;
  tags: string | string[];
  readTime: string;
  isFeatured: boolean;
  publishedAt: string;
  featuredImage?: string;
  createdAt: string;
  updatedAt: string;
  author?: {
    name: string;
  };
}

export function BlogManager() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch("/api/admin/blog");
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreatePost = async (postData: Partial<BlogPost>) => {
    try {
      const response = await fetch("/api/admin/blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        fetchPosts();
        setIsDialogOpen(false);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  const handleUpdatePost = async (id: string, postData: Partial<BlogPost>) => {
    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        fetchPosts();
        setEditingPost(null);
      }
    } catch (error) {
      console.error("Error updating post:", error);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm("Are you sure you want to delete this post?")) return;

    try {
      const response = await fetch(`/api/admin/blog/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        fetchPosts();
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  if (loading) {
    return <div className="text-center py-8">Loading posts...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Blog Posts</h2>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Post
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Post</DialogTitle>
              <DialogDescription>
                Add a new blog post to your website
              </DialogDescription>
            </DialogHeader>
            <BlogForm
              onSubmit={handleCreatePost}
              onCancel={() => setIsDialogOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg">{post.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {post.excerpt}
                  </CardDescription>
                </div>
                <div className="flex gap-2 ml-4">
                  {post.isFeatured && <Badge variant="default">Featured</Badge>}
                  {post.publishedAt ? (
                    <Badge variant="secondary">Published</Badge>
                  ) : (
                    <Badge variant="outline">Draft</Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <span>{post.category}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author?.name || "Unknown"}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setEditingPost(post)}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleDeletePost(post.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {editingPost && (
        <Dialog open={!!editingPost} onOpenChange={() => setEditingPost(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Edit Post</DialogTitle>
              <DialogDescription>
                Update blog post information
              </DialogDescription>
            </DialogHeader>
            <BlogForm
              post={editingPost}
              onSubmit={(data) => handleUpdatePost(editingPost.id, data)}
              onCancel={() => setEditingPost(null)}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

interface BlogFormProps {
  post?: BlogPost;
  onSubmit: (data: Partial<BlogPost>) => void;
  onCancel: () => void;
}

function BlogForm({ post, onSubmit, onCancel }: BlogFormProps) {
  const [formData, setFormData] = useState({
    title: post?.title || "",
    slug: post?.slug || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    category: post?.category || "",
    tags: post?.tags
      ? Array.isArray(post.tags)
        ? post.tags.join(", ")
        : post.tags
      : "",
    readTime: post?.readTime || "5 min",
    featured: post?.isFeatured || false,
    published: post?.publishedAt ? true : false,
    imageUrl: post?.featuredImage || "",
  });
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      title: formData.title,
      slug: formData.slug,
      excerpt: formData.excerpt,
      content: formData.content,
      category: formData.category,
      tags: formData.tags
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t),
      readTime: formData.readTime,
      isFeatured: formData.featured,
      publishedAt: formData.published ? new Date().toISOString() : undefined,
      featuredImage: formData.imageUrl || undefined,
    });
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
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="slug">Slug</Label>
        <Input
          id="slug"
          value={formData.slug}
          onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt</Label>
        <Textarea
          id="excerpt"
          value={formData.excerpt}
          onChange={(e) =>
            setFormData({ ...formData, excerpt: e.target.value })
          }
          required
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          required
          rows={10}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <Input
          id="category"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="tags">Tags (comma-separated)</Label>
        <Input
          id="tags"
          value={formData.tags}
          onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
          placeholder="tech, tutorial, news"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="readTime">Read Time</Label>
        <Input
          id="readTime"
          value={formData.readTime}
          onChange={(e) =>
            setFormData({ ...formData, readTime: e.target.value })
          }
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="imageUrl">Featured Image</Label>
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

      <div className="flex items-center space-x-4">
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

        <div className="flex items-center space-x-2">
          <Switch
            id="published"
            checked={formData.published}
            onCheckedChange={(checked) =>
              setFormData({ ...formData, published: checked })
            }
          />
          <Label htmlFor="published">Published</Label>
        </div>
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
