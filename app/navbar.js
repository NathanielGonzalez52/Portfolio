"use client"; //This is a client component

import { useRouter } from 'next/navigation'
import React, {useEffect, useState, useContext} from 'react';
import Link from "next/link";
import "./navbar.css";
import { useActivePath } from "./helper";
import { ThemeContext } from './dark';


export default function navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const hide = () => setIsOpen(false);
  const show = () => setIsOpen(true);

  const {selectedTheme, toggleTheme} = useContext(ThemeContext);

  const checkActivePath = useActivePath()

  const router = useRouter();

  console.log(router.pathname);

  const [click, setClick] = useState(false);

  useEffect(() => {
    let handler = () => {
      setClick(false);
    };

    document.addEventListener("mousedown", handler);
  });

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // useEffect (() => {


  //   }
  // }, [] )


  //   if (selectedTheme === "dark") {
  //     setDark();
  // }

  const light = "../images/NG-3.png";

  const night = "../images/NG_night_2.png"

    
  // if (selectedTheme === "dark") {
  //     setDark();
  // }



  return (
    <>
      <nav className="nav-head">
          <a className="linkk" href="/"><img className="logo" src={selectedTheme === "dark" ? night : light}></img></a>
          <div>
          <ul id="navbar" className={click ? 'navbar active' : 'navbar'}>
              <li><Link href="/" className={checkActivePath("/") ? 'active' : ''}>
              Home
              </Link></li>
              <li><Link href="/about" className={checkActivePath("/about") ? 'active' : ''}>
              About
              </Link></li>
              <li><Link href="/projects" className={checkActivePath("/projects") ? 'active' : ''}>
              Projects
              </Link></li>
              <li><Link href="/contact" className={checkActivePath("/contact") ? 'active' : ''}>
              Contact Me
              </Link></li>
          </ul>
          </div>

          <div id="mobile" onClick={handleClick}>
              <i id="bar" className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
      </nav>
    </>
  )
}
