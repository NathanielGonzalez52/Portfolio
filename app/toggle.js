"use client";

import {React, useContext} from 'react';
import "./toggle.css"
import { ThemeContext } from './dark';

export default function toggle() {

    const {selectedTheme, toggleTheme} = useContext(ThemeContext);

  return (

          <div class="theme-switch-wrapper">
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

  )
}
