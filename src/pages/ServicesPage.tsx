import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Megaphone, 
  Bot, 
  Cloud, 
  Palette, 
  TrendingUp,
  ArrowRight,
  Check
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "web-development",
    icon: Globe,
    title: "Web & App Development",
    description: "Custom web applications and mobile apps built with cutting-edge technologies for optimal performance and user experience.",
    features: [
      "Custom Web Applications",
      "Progressive Web Apps (PWA)",
      "E-commerce Solutions",
      "Mobile App Development",
      "API Development & Integration",
      "Performance Optimization",
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "Flutter", "PostgreSQL"],
  },
  {
    id: "digital-marketing",
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Strategic digital campaigns that drive engagement, conversions, and measurable business growth across all channels.",
    features: [
      "Search Engine Optimization (SEO)",
      "Pay-Per-Click Advertising",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "Analytics & Reporting",
    ],
    technologies: ["Google Ads", "Meta Ads", "HubSpot", "Mailchimp", "SEMrush", "Analytics"],
  },
  {
    id: "ai-automation",
    icon: Bot,
    title: "AI & Automation",
    description: "Intelligent automation solutions powered by AI to streamline operations, reduce costs, and boost productivity.",
    features: [
      "Custom AI Solutions",
      "Machine Learning Models",
      "Chatbots & Virtual Assistants",
      "Process Automation",
      "Predictive Analytics",
      "Natural Language Processing",
    ],
    technologies: ["Python", "TensorFlow", "OpenAI", "LangChain", "Azure AI", "AWS SageMaker"],
  },
  {
    id: "cloud-services",
    icon: Cloud,
    title: "Cloud & IT Services",
    description: "Scalable cloud infrastructure and IT management solutions for modern enterprises seeking reliability and efficiency.",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "DevOps & CI/CD",
      "Security & Compliance",
      "24/7 Monitoring",
      "Disaster Recovery",
    ],
    technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
  },
  {
    id: "branding",
    icon: Palette,
    title: "Creative & Branding",
    description: "Distinctive brand identities and creative designs that capture attention, inspire action, and build lasting connections.",
    features: [
      "Brand Strategy",
      "Logo & Visual Identity",
      "UI/UX Design",
      "Motion Graphics",
      "Print & Packaging",
      "Brand Guidelines",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "After Effects", "Blender", "Framer", "Webflow"],
  },
  {
    id: "consulting",
    icon: TrendingUp,
    title: "Business Consulting",
    description: "Strategic consulting services to optimize processes, drive innovation, and accelerate digital transformation.",
    features: [
      "Digital Transformation",
      "Technology Strategy",
      "Process Optimization",
      "Change Management",
      "IT Governance",
      "Vendor Selection",
    ],
    technologies: ["Jira", "Confluence", "Monday", "Notion", "Miro", "Power BI"],
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card to-background">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Comprehensive Digital Solutions
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From concept to execution, we deliver end-to-end solutions that transform businesses and drive measurable results.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-foreground" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-foreground flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="rounded-full px-6 bg-foreground text-background hover:bg-foreground/90 group"
                  >
                    <Link to="/contact">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="aspect-square rounded-3xl bg-card border border-border p-8 relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/50 to-transparent" />
                    
                    {/* Technologies grid */}
                    <div className="relative h-full flex flex-col justify-center">
                      <span className="text-sm text-muted-foreground uppercase tracking-widest mb-6">
                        Technologies
                      </span>
                      <div className="flex flex-wrap gap-3">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 rounded-full bg-background border border-border text-sm text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our comprehensive digital solutions.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 group"
          >
            <Link to="/contact">
              Contact Us Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
