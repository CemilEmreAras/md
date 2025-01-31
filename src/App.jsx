import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import AdminPanel from './components/AdminPanel';
import LoginModal from './components/LoginModal';
import StudentProfile from './components/StudentProfile';
import VideoPlayer from './components/VideoPlayer';
import HomeSlider from './components/HomeSlider';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import StudentPanel from './components/StudentPanel';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isStudent, setIsStudent] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginType, setLoginType] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleLogout = () => {
    setIsAdmin(false);
    setIsStudent(false);
    setStudentData(null);
  };

  const handleLoginClick = (type) => {
    setLoginType(type);
    setShowLoginModal(true);
  };

  const handleLogin = (formData) => {
    // Burada gerçek API çağrısı yapılacak
    console.log('Login attempt:', formData);
    
    if (loginType === 'admin') {
      setIsAdmin(true);
    } else {
      setIsStudent(true);
      setStudentData({
        id: '1',
        name: 'Test Öğrenci',
        email: formData.email
      });
    }
    
    setShowLoginModal(false);
  };

  // Profil güncelleme fonksiyonu
  const handleProfileUpdate = (updatedData) => {
    setStudentData({
      ...studentData,
      ...updatedData
    });
  };

  const handleVideoComplete = (videoId) => {
    // Video tamamlandığında yapılacak işlemler
    console.log('Video tamamlandı:', videoId);
  };

  const handleVideoProgress = (videoId, progress) => {
    // Video ilerleme durumu güncellendiğinde yapılacak işlemler
    console.log('Video ilerleme:', videoId, progress);
  };

  return (
    <div className="min-h-screen bg-base-200">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg">
        {/* Sol Menü */}
        <div className="navbar-start">
          {/* Mobil Menü */}
          <div className="dropdown md:hidden">
            <label tabIndex={0} className="btn btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a className="font-medium">Anasayfa</a></li>
              <li><a className="font-medium">Hakkımızda</a></li>
              <li><a className="font-medium">Eğitimlerimiz</a></li>
              <li><a className="font-medium">İletişim</a></li>
            </ul>
          </div>
          {/* Desktop Sol Menü */}
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1">
              <li><a className="font-medium">Anasayfa</a></li>
              <li><a className="font-medium">Hakkımızda</a></li>
              <li><a className="font-medium">Eğitimlerimiz</a></li>
              <li><a className="font-medium">İletişim</a></li>
            </ul>
          </div>
        </div>

        {/* Orta Logo */}
        <div className="navbar-center">
          <a className="btn btn-ghost">
            <img 
              src="https://placehold.co/200x80?text=EduPlatform" 
              alt="EduPlatform Logo" 
              className="h-8 md:h-10"
            />
          </a>
        </div>

        {/* Sağ Menü - Sadece Giriş/Profil */}
        <div className="navbar-end">
          {!isAdmin && !isStudent ? (
            <div className="flex gap-2">
              <button 
                className="btn btn-primary"
                onClick={() => handleLoginClick('admin')}
              >
                Admin Girişi
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => handleLoginClick('student')}
              >
                Öğrenci Girişi
              </button>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${isAdmin ? 'Admin' : 'Student'}`} 
                    alt={isAdmin ? 'admin' : 'student'} 
                  />
                </div>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="font-bold">
                    {isAdmin ? 'Admin' : studentData?.name || 'Öğrenci'}
                  </a>
                </li>
                <li><a>Profil</a></li>
                <li><a>Ayarlar</a></li>
                <div className="divider my-0"></div>
                <li>
                  <a 
                    onClick={handleLogout}
                    className="text-error"
                  >
                    Çıkış Yap
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
        type={loginType}
      />

      {/* Ana Sayfa İçeriği */}
      {!isAdmin && !isStudent && (
        <>
          <HomeSlider />
          <AboutSection />
          <CoursesSection />
        </>
      )}

      {/* Admin Panel */}
      {isAdmin && <AdminPanel />}

      {/* Öğrenci Panel */}
      {isStudent && <StudentPanel />}
    </div>
  );
}

export default App; 