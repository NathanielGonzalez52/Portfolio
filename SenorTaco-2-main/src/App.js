import logo from './logo.svg';
import './App.css';
import Landing from "./Landing";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade"
import Menu from "./Menu";
import Deliver from "./Deliver";
import EmblaCarousel from "./EmblaCarousel";
import Spread from "./Spread";
import Map from "./Map";
import Footer from "./Footer";

import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Landing />
      <Deliver />
      <Menu />
      <EmblaCarousel />
      <Spread />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
