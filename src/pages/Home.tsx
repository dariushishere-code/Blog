import Sidebar from "@/components/sidebar";
import Works from "@/components/works";
import Services from "@/components/services";
import Stack from "@/components/stack";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Capabilities from "@/components/capabilities";
import Faq from "@/components/faq";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="lg:flex">
      <Sidebar />
      <main className="min-w-0 flex-1 px-5 py-10 sm:px-8 lg:px-14 lg:py-16 xl:px-20">
        <Works />
        <Services />
        <Stack />
        <Experience />
        <Education />
        <Capabilities />
        <Faq />
        <Contact />
      </main>
    </div>
  );
}