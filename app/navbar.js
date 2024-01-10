"use client"; //This is a client component
import { useRouter } from 'next/navigation'
import React, {useState} from 'react';
import Link from "next/link";
import "./navbar.css";
import { useActivePath } from "./helper";



export default function navbar() {

  const checkActivePath = useActivePath()

  const router = useRouter();

  console.log(router.pathname);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  return (
    <>
        <nav className="nav-head">
            <a className="linkk" href="/"><img className="logo" src="../images/NG-3.png"></img></a>
            <div>
            <ul id="navbar" className={click ? 'navbar active' : 'navbar'}>
                <li><Link href="/" className={checkActivePath("/") ? 'active' : ''}>
                Home
                </Link></li>
                <li><Link href="/sale" className={checkActivePath("/sale") ? 'active' : ''}>
                Shop
                </Link></li>
                <li><Link href="/about" className={checkActivePath("/about") ? 'active' : ''}>
                About
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
