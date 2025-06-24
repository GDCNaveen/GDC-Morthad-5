import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import VideoCard from '@/components/VideoCard';
import Footer from '@/components/Footer';
import LoginPage from '@/components/LoginPage';
import { videos, Video } from '@/data/videos';
import { isUserLoggedIn, checkLoginExpiry } from '@/utils/auth';
import { toast } from 'sonner';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [username, setUsername] = useState('');
  const [filteredVideos, setFilteredVideos] = useState<Video[]>(videos);

  useEffect(() => {
    const loggedIn = isUserLoggedIn();
    setIsLoggedIn(loggedIn);
    
    if (loggedIn) {
      const storedUsername = localStorage.getItem('username');
      setUsername(storedUsername || '');
    }

    // Check expiry every minute
    const interval = setInterval(() => {
      const stillValid = checkLoginExpiry();
      if (!stillValid && isLoggedIn) {
        setIsLoggedIn(false);
        toast.error('Session expired. Please login again.');
      }
    }, 60000);

    return () => clearInterval(interval);
  }, [isLoggedIn]);

  useEffect(() => {
    if (activeTab === 'All') {
      setFilteredVideos(videos);
    } else {
      setFilteredVideos(videos.filter(video => video.category === activeTab));
    }
  }, [activeTab]);

  const handleLogin = (user: string) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setActiveVideo(null); // Pause any playing video when switching tabs
  };

  const handleVideoPlay = (videoId: string) => {
    setActiveVideo(videoId);
  };

  const handleVideoPause = () => {
    setActiveVideo(null);
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header activeTab={activeTab} onTabChange={handleTabChange} />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="grid gap-6">
          {filteredVideos.length > 0 ? (
            filteredVideos.map((video) => (
              <VideoCard
                key={video.id}
                id={video.id}
                title={video.title}
                description={video.description}
                vimeoUrl={video.vimeoUrl}
                isActive={activeVideo === video.id}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                date={video.date}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No content available for {activeTab} category yet.
              </p>
              <p className="text-gray-400 text-sm mt-2">
                More videos will be added soon!
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
