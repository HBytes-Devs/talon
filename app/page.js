"use client";

import SiteShell from "../components/SiteShell";
import Hero from "../components/Hero";
import Workflow from "../components/Workflow";
import ProductSurfaces from "../components/ProductSurfaces";
import Packet from "../components/Packet";
import Audit from "../components/Audit";
import LocalFirst from "../components/LocalFirst";
import Compare from "../components/Compare";
import Pricing from "../components/Pricing";
import FAQ from "../components/FAQ";
import Beta from "../components/Beta";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <Hero onOpenCommand={() => window.dispatchEvent(new Event("linea:open-command"))} />
        <Workflow />
        <ProductSurfaces />
        <Packet />
        <Audit />
        <LocalFirst />
        <Compare />
        <Pricing />
        <FAQ />
        <Beta />
      </main>
    </SiteShell>
  );
}
