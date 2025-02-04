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
import FAQ from './components/FAQ';

// Theme Toggle Button Component
function ThemeToggle({ isScrolled }) {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button 
      onClick={toggleTheme}
      className={`btn btn-ghost btn-circle ${!isScrolled && theme === 'light' && 'text-white hover:bg-white/10'}`}
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )}
    </button>
  );
}

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
          <div className="flex items-center gap-4">
            <a href="/" className={`btn btn-ghost ${!isScrolled && 'text-white hover:bg-white/10'}`}>
              Anasayfa
            </a>
            <a href="/#about" className={`btn btn-ghost ${!isScrolled && 'text-white hover:bg-white/10'}`}>
              Hakkımızda
            </a>
            <a href="/#contact" className={`btn btn-ghost ${!isScrolled && 'text-white hover:bg-white/10'}`}>
              İletişim
            </a>
            <ThemeToggle isScrolled={isScrolled} />
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
      <FAQ />
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