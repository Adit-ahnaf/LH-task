"use client";

import Conferences from "./components/Conferences";
import HomeHero from "./components/HomeHero";
import Sponsor from "./components/Sponsor";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <Conferences />
      <Sponsor />
    </main>
  );
}
