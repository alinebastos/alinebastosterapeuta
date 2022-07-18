import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'
import Home from './pages/home';
import AuraMaster from './pages/aura-master'
import ApometriaCosmica from './pages/apometria-cosmica';
import CuraArcturiana from './pages/cura-arcturiana';
import CursoCuraArcturiana from './pages/faq-cura-arcturiana';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/aura-master' element={<AuraMaster />} />
          <Route path='/apometria-cosmica' element={<ApometriaCosmica />} />
          <Route path='/cura-arcturiana' element={<CuraArcturiana />} />
          <Route path='/faq-cura-arcturiana' element={<CursoCuraArcturiana />} options={{Header: () => null}} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
