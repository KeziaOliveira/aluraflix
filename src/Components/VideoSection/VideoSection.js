import React from "react";
import VideoCard from "../VideoCard/VideoCard";
import "./VideoSection.css";

const VideoSection = ({ category, videos, onDelete, onEdit }) => {
  const categoryClass = category.toLowerCase();

  return (
    <section className="cardsSection">
      <h2 className={`section-title ${categoryClass}`}>{category}</h2>
      <div className="video-list">
        {videos && videos.length > 0 ? (
          videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
              onDelete={onDelete}
              onEdit={onEdit}
              category={category} // Passando a categoria
            />
          ))
        ) : (
          <p>No videos available</p>
        )}
      </div>
    </section>
  );
};

export default VideoSection;
