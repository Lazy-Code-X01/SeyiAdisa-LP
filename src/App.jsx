import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About'
import Expertises from './Pages/Expertises';
import Community from './Pages/Community'
import Insight from './Pages/Insight'
import Contact from './Pages/Contact';
function App() {
  return (
  <BrowserRouter>
            <Routes>
            <Route path='Home' element={<Home />} />
            <Route path='About' element={<About />} />    
            <Route path='Expertises' element={<Expertises />} />
            <Route path='Insight' element={<Insight />} />
            <Route path='Community' element={<Community />} />
            <Route path='Contact' element={<Contact />} />
        </Routes>

  </BrowserRouter>
  
);

        // <Navbar />
        // <Hero />
        // <Achievements />
        // <Footer />

}

export default App;