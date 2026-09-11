"use client";

import NacosNavbar from "./NacosNavbar";
import NacosHero from "./NacosHero";
import NacosAbout from "./NacosAbout";
import NacosPrograms from "./NacosPrograms";
import NacosWhyJoin from "./NacosWhyJoin";
import NacosExecutives from "./NacosExecutives";
import NacosHighlights from "./NacosHighlights";
import NacosJoinCTA from "./NacosJoinCTA";
import NacosFooter from "./NacosFooter";

export default function NacosPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <NacosNavbar />
      <NacosHero />
      <NacosAbout />
      <NacosPrograms />
      <NacosWhyJoin />
      <NacosExecutives />
      <NacosHighlights />
      <NacosJoinCTA />
      <NacosFooter />
    </main>
  );
}
