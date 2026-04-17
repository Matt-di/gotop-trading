/**
 * API client for fetching data from the backend
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

class ApiClient {
  private async fetchFromAPI<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${API_BASE_URL}${endpoint}`);

    if (!response.ok) {
      throw new Error(`API error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  }

  // Public API methods
  async getServices() {
    return this.fetchFromAPI("/api/public/services");
  }

  async getPortfolioProjects() {
    return this.fetchFromAPI("/api/public/portfolio");
  }

  async getBlogPosts() {
    return this.fetchFromAPI("/api/public/blog-posts");
  }

  async getClients() {
    return this.fetchFromAPI("/api/clients");
  }

  async getTestimonials() {
    return this.fetchFromAPI("/api/public/testimonials");
  }

  async submitContactForm(formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to send message");
    }

    return response.json();
  }

  async subscribeNewsletter(email: string) {
    const response = await fetch(`${API_BASE_URL}/api/public/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to subscribe");
    }

    return response.json();
  }
}

export const apiClient = new ApiClient();
