import { useState, useEffect } from 'react';
import { useVideo } from '../context/VideoContext';

function StudentPanel({ currentStudent }) {
  const { getVideosByCourse } = useVideo();
  const [studentVideos, setStudentVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Öğrencinin kursuna ait videoları yükle
  useEffect(() => {
    if (currentStudent?.course) {
      const videos = getVideosByCourse(currentStudent.course);
      setStudentVideos(videos);
    }
  }, [currentStudent, getVideosByCourse]);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Öğrenci Bilgileri */}
        <div className="md:col-span-1 card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Profil Bilgileri</h2>
            <div className="space-y-2">
              <p><strong>Ad Soyad:</strong> {currentStudent?.name}</p>
              <p><strong>E-posta:</strong> {currentStudent?.email}</p>
              <p><strong>Kurs:</strong> {currentStudent?.course === 'bilgisayar' ? 'Bilgisayar İşletmeni' : 'Yazılım Geliştirme'}</p>
            </div>
          </div>
        </div>

        {/* Video Listesi */}
        <div className="md:col-span-3 card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title mb-4">Eğitim Videoları</h2>
            
            {studentVideos.length === 0 ? (
              <div className="text-center py-8">
                <p>Henüz bu kursa ait video bulunmamaktadır.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {studentVideos.map(video => (
                  <div 
                    key={video.id} 
                    className="card bg-base-200 cursor-pointer hover:bg-base-300 transition-colors"
                    onClick={() => setSelectedVideo(video)}
                  >
                    <div className="card-body">
                      <h3 className="card-title text-base">{video.title}</h3>
                      <p className="text-sm opacity-70">{video.description.substring(0, 100)}...</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="modal modal-open">
          <div className="modal-box max-w-4xl">
            <h3 className="font-bold text-lg mb-4">{selectedVideo.title}</h3>
            <div className="aspect-video">
              <iframe
                src={selectedVideo.url}
                className="w-full h-full rounded-lg"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-4">
              <h4 className="font-bold mb-2">Açıklama</h4>
              <p>{selectedVideo.description}</p>
            </div>
            <div className="modal-action">
              <button 
                className="btn"
                onClick={() => setSelectedVideo(null)}
              >
                Kapat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StudentPanel; 