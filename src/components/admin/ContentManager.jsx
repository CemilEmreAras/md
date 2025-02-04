import { useState } from 'react';
import { useSlider } from '../../context/SliderContext';

function ContentManager() {
  const [activeTab, setActiveTab] = useState('slider');
  const { sliderImages, addSliderImage, updateSliderImage, deleteSliderImage } = useSlider();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingImage, setEditingImage] = useState(null);
  const [formData, setFormData] = useState({
    url: '',
    title: '',
    description: ''
  });

  const handleAddEdit = (image = null) => {
    if (image) {
      setFormData({
        url: image.url,
        title: image.title,
        description: image.description
      });
      setEditingImage(image);
    } else {
      setFormData({
        url: '',
        title: '',
        description: ''
      });
      setEditingImage(null);
    }
    setIsModalOpen(true);
  };

  const handleDelete = (imageId) => {
    if (window.confirm('Bu görseli silmek istediğinize emin misiniz?')) {
      deleteSliderImage(imageId);
    }
  };

  const handleSubmit = () => {
    if (editingImage) {
      // Düzenleme
      updateSliderImage(editingImage.id, formData);
    } else {
      // Yeni ekleme
      addSliderImage(formData);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">İçerik Yönetimi</h2>

      {/* Tabs */}
      <div className="tabs tabs-boxed">
        <a 
          className={`tab ${activeTab === 'slider' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('slider')}
        >
          Slider
        </a>
        <a 
          className={`tab ${activeTab === 'about' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('about')}
        >
          Hakkımızda
        </a>
        <a 
          className={`tab ${activeTab === 'contact' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('contact')}
        >
          İletişim
        </a>
      </div>

      {/* Content Area */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          {activeTab === 'slider' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">Slider Görselleri</h3>
                <button 
                  className="btn btn-primary"
                  onClick={() => handleAddEdit()}
                >
                  Yeni Görsel Ekle
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {sliderImages.map(image => (
                  <div key={image.id} className="card bg-base-200">
                    <figure className="px-4 pt-4 relative">
                      <img
                        src={image.url}
                        className="rounded-xl h-48 w-full object-cover"
                        alt={image.title}
                      />
                      {/* MEB Logo - Önizleme kartlarında */}
                      <div className="absolute top-6 right-6 w-10 h-10 bg-white rounded-lg p-1 shadow-lg">
                        <img 
                          src="https://upload.wikimedia.org/wikipedia/tr/9/98/MEB_logo.png"
                          alt="MEB Logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </figure>
                    <div className="card-body">
                      <h4 className="card-title text-sm">{image.title}</h4>
                      <p className="text-sm">{image.description}</p>
                      <div className="card-actions justify-end">
                        <button 
                          className="btn btn-sm"
                          onClick={() => handleAddEdit(image)}
                        >
                          Düzenle
                        </button>
                        <button 
                          className="btn btn-sm btn-error"
                          onClick={() => handleDelete(image.id)}
                        >
                          Sil
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Modal */}
          {isModalOpen && (
            <div className="modal modal-open">
              <div className="modal-box">
                <h3 className="font-bold text-lg">
                  {editingImage ? 'Görsel Düzenle' : 'Yeni Görsel Ekle'}
                </h3>
                <div className="space-y-4 mt-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Görsel URL</span>
                    </label>
                    <input 
                      type="text"
                      className="input input-bordered"
                      value={formData.url}
                      onChange={(e) => setFormData({...formData, url: e.target.value})}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Başlık</span>
                    </label>
                    <input 
                      type="text"
                      className="input input-bordered"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Açıklama</span>
                    </label>
                    <textarea 
                      className="textarea textarea-bordered"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    />
                  </div>
                </div>
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

          {activeTab === 'about' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Hakkımızda Sayfası</h3>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Başlık</span>
                </label>
                <input type="text" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">İçerik</span>
                </label>
                <textarea className="textarea textarea-bordered" rows="10"></textarea>
              </div>
              <div className="text-right">
                <button className="btn btn-primary">Kaydet</button>
              </div>
            </div>
          )}

          {activeTab === 'contact' && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold">İletişim Bilgileri</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Adres</span>
                  </label>
                  <input type="text" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Telefon</span>
                  </label>
                  <input type="text" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">E-posta</span>
                  </label>
                  <input type="email" className="input input-bordered" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Harita Linki</span>
                  </label>
                  <input type="text" className="input input-bordered" />
                </div>
              </div>
              <div className="text-right">
                <button className="btn btn-primary">Kaydet</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContentManager; 