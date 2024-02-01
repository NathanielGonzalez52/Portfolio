"use client";
import { React, useState, useContext } from "react";
import ThemeContext from "./dark";


export default function toggle() {

    const {toggleTheme} = useContext(ThemeContext);
    
    return (
        <ThemeContext>
            <div class="theme-switch-wrapper">
                {/* <i class="fa-regular fa-lightbulb"></i> */}
                {/* <i class="fa-solid fa-lightbulb"></i> */}
                <label class="theme-switch" for="checkbox">
                    <input type="checkbox" 
                    id="checkbox" 
                    onChange={toggleTheme} 
                    checked={ selectedTheme==="dark" }
                    />
                    <div class="slider round">
                        <i class="fa-regular fa-sun"></i>
                        <i class="fa-solid fa-moon"></i>
                    </div>
                </label>
            </div>
        </ThemeContext>
    )
}

