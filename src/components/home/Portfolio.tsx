import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    title: "Finance Dashboard",
    category: "UI/UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
  },
  {
    title: "Healthcare App",
    category: "Mobile Development",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
  },
  {
    title: "AI Analytics Tool",
    category: "AI & Automation",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=800&h=600&fit=crop",
  },
];

const Portfolio = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              Our Work
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Featured Projects
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:underline underline-offset-4"
          >
            View All Projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.title}
              to="/portfolio"
              className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm text-muted-foreground mb-2">
                  {project.category}
                </span>
                <h3 className="text-2xl font-serif font-bold text-foreground flex items-center gap-2">
                  {project.title}
                  <ExternalLink className="h-5 w-5" />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
