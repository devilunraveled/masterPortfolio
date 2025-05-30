import React, { useState, useEffect } from "react";
import "./PhotoGallery.css";

const PhotoGallery = ({ location, onClose }) => {
  const [photos, setPhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  useEffect(() => {
    if (location) {
      fetch("/photos/index.json")
        .then((response) => response.json())
        .then((photoIndex) => {
          console.log("[PhotoGallery] Photo index loaded:", photoIndex);
          const locationPhotos = photoIndex[location.photoDir] || [];
          console.log("[PhotoGallery] Photos for location:", locationPhotos);
          setPhotos(locationPhotos);
        })
        .catch((error) => {
          console.error("[PhotoGallery] Error loading photo index:", error);
          setPhotos([]);
        });
    }
  }, [location]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (photos.length > 1) {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
      }
    }, 3000); // Change photo every 3 seconds

    return () => clearInterval(interval);
  }, [photos]);

  const imagePath = `/photos/${location.photoDir}`;

  return (
    <div className="photo-gallery">
      <button className="close-button" onClick={onClose}>
        ×
      </button>
      <h2>{location.name}</h2>

      <div className="photo-container">
        {photos.length > 0 ? (
          <img
            src={`${imagePath}/${photos[currentPhotoIndex]}`}
            alt={`${location.name} - ${currentPhotoIndex + 1}`}
            onError={(e) =>
              console.error(
                "[PhotoGallery] Image failed to load:",
                e.target.src
              )
            }
            onLoad={() =>
              console.log(
                "[PhotoGallery] Image loaded successfully:",
                `${imagePath}/${photos[currentPhotoIndex]}`
              )
            }
          />
        ) : (
          <div className="no-photos">No photos available</div>
        )}

        {photos.length > 1 && (
          <div className="photo-indicators">
            {photos.map((_, index) => (
              <span
                key={index}
                className={`indicator ${
                  index === currentPhotoIndex ? "active" : ""
                }`}
                onClick={() => setCurrentPhotoIndex(index)}
              />
            ))}
          </div>
        )}
      </div>

      <div className="description-container">
        <div
          className={`description ${isDescriptionExpanded ? "expanded" : ""}`}
          onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
        >
          <p>{location.description || "No description available."}</p>
        </div>
        {location.description && location.description.length > 150 && (
          <button
            className="expand-button"
            onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
          >
            {isDescriptionExpanded ? "Show Less" : "Show More"}
          </button>
        )}
      </div>

      <div className="visit-info">
        <span className="status">
          {location.status === "visited" ? "Visited" : "Planning to visit"}
        </span>
        {location.visitDate && (
          <span className="date">{location.visitDate}</span>
        )}
      </div>
    </div>
  );
};

export default PhotoGallery;
