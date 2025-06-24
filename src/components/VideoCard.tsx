
import React, { useRef, useEffect, useState } from 'react';

interface VideoCardProps {
  id: string;
  title: string;
  description: string;
  vimeoUrl: string;
  isActive: boolean;
  onPlay: (id: string) => void;
  onPause: () => void;
  date: string;
}

const VideoCard = ({ id, title, description, vimeoUrl, isActive, onPlay, onPause, date }: VideoCardProps) => {
  const videoRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio < 0.5 && isActive) {
            // Pause video when less than 50% visible
            onPause();
            if (iframeRef.current) {
              iframeRef.current.src = iframeRef.current.src;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [isActive, onPause]);

  const handleVideoClick = () => {
    onPlay(id);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const shouldShowReadMore = description.length > 150;
  const displayDescription = isExpanded ? description : description.slice(0, 150) + (shouldShowReadMore ? '...' : '');

  return (
    <div ref={videoRef} className="bg-white rounded-lg shadow-lg mb-6 overflow-hidden max-w-4xl mx-auto">
      <div className="relative">
        <iframe
          ref={iframeRef}
          src={vimeoUrl}
          className="w-full aspect-video"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          title={title}
        />
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {title}
          </h2>
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/6d75de89-7405-42fc-9813-ebecde8e9a71.png" 
              alt="College Logo" 
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-600 font-medium">
              {formatDate(date)}
            </span>
          </div>
        </div>
        <div className="text-gray-700 text-justify leading-relaxed">
          {displayDescription}
          {shouldShowReadMore && (
            <button
              onClick={toggleReadMore}
              className="ml-2 text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              {isExpanded ? 'Read Less' : 'Read More'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
