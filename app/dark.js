import React from "react";
import Image from "next/image";
import Sun from "../public/images/Sun.svg";
import Moon from "../public/images/Moon.svg";

// import { ReactComponent as Sun } from "../public/images/Sun.svg";
// import { ReactComponent as Moon } from "../public/images/Moon.svg";
import "./dark.css";

const dark = () => {

        const setDark = () => {
            document.querySelector("body").setAttribute("data-theme", "dark")
        }

        const setLightMode = () => {
            document.querySelector("body").setAttribute("data-theme", "light")
        }

        // setDark();

        const toggleTheme = (e) => {
            if (e.target.checked) setDark();
            else setLightMode()
        };
    

    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
                onChange={toggleTheme}
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Image
                priority 
                className="sun dark_mode_label pic"
                src={Sun}
                alt="Sun"
                />
                <Image
                priority 
                className="moon dark_mode_label pic"
                src={Moon}
                alt="Moon"
                />
                {/* <Sun />
                <Moon /> */}
            </label>
        </div>
    );
};

export default dark;
