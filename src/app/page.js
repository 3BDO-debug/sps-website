"use client";
// sectoins
import HeroBanner from "@/sections/homePage/HeroBanner";
import ServicesAndFields from "@/sections/homePage/ServicesAndFields";
import Experience from "@/sections/homePage/Experience";
import OurProjects from "@/sections/homePage/OurProjects";
import OurClients from "@/sections/homePage/OurClients";

// ---------------------------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <HeroBanner />
      <ServicesAndFields />
      <Experience />
      <OurProjects />
      <OurClients />
    </>
  );
}
