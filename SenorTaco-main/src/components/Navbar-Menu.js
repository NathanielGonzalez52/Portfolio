import React, { useState } from 'react';
import './Navbar.css';
import {Link} from "react-router-dom";
import {Link as ScrollLink} from 'react-scroll'
// var Scroll = require("react-scroll");
// var Element = Scroll.Element
// var scroller = Scroll.scroller;
// // import Scroll from 'react-scroll';
// // const ScrollLink = Scroll.ScrollLink;

function NavbarMenu() {


  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='navbar sticky-top'>
        <div className='navbar-container'>
        <Link to='/'><img className="logo" src="../../images/senor_taco.png"
        alt="logo" onClick={closeMobileMenu}></img></Link>
          {/* <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TRVL
            <i class='fab fa-typo3' />
          </Link> */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/menuhome'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Menu
              </Link>
            </li>
            <li className='nav-item'>
            

              {/* <ScrollLink
                activeClass="active"
                to="hook"
                spy={true}
                smooth={true}
                duration={30}
                className='nav-links'
                onClick={closeMobileMenu}
                offset={-120}
              >
                About Us
              </ScrollLink> */}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavbarMenu;









// import React, { useState } from 'react';
// import './Navbar-Menu.css';
// import {Link} from "react-router-dom";
// import {Link as ScrollLink} from 'react-scroll'

// function NavbarMenu() {


//   const [click, setClick] = useState(false);

//   const handleClick = () => setClick(!click);
//   function closeMobileMenu() {
//     setClick(false);
//     return(window.location.reload(true));
// };

//   return (
//     <>
//       <nav className='navbar sticky-top'>
//         <div className='navbar-container'>
//         <Link to='/'><img className="logo" src="../../images/senor_taco.png"
//         alt="logo"></img></Link>
     
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Menu
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default NavbarMenu;




