import Layout from "@/components/layout/Layout";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Web Development", "Mobile Apps", "AI & Automation", "Branding"];

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "A scalable e-commerce solution with real-time inventory management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Finance Dashboard",
    category: "Web Development",
    description: "Interactive analytics dashboard for financial institutions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Healthcare App",
    category: "Mobile Apps",
    description: "Patient management and telemedicine mobile application.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
  },
  {
    title: "AI Analytics Tool",
    category: "AI & Automation",
    description: "Predictive analytics platform powered by machine learning.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
  },
  {
    title: "Brand Identity - TechCorp",
    category: "Branding",
    description: "Complete brand identity redesign for a tech startup.",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
  },
  {
    title: "Fitness Tracker App",
    category: "Mobile Apps",
    description: "Cross-platform fitness and nutrition tracking application.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
  },
  {
    title: "Smart Home Dashboard",
    category: "AI & Automation",
    description: "IoT control center with AI-powered automation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
  },
  {
    title: "Brand Identity - GreenLife",
    category: "Branding",
    description: "Sustainable brand design for eco-friendly products.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
  },
];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card to-background">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
            Our Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Featured Work
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of successful projects that showcase our expertise and commitment to excellence.
          </p>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-foreground text-background"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.title}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2 flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="h-4 w-4" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PortfolioPage;
