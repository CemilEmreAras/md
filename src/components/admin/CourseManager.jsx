import { useState } from 'react';

function CourseManager() {
  const [courses, setCourses] = useState([
    { id: 1, title: 'Bilgisayar İşletmeni', description: 'Ofis programları eğitimi', status: 'active', students: 15 },
    { id: 2, title: 'Yazılım Geliştirme', description: 'Web geliştirme eğitimi', status: 'active', students: 20 },
    { id: 3, title: 'Grafik Tasarım', description: 'Adobe programları eğitimi', status: 'draft', students: 0 },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'draft'
  });

  const handleAddEdit = (course = null) => {
    if (course) {
      setFormData({
        title: course.title,
        description: course.description,
        status: course.status
      });
    } else {
      setFormData({
        title: '',
        description: '',
        status: 'draft'
      });
    }
    setEditingCourse(course);
    setIsModalOpen(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (editingCourse) {
      // Düzenleme
      setCourses(courses.map(course => 
        course.id === editingCourse.id 
          ? { ...course, ...formData }
          : course
      ));
    } else {
      // Yeni ekleme
      setCourses([
        ...courses,
        {
          id: courses.length + 1,
          ...formData,
          students: 0
        }
      ]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (courseId) => {
    if (window.confirm('Bu kursu silmek istediğinize emin misiniz?')) {
      setCourses(courses.filter(course => course.id !== courseId));
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold">Kurs Yönetimi</h2>
        <button 
          className="btn btn-primary"
          onClick={() => handleAddEdit()}
        >
          Yeni Kurs Ekle
        </button>
      </div>

      {/* Course List */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="overflow-x-auto">
            <table className="table">
              <thead>
                <tr>
                  <th>Kurs Adı</th>
                  <th>Durum</th>
                  <th>Öğrenci Sayısı</th>
                  <th>İşlemler</th>
                </tr>
              </thead>
              <tbody>
                {courses.map(course => (
                  <tr key={course.id}>
                    <td>{course.title}</td>
                    <td>
                      <div className={`badge ${
                        course.status === 'active' ? 'badge-success' : 'badge-ghost'
                      }`}>
                        {course.status === 'active' ? 'Aktif' : 'Taslak'}
                      </div>
                    </td>
                    <td>{course.students}</td>
                    <td>
                      <div className="flex gap-2">
                        <button 
                          className="btn btn-sm btn-ghost"
                          onClick={() => handleAddEdit(course)}
                        >
                          Düzenle
                        </button>
                        <button 
                          className="btn btn-sm btn-error btn-ghost"
                          onClick={() => handleDelete(course.id)}
                        >
                          Sil
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              {editingCourse ? 'Kurs Düzenle' : 'Yeni Kurs Ekle'}
            </h3>
            <form className="space-y-4 mt-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Kurs Adı</span>
                </label>
                <input 
                  type="text" 
                  name="title"
                  className="input input-bordered" 
                  value={formData.title}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Açıklama</span>
                </label>
                <textarea 
                  name="description"
                  className="textarea textarea-bordered" 
                  rows="3"
                  value={formData.description}
                  onChange={handleInputChange}
                ></textarea>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Durum</span>
                </label>
                <select 
                  name="status"
                  className="select select-bordered"
                  value={formData.status}
                  onChange={handleInputChange}
                >
                  <option value="draft">Taslak</option>
                  <option value="active">Aktif</option>
                </select>
              </div>
            </form>
            <div className="modal-action">
              <button 
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Kaydet
              </button>
              <button 
                className="btn"
                onClick={() => setIsModalOpen(false)}
              >
                İptal
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseManager; 