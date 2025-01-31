import { useState, useEffect } from 'react';

function VideoPlayer({ video, onComplete, onProgress }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showNotes, setShowNotes] = useState(false);
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  // Video ilerleme durumunu takip et
  useEffect(() => {
    const progress = (currentTime / duration) * 100;
    if (progress > 90) { // %90'ı tamamlandığında
      onComplete && onComplete(video.id);
    }
    onProgress && onProgress(video.id, progress);
  }, [currentTime, duration]);

  const handleAddNote = () => {
    if (note.trim()) {
      const newNote = {
        id: Date.now(),
        time: currentTime,
        text: note,
        timestamp: new Date().toISOString()
      };
      setNotes([...notes, newNote]);
      setNote('');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Bölümü */}
        <div className="lg:col-span-2">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl mb-4">{video.title}</h2>
              
              {/* Video Player */}
              <div className="aspect-video bg-base-300 rounded-lg mb-4">
                <iframe
                  src={video.url}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Kontrolleri */}
              <div className="flex flex-col gap-2">
                <progress 
                  className="progress progress-primary w-full" 
                  value={currentTime} 
                  max={duration}
                ></progress>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">
                    {Math.floor(currentTime / 60)}:{Math.floor(currentTime % 60).toString().padStart(2, '0')} / 
                    {Math.floor(duration / 60)}:{Math.floor(duration % 60).toString().padStart(2, '0')}
                  </span>
                  <button 
                    className="btn btn-primary"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? 'Duraklat' : 'Oynat'}
                  </button>
                </div>
              </div>

              {/* Video Bilgileri */}
              <div className="mt-4">
                <h3 className="font-bold text-lg mb-2">Video Hakkında</h3>
                <p>{video.description}</p>
                
                <div className="flex gap-2 mt-4">
                  <div className="badge badge-primary">{video.category}</div>
                  <div className="badge badge-secondary">{video.duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Not Alma Bölümü */}
        <div className="lg:col-span-1">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <div className="flex justify-between items-center mb-4">
                <h3 className="card-title">Notlarım</h3>
                <button 
                  className="btn btn-ghost btn-sm"
                  onClick={() => setShowNotes(!showNotes)}
                >
                  {showNotes ? 'Gizle' : 'Göster'}
                </button>
              </div>

              {showNotes && (
                <>
                  <div className="form-control">
                    <textarea 
                      className="textarea textarea-bordered" 
                      placeholder="Not al..."
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    ></textarea>
                  </div>
                  
                  <button 
                    className="btn btn-primary w-full mt-2"
                    onClick={handleAddNote}
                  >
                    Not Ekle
                  </button>

                  <div className="divider"></div>

                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {notes.map((note) => (
                      <div key={note.id} className="card bg-base-200">
                        <div className="card-body p-4">
                          <p>{note.text}</p>
                          <div className="text-sm text-base-content/70">
                            {new Date(note.timestamp).toLocaleString()} - 
                            {Math.floor(note.time / 60)}:{Math.floor(note.time % 60).toString().padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer; 