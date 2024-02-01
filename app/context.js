import React from 'react';
import { createContext } from "react";
// import { useContext } from "react";

export default function context() {
    const [theme, setTheme] = useState("light")

    const DarkModeContext = createContext(theme);


  return (
   
  )
}
