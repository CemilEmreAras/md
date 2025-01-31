import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useVideo } from '../context/VideoContext';
import * as XLSX from 'xlsx';

function AdminPanel() {
  const { addStudent, students } = useAuth();
  const { videos, addVideo } = useVideo();
  const [activeTab, setActiveTab] = useState('videos');
  const [editingVideo, setEditingVideo] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);

  const videoCategories = [
    { id: 'intro', name: 'Giriş Dersleri' },
    { id: 'basic', name: 'Temel Konular' },
    { id: 'advanced', name: 'İleri Seviye' },
    { id: 'practice', name: 'Uygulama' },
    { id: 'exam', name: 'Sınav Hazırlık' }
  ];

  // Video yükleme
  const handleVideoUpload = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newVideo = {
      id: Date.now(),
      title: formData.get('title'),
      description: formData.get('description'),
      course: formData.get('course'),
      url: formData.get('url'),
      uploadDate: new Date().toISOString()
    };
    addVideo(newVideo);
    e.target.reset();
  };

  // Öğrenci ekleme
  const handleAddStudent = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newStudent = {
      id: Date.now(),
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      course: formData.get('course')
    };
    addStudent(newStudent);
    e.target.reset();
  };

  // Video düzenleme
  const handleEditVideo = (video) => {
    setEditingVideo(video);
  };

  const handleUpdateVideo = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedVideo = {
      ...editingVideo,
      title: formData.get('title'),
      description: formData.get('description'),
      course: formData.get('course'),
      category: formData.get('category'),
      url: formData.get('url')
    };

    addVideo(updatedVideo);
    setEditingVideo(null);
  };

  // Öğrenci düzenleme
  const handleEditStudent = (student) => {
    setEditingStudent(student);
  };

  const handleUpdateStudent = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedStudent = {
      ...editingStudent,
      name: formData.get('name'),
      email: formData.get('email'),
      course: formData.get('course')
    };

    addStudent(updatedStudent);
    setEditingStudent(null);
  };

  // Toplu öğrenci import
  const handleImportStudents = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: 'binary' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const data = XLSX.utils.sheet_to_json(worksheet);

      const newStudents = data.map(row => ({
        id: Date.now() + Math.random(),
        name: row['Ad Soyad'],
        email: row['E-posta'],
        course: row['Kurs'],
        password: 'Temp123!' // Geçici şifre
      }));

      newStudents.forEach(student => addStudent(student));
    };

    reader.readAsBinaryString(file);
  };

  // Öğrenci export
  const handleExportStudents = () => {
    const ws = XLSX.utils.json_to_sheet(students.map(s => ({
      'Ad Soyad': s.name,
      'E-posta': s.email,
      'Kurs': s.course
    })));

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Öğrenciler");
    XLSX.writeFile(wb, "ogrenciler.xlsx");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="tabs tabs-boxed mb-6">
        <a 
          className={`tab ${activeTab === 'videos' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          Videolar
        </a>
        <a 
          className={`tab ${activeTab === 'students' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('students')}
        >
          Öğrenciler
        </a>
      </div>

      {activeTab === 'videos' && (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">
              {editingVideo ? 'Video Düzenle' : 'Video Yükle'}
            </h2>
            <form onSubmit={editingVideo ? handleUpdateVideo : handleVideoUpload} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Video Başlığı</span>
                </label>
                <input 
                  type="text" 
                  name="title"
                  className="input input-bordered" 
                  required 
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Açıklama</span>
                </label>
                <textarea 
                  name="description"
                  className="textarea textarea-bordered" 
                  required
                ></textarea>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Kurs</span>
                </label>
                <select name="course" className="select select-bordered" required>
                  <option value="bilgisayar">Bilgisayar İşletmeni</option>
                  <option value="yazilim">Yazılım Geliştirme</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Video URL</span>
                </label>
                <input 
                  type="url" 
                  name="url"
                  className="input input-bordered" 
                  required 
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Kategori</span>
                </label>
                <select 
                  name="category" 
                  className="select select-bordered" 
                  defaultValue={editingVideo?.category}
                  required
                >
                  {videoCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                {editingVideo ? 'Güncelle' : 'Ekle'}
              </button>
              {editingVideo && (
                <button 
                  type="button" 
                  className="btn btn-ghost"
                  onClick={() => setEditingVideo(null)}
                >
                  İptal
                </button>
              )}
            </form>

            {/* Video Listesi */}
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Videolar</h3>
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Başlık</th>
                      <th>Kurs</th>
                      <th>Kategori</th>
                      <th>Tarih</th>
                      <th>İşlemler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {videos.map(video => (
                      <tr key={video.id}>
                        <td>{video.title}</td>
                        <td>{video.course}</td>
                        <td>{videoCategories.find(c => c.id === video.category)?.name}</td>
                        <td>{new Date(video.uploadDate).toLocaleDateString()}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-ghost"
                            onClick={() => handleEditVideo(video)}
                          >
                            Düzenle
                          </button>
                          <button className="btn btn-sm btn-error ml-2">Sil</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'students' && (
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <div className="flex justify-between items-center mb-6">
              <h2 className="card-title">
                {editingStudent ? 'Öğrenci Düzenle' : 'Öğrenci Ekle'}
              </h2>
              <div className="flex gap-2">
                <input 
                  type="file" 
                  accept=".xlsx,.xls" 
                  onChange={handleImportStudents}
                  className="file-input file-input-bordered file-input-sm w-full max-w-xs"
                />
                <button 
                  onClick={handleExportStudents}
                  className="btn btn-sm btn-outline"
                >
                  Export Excel
                </button>
              </div>
            </div>

            <form onSubmit={editingStudent ? handleUpdateStudent : handleAddStudent} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Ad Soyad</span>
                </label>
                <input 
                  type="text" 
                  name="name"
                  className="input input-bordered" 
                  required 
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">E-posta</span>
                </label>
                <input 
                  type="email" 
                  name="email"
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
                  name="password"
                  className="input input-bordered" 
                  required 
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Kurs</span>
                </label>
                <select name="course" className="select select-bordered" required>
                  <option value="bilgisayar">Bilgisayar İşletmeni</option>
                  <option value="yazilim">Yazılım Geliştirme</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary">
                {editingStudent ? 'Güncelle' : 'Ekle'}
              </button>
              {editingStudent && (
                <button 
                  type="button" 
                  className="btn btn-ghost"
                  onClick={() => setEditingStudent(null)}
                >
                  İptal
                </button>
              )}
            </form>

            {/* Öğrenci Listesi */}
            <div className="mt-8">
              <h3 className="text-lg font-bold mb-4">Kayıtlı Öğrenciler</h3>
              <div className="overflow-x-auto">
                <table className="table w-full">
                  <thead>
                    <tr>
                      <th>Ad Soyad</th>
                      <th>E-posta</th>
                      <th>Kurs</th>
                      <th>İşlemler</th>
                    </tr>
                  </thead>
                  <tbody>
                    {students.map(student => (
                      <tr key={student.id}>
                        <td>{student.name}</td>
                        <td>{student.email}</td>
                        <td>{student.course}</td>
                        <td>
                          <button 
                            className="btn btn-sm btn-ghost"
                            onClick={() => handleEditStudent(student)}
                          >
                            Düzenle
                          </button>
                          <button className="btn btn-sm btn-error ml-2">Sil</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AdminPanel; 