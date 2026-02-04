import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import ContactForm from "@/components/ContactForm";
import AiAssistant from "@/components/AiAssistant";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col bg-slate-950">
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-16">
        <Hero />
        <Services />
        <section className="grid gap-10 md:grid-cols-[2fr,1.5fr] items-start">
          <ContactForm />
          <AiAssistant />
        </section>
      </div>
      <Footer />
    </main>
  );
}
