"use client";
import Quote from "../components/sections/Quote";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import About from "../components/sections/About";
import Hero from "../components/sections/Hero";
import KeyFeature from "../components/sections/KeyFeature";
import ProgramsSection from "../components/sections/ProgramsSection";
import Marquee from "@/components/sections/Marquee";
import LaunchingSection from "@/components/sections/LaunchingSection";
import ProfessionalsSection from "@/components/sections/ProfessionalsSection";
import Facilities from "@/components/sections/Facilities";
import CoachesEventsSection from "@/components/sections/CoachesEventsSection";

export default function Home() {
  const professionalsData = [
    {
      image: "/images/Person1.png",
      name: "Craig Tiley",
      role: "CEO Tennis Australia & Australian Open",
    },
    {
      image: "/images/Person2.png",
      name: "Stephen Farrow",
      role: "Director - Tournament, Players & International Relations",
    },
    {
      image: "/images/Person3.png",
      name: "Cameron Pearson",
      role: "Head Major Events - Tennis Australia",
    },
  ];
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Quote />
        <KeyFeature />
        <ProgramsSection />
        <Marquee />
        <LaunchingSection />
        <ProfessionalsSection professionals={professionalsData} />
        <Facilities />
        <CoachesEventsSection />
      </main>
      <Footer />
    </>
  );
}
