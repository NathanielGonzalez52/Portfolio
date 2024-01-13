import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import MenuHome from "./pages/MenuHome";
import Home from './pages/Home';
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/menuhome' element={<MenuHome/>}/>
      </Routes>
      <Footer />
      
    </div>
  );
}

export default App;
