import React from 'react'
import "./page.css";
import Navbar from "../navbar";
import Footer from "../footer";
import {dark as DarkVariable} from "./dark";



export default function projects() {
  return (
    <>
    <Navbar />
      <div className="projects-home">
          <h1 className="head">Projects</h1>
      </div>
    <Footer />
    </>
  )
}
