import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";

import OpenAccount from "../OpenAccount";
import Footer from "../Footer";
import Navbar from "../Navbar";

import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { useEffect } from "react";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.toastMessage) {
      toast.success(location.state.toastMessage);
      // Optionally, clear the state here or do nothing if unmounting resets it
    }
  }, [location.state]);

  
  return (
    <>
      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />
    </>
  );
}
