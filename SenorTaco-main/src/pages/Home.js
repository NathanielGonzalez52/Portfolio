import React from 'react'
import HeroSection from '../components/HeroSection';
import StoreInfo from '../components/StoreInfo';
import About from '../components/About';
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <StoreInfo />
    <About />
    </>
  )
}
