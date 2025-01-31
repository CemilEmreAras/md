import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { studentLogin, adminLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    console.log('Giriş denemesi:', email, password); // Debug için

    // Önce admin girişi dene
    if (adminLogin(email, password)) {
      console.log('Admin girişi başarılı'); // Debug için
      return;
    }

    // Admin değilse öğrenci girişi dene
    if (studentLogin(email, password)) {
      console.log('Öğrenci girişi başarılı'); // Debug için
      return;
    }

    console.log('Giriş başarısız'); // Debug için
    setError('Geçersiz e-posta veya şifre');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center mb-4">Giriş Yap</h2>
          
          {error && (
            <div className="alert alert-error mb-4">
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">E-posta</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Şifre</span>
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login; 