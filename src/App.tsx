import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { Home } from './pages/Home';
import { Games } from './pages/Games';
import { About } from './pages/About';
import {Header} from './components/Header';
import { Footer } from './components/Footer';
function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/games' element={<Games/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
