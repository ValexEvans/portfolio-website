import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import WebsiteNavbar from './components/WebsiteNavbar';
import WebsiteFooter from './components/WebsiteFooter';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import SoftwareExperiencePage from './pages/SoftwareExperiencePage';
import HardwareExperiencePage from './pages/HardwareExperiencePage';
import ContactPage from './pages/ContactPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App d-flex flex-column"  style={{ minHeight: '100vh' }}>
      <div className="flex-grow-1">
        <WebsiteNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/software-experience" element={<SoftwareExperiencePage />} />
          <Route path="/hardware-experience" element={<HardwareExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </div>
        <WebsiteFooter />
      </div>
    </BrowserRouter>
  );
}
export default App;
