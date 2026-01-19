import { Shield, Zap, Users, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Trusted & Secure",
    description: "Enterprise-grade security with proven reliability across hundreds of successful projects.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Agile methodologies ensure rapid development without compromising quality.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Seasoned professionals with deep expertise across multiple technology domains.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Rigorous quality assurance and testing for flawless deliverables every time.",
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/20 to-transparent pointer-events-none" />
      
      <div className="container-custom mx-auto px-4 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Why Archers Technologies?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We combine technical excellence with creative innovation to deliver solutions that exceed expectations. Our commitment to quality and client success sets us apart.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-secondary to-card border border-border overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full border border-border/50" />
                <div className="absolute w-1/2 h-1/2 rounded-full border border-border/30" />
                <div className="absolute w-1/4 h-1/4 rounded-full bg-foreground/5" />
              </div>
              
              {/* Stats overlay */}
              <div className="absolute bottom-8 left-8 right-8 p-6 rounded-2xl bg-background/80 backdrop-blur-xl border border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-foreground">99%</div>
                    <div className="text-xs text-muted-foreground">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">24/7</div>
                    <div className="text-xs text-muted-foreground">Support</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">100+</div>
                    <div className="text-xs text-muted-foreground">Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
