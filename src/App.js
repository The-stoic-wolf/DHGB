import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ScrollToTop from './components/ScrollToTop.js'
import Navbar from "./components/Navbar.js";
import Home from "./components/pages/Home.js";
import Regular from "./components/pages/Regular.js";
import Vegan from "./components/pages/Vegan.js";
import Protein from "./components/pages/Protein.js";
import Teac from "./components/pages/Teac.js";
import {Route,Routes,Navigate } from 'react-router-dom';

import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
       <ScrollToTop/>
         <Navbar/>
         <Routes > 
           <Route path='/home' element={<Home/>}/>
           <Route path='/Regular' element={<Regular/>}/>
           <Route path='/Vegan' element={<Vegan/>}/>
           <Route path='/protein' element={<Protein/>}/>
           <Route path='/tea' element={<Teac/>}/>

         <Route path="/" element={<Navigate to="/home" replace/>}/>
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
