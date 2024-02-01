import styles from './page.module.css'
import Navbar from "./navbar";
import Welcome from "./welcome";
import {dark as DarkVariable} from "./dark";


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
