import React from 'react'
import "./page.css";
import Navbar from "../navbar";
import Footer from "../footer";
import {dark as DarkVariable} from "./dark";



export default function Home() {
  return (
    <>
    <DarkVariable>
      <Navbar />
      <Footer />
    </DarkVariable>
    </>
  )
}
