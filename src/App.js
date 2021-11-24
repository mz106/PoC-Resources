
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import General from './components/General';
import Fe from './components/Fe';
import Backend from './components/Backend';
import Interview from './components/Interview';

import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/general" element={<General />} />
        <Route path="/frontend" element={<Fe />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/interview" element={<Interview />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
