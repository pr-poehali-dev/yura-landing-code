import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Audience from "@/components/sections/Audience";
import Results from "@/components/sections/Results";
import Program from "@/components/sections/Program";
import Mentors from "@/components/sections/Mentors";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import CtaBanner from "@/components/sections/CtaBanner";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Audience />
        <Results />
        <Program />
        <Mentors />
        <Testimonials />
        <Pricing />
        <CtaBanner />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
