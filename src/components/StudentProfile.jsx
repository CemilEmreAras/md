import { useState } from 'react';

function StudentProfile({ student, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: student.name,
    email: student.email,
    phone: student.phone || '',
    class: student.class || '',
    bio: student.bio || ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="flex justify-between items-center mb-6">
            <h2 className="card-title text-2xl">Profil Bilgileri</h2>
            <button 
              className="btn btn-primary"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? 'İptal' : 'Düzenle'}
            </button>
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Ad Soyad</span>
                </label>
                <input 
                  type="text" 
                  className="input input-bordered" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                  type="email" 
                  className="input input-bordered" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Telefon</span>
                </label>
                <input 
                  type="tel" 
                  className="input input-bordered" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Sınıf</span>
                </label>
                <input 
                  type="text" 
                  className="input input-bordered" 
                  value={formData.class}
                  onChange={(e) => setFormData({...formData, class: e.target.value})}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Hakkımda</span>
                </label>
                <textarea 
                  className="textarea textarea-bordered" 
                  value={formData.bio}
                  onChange={(e) => setFormData({...formData, bio: e.target.value})}
                />
              </div>

              <div className="flex justify-end gap-2">
                <button type="submit" className="btn btn-primary">
                  Kaydet
                </button>
                <button 
                  type="button" 
                  className="btn" 
                  onClick={() => setIsEditing(false)}
                >
                  İptal
                </button>
              </div>
            </form>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={`https://ui-avatars.com/api/?name=${student.name}`} alt={student.name} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold">{student.name}</h3>
                  <p className="text-base-content/70">{student.email}</p>
                </div>
              </div>

              <div className="divider"></div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">İletişim Bilgileri</h4>
                  <p><span className="font-medium">Telefon:</span> {student.phone || '-'}</p>
                  <p><span className="font-medium">Email:</span> {student.email}</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Eğitim Bilgileri</h4>
                  <p><span className="font-medium">Sınıf:</span> {student.class || '-'}</p>
                </div>
              </div>

              {student.bio && (
                <>
                  <div className="divider"></div>
                  <div>
                    <h4 className="font-bold mb-2">Hakkımda</h4>
                    <p>{student.bio}</p>
                  </div>
                </>
              )}

              <div className="divider"></div>

              <div>
                <h4 className="font-bold mb-4">İlerleme Durumu</h4>
                <div className="stats shadow">
                  <div className="stat">
                    <div className="stat-title">Atanan Video</div>
                    <div className="stat-value">12</div>
                  </div>
                  
                  <div className="stat">
                    <div className="stat-title">Tamamlanan</div>
                    <div className="stat-value text-primary">8</div>
                  </div>
                  
                  <div className="stat">
                    <div className="stat-title">Başarı Oranı</div>
                    <div className="stat-value text-secondary">67%</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default StudentProfile; 