import Hero from "@/components/Hero";
import About from "@/components/About";
import Places from "@/components/Places";
import Vedios from "@/components/Vedios";
import Mission from "@/components/Mission";
import Services from "@/components/Services";
import ContactUs from "@/components/ContactUs";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Mission />
      <About />
      <Services />
      <Vedios/>
      <Places />
      <ContactUs />
    </main>
  );
}
