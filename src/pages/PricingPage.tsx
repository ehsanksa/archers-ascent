import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    price: "$999",
    period: "per project",
    description: "Perfect for small businesses and startups looking to establish their digital presence.",
    features: [
      { name: "Single page website", included: true },
      { name: "Mobile responsive design", included: true },
      { name: "Basic SEO setup", included: true },
      { name: "Contact form integration", included: true },
      { name: "3 revision rounds", included: true },
      { name: "1 month support", included: true },
      { name: "Custom animations", included: false },
      { name: "CMS integration", included: false },
      { name: "E-commerce features", included: false },
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$2,999",
    period: "per project",
    description: "Ideal for growing businesses that need comprehensive digital solutions.",
    features: [
      { name: "Multi-page website (up to 10)", included: true },
      { name: "Custom UI/UX design", included: true },
      { name: "Advanced SEO optimization", included: true },
      { name: "CMS integration", included: true },
      { name: "Custom animations", included: true },
      { name: "5 revision rounds", included: true },
      { name: "3 months support", included: true },
      { name: "Analytics dashboard", included: true },
      { name: "E-commerce (basic)", included: true },
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "For large-scale digital transformation and complex enterprise solutions.",
    features: [
      { name: "Unlimited pages", included: true },
      { name: "Full-stack development", included: true },
      { name: "Custom integrations", included: true },
      { name: "AI/ML capabilities", included: true },
      { name: "Dedicated project team", included: true },
      { name: "Unlimited revisions", included: true },
      { name: "12 months support", included: true },
      { name: "Priority response", included: true },
      { name: "Advanced security", included: true },
    ],
    popular: false,
  },
];

const faqs = [
  {
    question: "What's included in the support period?",
    answer: "Our support includes bug fixes, minor content updates, security patches, and technical assistance. Major feature additions or redesigns are quoted separately.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer: "Absolutely! You can upgrade your plan at any time. We'll credit the remaining value from your current plan toward the upgrade.",
  },
  {
    question: "Do you offer payment plans?",
    answer: "Yes, we offer flexible payment options including milestone-based payments for larger projects. Contact us to discuss the best arrangement for your needs.",
  },
  {
    question: "What if I need features from multiple plans?",
    answer: "We can create custom packages tailored to your specific needs. Reach out for a personalized quote that combines features from different tiers.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Timelines vary by complexity: Starter projects typically take 2-3 weeks, Professional 4-8 weeks, and Enterprise projects are scoped individually.",
  },
];

const PricingPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-card to-background">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <span className="text-sm text-muted-foreground uppercase tracking-widest mb-4 block">
            Pricing
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your needs. No hidden fees, no surprises. Just quality work delivered on time.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover-lift ${
                  plan.popular
                    ? "bg-foreground text-background border-2 border-foreground"
                    : "bg-card border border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-background text-foreground text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? "text-background" : "text-foreground"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <span className={`text-5xl font-serif font-bold ${plan.popular ? "text-background" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ml-2 ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex items-center gap-3">
                      <Check className={`h-5 w-5 flex-shrink-0 ${
                        feature.included 
                          ? plan.popular ? "text-background" : "text-foreground"
                          : "text-muted-foreground/30"
                      }`} />
                      <span className={`text-sm ${
                        feature.included
                          ? plan.popular ? "text-background/90" : "text-muted-foreground"
                          : "text-muted-foreground/50 line-through"
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className={`w-full rounded-full ${
                    plan.popular
                      ? "bg-background text-foreground hover:bg-background/90"
                      : "bg-foreground text-background hover:bg-foreground/90"
                  }`}
                >
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-card">
        <div className="container-custom mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <HelpCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground">
                Got questions? We've got answers.
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background border border-border rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-background">
        <div className="container-custom mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Need a Custom Quote?
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Every project is unique. Let's discuss your specific requirements and create a tailored solution.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 group"
          >
            <Link to="/contact">
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default PricingPage;
