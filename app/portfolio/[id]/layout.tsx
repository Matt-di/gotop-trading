import { portfolioProjects } from "@/lib/data";

// Generate static params for static export
export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    id: project.id.toString(),
  }));
}

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
