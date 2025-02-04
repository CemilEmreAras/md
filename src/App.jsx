import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeSlider from './components/HomeSlider';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import Footer from './components/Footer';
import CourseDetail from './components/courses/CourseDetail';
import AdminPanel from './components/admin/AdminPanel';
import { courses } from './data/courses';
import { SliderProvider } from './context/SliderContext';
import mdLogo from './assets/MDLOGO.svg';
import { useState, useEffect } from 'react';

// Public Navbar
function PublicNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${isScrolled 
        ? 'bg-base-100 shadow-lg' 
        : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost px-4">
            <img 
              src={mdLogo} 
              alt="MD Logo" 
              className={`h-12 w-auto transition-all duration-300 ${!isScrolled && 'brightness-0 invert'}`}
            />
          </a>
        </div>
        <div className="flex-none">
          <div className="flex gap-4">
            <a href="/" className={`btn btn-ghost ${!isScrolled && 'text-white hover:bg-white/10'}`}>
              Anasayfa
            </a>
            <a href="/#about" className={`btn btn-ghost ${!isScrolled && 'text-white hover:bg-white/10'}`}>
              Hakkımızda
            </a>
            <a href="/#contact" className={`btn btn-ghost ${!isScrolled && 'text-white hover:bg-white/10'}`}>
              İletişim
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Ana sayfa bileşeni
function HomePage() {
  return (
    <>
      <HomeSlider />
      <AboutSection />
      <CoursesSection />
    </>
  );
}

// Public Layout
function PublicLayout({ children }) {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      <PublicNavbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <SliderProvider>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminPanel />} />
          
          {/* Public Routes */}
          <Route path="/" element={
            <PublicLayout>
              <HomePage />
            </PublicLayout>
          } />
          
          <Route path="/courses/:courseId" element={
            <PublicLayout>
              <CourseDetail course={courses.computerOperator} />
            </PublicLayout>
          } />
        </Routes>
      </SliderProvider>
    </Router>
  );
}

export default App; 