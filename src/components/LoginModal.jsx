import { useState } from 'react';

function LoginModal({ isOpen, onClose, onLogin, type }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold text-lg mb-4">
          {type === 'admin' ? 'Admin Girişi' : 'Öğrenci Girişi'}
        </h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input 
              type="email" 
              placeholder="email@example.com" 
              className="input input-bordered" 
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Şifre</span>
            </label>
            <input 
              type="password" 
              placeholder="********" 
              className="input input-bordered"
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
          </div>

          <div className="modal-action">
            <button type="submit" className="btn btn-primary">
              Giriş Yap
            </button>
            <button 
              type="button" 
              className="btn" 
              onClick={onClose}
            >
              İptal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal; 