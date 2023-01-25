import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'
import AuraMaster from './pages/aura-master'
/* import FaqApometriaCosmica from './pages/faq-apometria-cosmica';
import ApometriaCosmica from './pages/apometria-cosmica';
import Home from './pages/home';
import CuraArcturiana from './pages/cura-arcturiana';
import CursoCuraArcturiana from './pages/curso-cura-arcturiana';
import FaqCuraArcturiana from './pages/faq-cura-arcturiana'; */

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<AuraMaster />} />
          {/* <Route path='/faq-apometria-cosmica' element={<FaqApometriaCosmica />} />
          <Route path='/apometria-cosmica' element={<ApometriaCosmica />} />
          <Route path='/aura-master' element={<AuraMaster />} />          
          <Route path='/cura-arcturiana' element={<CuraArcturiana />} />
          <Route path='/curso-cura-arcturiana' element={<CursoCuraArcturiana />} options={{Header: () => null}} />
          <Route path='/faq-cura-arcturiana' element={<FaqCuraArcturiana />} options={{Header: () => null}} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
