import React from 'react'
import "./footer.css";

export default function footer() {

  const date = new Date();

  return (
    <>
      <div className = "footer">
        <i class="fa-solid fa-laptop-code"></i>
        <div className = "logo-f">
            <img className="logo-footer" src="../images/NG-3.png"></img>
        </div>
        <p className="copyright">© {date.getFullYear()} NathanielGonzalez</p>
        <div className = "github">
            <i class="fa-brands fa-github"></i>
        </div>
        <div className = "closing-links">
          <a href="/about" className = "about-f f-link">About Me |</a>
          <a href="/sale" className = "shop-f f-link">Shop</a>
          <a href="/qa" className = "faq-f f-link">| FAQ</a>
        </div>
      </div>

    </>
  )
}


{/* <i class="fa-brands fa-github"></i> */}
{/* <i class="fa-solid fa-laptop-code"></i> */}