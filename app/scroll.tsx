"use client";
import React from "react";
import { StickyScroll } from "../components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "LOSS PREVENTION",
    description:
      "Keep energy & consumables consumption in-check. Get real-time alerts of breakdowns & operation gaps. Ensure vendor work gets done as per guidelines laid outd",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
       LOSS PREVENTION
      </div>
    ),
  },
  {
    title: "SUPERIOR TENANT & SHOPPER EXPERIENCE",
    description:
      "Recurring digital checklists. Automatic non-compliance alerts. In-app workflows, document sharing & workflows.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/scroll.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
        
      </div>
    ),
  },
  {
    title: "DIGITAL TRANSFORMATION",
    description:
      "Grant e-permit to work to vendors. Get proof-of-movement with live images. Have store & entrance specific QR codes placed.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
       DIGITAL TRANSFORMATION
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
