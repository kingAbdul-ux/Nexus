"use client";

import NacosNavbar from "./NacosNavbar";
import NacosHero from "./NacosHero";
import NacosAbout from "./NacosAbout";
import NacosDisciplines from "./NacosDisciplines";
import NacosEvents from "./NacosEvents";
import NacosWhyJoin from "./NacosWhyJoin";
import NacosExecutives from "./NacosExecutives";
import NacosCommunity from "./NacosCommunity";
import NacosJoinCTA from "./NacosJoinCTA";
import NacosFooter from "./NacosFooter";

export default function NacosPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <NacosNavbar />
      <NacosHero />
      <NacosAbout />
      <NacosDisciplines />
      <NacosEvents />
      <NacosWhyJoin />
      <NacosExecutives />
      <NacosCommunity />
      <NacosJoinCTA />
      <NacosFooter />
    </main>
  );
}
