import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import TextureArtSection from './components/TextureArt';
import CharcoalSketch from './components/CharcoalSketch';
import ResignArt from './components/ResignArt';
import AcrylicPouling from './components/AcrylicPoulingArt';
import FabricPaiting from './components/FabricPaiting';
import CanvasPaiting from './components/CanvasPaiting';
import Gallery from './components/Gallery';

function App() {
  return (
      <Router>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/textureArt" element={<TextureArtSection />} />
              <Route path="/charcoalSketch" element={<CharcoalSketch />} />
              <Route path="/resignArt" element={<ResignArt />} />
              <Route path="/acrylicPouring" element={<AcrylicPouling />} />
              <Route path="/fabricPainting" element={<FabricPaiting />} />
              <Route path="/canvasPainting" element={<CanvasPaiting />} />
              <Route path="/gallery" element={<Gallery />} />
          </Routes>
          <Footer />
      </Router>
  );
}

export default App;
