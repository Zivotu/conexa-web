import { useState } from 'react';
import { Play } from 'lucide-react';

interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  caption?: string;
  className?: string;
}

const YouTubeEmbed = ({
  videoId,
  title = "YouTube video",
  caption,
  className = ""
}: YouTubeEmbedProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={`w-full ${className}`}>
      <div className="relative w-full rounded-lg overflow-hidden shadow-lg bg-white">
        <div className="relative pb-[56.25%] h-0">
          {!isLoaded ? (
            <div
              className="absolute top-0 left-0 w-full h-full cursor-pointer bg-gray-900 flex items-center justify-center"
              onClick={handleLoad}
            >
              <img
                src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                alt={`${title} video thumbnail`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                  <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          )}
        </div>
      </div>
      {caption && (
        <p className="text-center text-sm text-gray-600 mt-3 font-inter">
          {caption}
        </p>
      )}
    </div>
  );
};

export default YouTubeEmbed;
