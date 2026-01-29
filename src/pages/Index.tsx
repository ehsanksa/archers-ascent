import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Portfolio from "@/components/home/Portfolio";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Services />
      <WhyUs />
      <Portfolio />
      <CTA />
    </Layout>
  );
};

export default Index;
