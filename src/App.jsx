import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Contact, Education, Experience, Hero, Navbar, Tech, Works } from './components';
import ScrollToTop from './hoc/ScrollToTop';
import { programmer } from './assets';

const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div className="relative bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
              </> } />
            <Route path="/about" element={<About />} />
            <Route path="/work" element={
              <>
                <Experience />
                <Tech />
              </>
              } />
            <Route path="/projects" element={<Works />} />
            <Route path="/education" element={
              <>
                <Education />
                {/* <h3>Courses and certifications</h3>
                <h3>Published papers</h3> */}
              </>
              } />
            <Route path="/contact" element={
              <div className='flex items-center justify-between'>
                <Contact />
                <img src={programmer}
                alt='programmer'
                className='w-1/3 h-auto mx-auto'></img>
              </div>
              } />
          </Routes>
        </div>
      </div>

    </BrowserRouter>
    
  )
}

export default App
