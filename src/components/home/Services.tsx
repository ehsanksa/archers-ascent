import { Link } from "react-router-dom";
import { 
  Globe, 
  Megaphone, 
  Bot, 
  Cloud, 
  Palette, 
  TrendingUp,
  ArrowRight 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Custom web applications and mobile apps built with cutting-edge technologies for optimal performance.",
    link: "/services/web-development",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic digital campaigns that drive engagement, conversions, and measurable business growth.",
    link: "/services/digital-marketing",
  },
  {
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent automation solutions powered by AI to streamline operations and boost productivity.",
    link: "/services/ai-automation",
  },
  {
    icon: Cloud,
    title: "Cloud & IT Services",
    description: "Scalable cloud infrastructure and IT management solutions for modern enterprises.",
    link: "/services/cloud-services",
  },
  {
    icon: Palette,
    title: "Creative & Branding",
    description: "Distinctive brand identities and creative designs that capture attention and inspire action.",
    link: "/services/branding",
  },
  {
    icon: TrendingUp,
    title: "Business Consulting",
    description: "Strategic consulting services to optimize processes and accelerate digital transformation.",
    link: "/services/consulting",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-custom mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
            What We Do
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to transform your business and drive sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-foreground/20 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-foreground/80 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <div className="flex items-center text-sm font-medium text-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-foreground font-medium hover:underline underline-offset-4"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
