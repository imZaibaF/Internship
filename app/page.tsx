
import Image from "next/image";
import { TypewriterEffectSmoothDemo } from "./test";
import { WobbleCardDemo } from "./card";
import { StickyScrollRevealDemo } from "./scroll";
import { NavbarDemo } from "./navbar";
import Hero from "./Hero";
export default function Home() {
  return (<>
  <NavbarDemo />
  
    <TypewriterEffectSmoothDemo />
    <Hero />
    <WobbleCardDemo />
    <StickyScrollRevealDemo />
    
   
    </>
  );
}
