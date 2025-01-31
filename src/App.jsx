import { AuthProvider, useAuth } from './context/AuthContext';
import { VideoProvider } from './context/VideoContext';
import Login from './components/Login';
import AdminPanel from './components/AdminPanel';
import StudentPanel from './components/StudentPanel';
import Footer from './components/Footer';
import HomeSlider from './components/HomeSlider';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';

function AppContent() {
  const { currentUser, logout } = useAuth();

  return (
    <div className="min-h-screen bg-base-200 flex flex-col">
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-lg">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">Akademi</a>
        </div>
        <div className="flex-none">
          {currentUser ? (
            <>
              <span className="mr-4">
                {currentUser.role === 'admin' ? 'Admin' : currentUser.name}
              </span>
              <button onClick={logout} className="btn btn-ghost">
                Çıkış Yap
              </button>
            </>
          ) : (
            <div className="flex gap-4">
              <a href="/" className="btn btn-ghost">Anasayfa</a>
              <a href="/#about" className="btn btn-ghost">Hakkımızda</a>
              <a href="/#contact" className="btn btn-ghost">İletişim</a>
            </div>
          )}
        </div>
      </div>

      {/* İçerik */}
      <div className="flex-grow">
        {!window.location.pathname.includes('login') && !currentUser && (
          <>
            <HomeSlider />
            <AboutSection />
            <CoursesSection />
          </>
        )}
        
        {window.location.pathname.includes('login') && !currentUser && (
          <Login />
        )}

        {currentUser && currentUser.role === 'admin' && (
          <AdminPanel />
        )}

        {currentUser && currentUser.role === 'student' && (
          <StudentPanel currentStudent={currentUser} />
        )}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <VideoProvider>
        <AppContent />
      </VideoProvider>
    </AuthProvider>
  );
}

export default App; 