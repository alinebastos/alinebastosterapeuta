import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'
import Home from './pages/home';
import ApometriaCosmica from './pages/apometria-cosmica';
import CuraArcturiana from './pages/cura-arcturiana';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/apometria-cosmica' element={<ApometriaCosmica />} />
          <Route path='/cura-arcturiana' element={<CuraArcturiana />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
