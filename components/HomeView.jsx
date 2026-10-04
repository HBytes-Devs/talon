"use client";

import Hero from "./Hero";
import Workflow from "./Workflow";
import ProductSurfaces from "./ProductSurfaces";
import Packet from "./Packet";
import Audit from "./Audit";
import LocalFirst from "./LocalFirst";
import Compare from "./Compare";
import Pricing from "./Pricing";
import FAQ from "./FAQ";
import Beta from "./Beta";
import SectionScroller from "./SectionScroller";

export default function HomeView() {
  return (
    <>
      <SectionScroller />
      <main>
        <Hero />
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
    </>
  );
}
