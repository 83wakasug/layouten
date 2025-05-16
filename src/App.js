
import './App.css';
import Header from "./Component/Header";
import { Navbar} from './Component/Navbar';
import { Home, About, Contact, Uppgift2, Uppgift3 } from './Pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <div className="App flex flex-col ">
    
      <>
        <Navbar />
        <Header />

              <div className="main-layout flex flex-col min-h-screen">
              <div className="flex flex-grow">
              
                <main className="content flex-1">
                
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/uppgift2" element={<Uppgift2 />} />
                    <Route path="/uppgift3" element={<Uppgift3 />} />
                  </Routes>
                </main>
              </div>
          </div>
      </>  
    </div>
  );
}

export default App;
