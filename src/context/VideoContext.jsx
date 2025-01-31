import { createContext, useContext, useState } from 'react';

const VideoContext = createContext();

export function VideoProvider({ children }) {
  const [videos, setVideos] = useState([]);

  const addVideo = (video) => {
    setVideos([...videos, video]);
  };

  const getVideosByCourse = (courseId) => {
    return videos.filter(video => video.course === courseId);
  };

  const deleteVideo = (videoId) => {
    setVideos(videos.filter(video => video.id !== videoId));
  };

  return (
    <VideoContext.Provider value={{
      videos,
      addVideo,
      getVideosByCourse,
      deleteVideo
    }}>
      {children}
    </VideoContext.Provider>
  );
}

export function useVideo() {
  return useContext(VideoContext);
} 