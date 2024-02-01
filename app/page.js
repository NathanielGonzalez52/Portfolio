import styles from './page.module.css'
import Navbar from "./navbar";
import Welcome from "./welcome";
import {dark as DarkVariable} from "./dark";
import Toggle from "./toggle";


export default function Home() {


  return (
  <>
  <DarkVariable>
    <Navbar/>
    <Welcome/>
  </DarkVariable>

  </>
  )
}
