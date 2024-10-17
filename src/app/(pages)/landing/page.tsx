"use client";

import Header from "@/app/components/home/Header";
import About from "@/app/components/home/About";
import Facts from "@/app/components/home/Facts";
import Features from "@/app/components/home/Features";
import Services from "@/app/components/home/Services";

const Landing = () => {
  return (
    <>
      <Header />
      <About />
      <Facts />
      <Features />
      <Services />
    </>
  );
};

export default Landing;