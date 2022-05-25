import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'
import Home from './pages/home';
import AuraMaster from './pages/aura-master';
import TerapiaCosmica from './pages/terapia-cosmica';
import UnconsciousTherapy from './pages/unconscious-therapy';
import ApometriaCosmica from './pages/apometria-cosmica';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/apometria-cosmica' element={<ApometriaCosmica />} />
          <Route path='/aura-master' element={<AuraMaster />} />
          <Route path='/terapia-cosmica' element={<TerapiaCosmica />} />
          <Route path='/unconscious-therapy' element={<UnconsciousTherapy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
