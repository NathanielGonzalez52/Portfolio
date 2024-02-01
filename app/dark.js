"use client";
import React, { useEffect, useState, createContext} from "react";
import "./dark.css";

// import Image from "next/image";
// import Sun from "../public/images/Sun.svg";
// import Moon from "../public/images/Moon.svg";
// import { ReactComponent as Sun } from "../public/images/Sun.svg";
// import { ReactComponent as Moon } from "../public/images/Moon.svg";

const ThemeContext = createContext();

const dark = (props) => {

    const [selectedTheme, setSelectedTheme] = useState("");

    // let selectedTheme = "";

    // const themeContext = createContext("light");

    const setDark = () => {
        document.querySelector("body").setAttribute("data-theme", "dark")
        localStorage.setItem("selectedTheme", "dark")
    };

    const setLightMode = () => {
        document.querySelector("body").setAttribute("data-theme", "light")
        localStorage.setItem("selectedTheme", "light")
    };

      useEffect (() => {

        const checkTheme = localStorage.getItem("selectedTheme");

        setSelectedTheme(checkTheme);
    
        if (checkTheme === "dark") {
            setDark();
        }

    }, [] );



    const toggleTheme = (e) => {
        if (e.target.checked) {
            setSelectedTheme("dark");
            setDark();

        }
        else {
            setSelectedTheme("light");
            setLightMode();
        }
    };


    return (
        <div>
            <ThemeContext.Provider value={{selectedTheme, toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
        </div>
        // <div class="theme-switch-wrapper">
        //     <i class="fa-regular fa-lightbulb"></i>
        //     <i class="fa-solid fa-lightbulb"></i>
        //     <label class="theme-switch" for="checkbox">
        //         <input type="checkbox" 
        //         id="checkbox" 
        //         onChange={toggleTheme} 
        //         checked={ selectedTheme==="dark" }
        //         />
        //         <div class="slider round">
        //             <i class="fa-regular fa-sun"></i>
        //             <i class="fa-solid fa-moon"></i>
        //         </div>
        //     </label>
        // </div>
    )


    // return (
    //     <div className='dark_mode'>
    //         <input
    //             className='dark_mode_input'
    //             type='checkbox'
    //             id='darkmode-toggle'
    //             onChange={toggleTheme}
    //         />
    //         <label className='dark_mode_label' for='darkmode-toggle'>
    //             <Image
    //             priority 
    //             className="sun dark_mode_label pic"
    //             src={Sun}
    //             alt="Sun"
    //             />
    //             <Image
    //             priority 
    //             className="moon dark_mode_label pic"
    //             src={Moon}
    //             alt="Moon"
    //             />

    //         </label>
    //     </div>
    // );
};

// export default dark;

export {dark, ThemeContext};




// import { useState } from 'react';





// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import { DarkModeSwitch } from 'react-toggle-dark-mode';

// const App = () => {
//   const [isDarkMode, setDarkMode] = React.useState(false);

//   const toggleDarkMode = (checked: false) => {
//     setDarkMode(checked);
//   };

//   return (
//     <DarkModeSwitch
//       style={{ marginBottom: '2rem' }}
//       checked={isDarkMode}
//       onChange={toggleDarkMode}
//       size={120}
//     />
//   );
// };

