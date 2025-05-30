import React, { useState, useEffect } from "react";
import { getLocationPhotos } from "../../utils/photoUtils";
import "./PhotoGallery.css";

const PhotoGallery = ({ location, onClose }) => {
  const [photos, setPhotos] = useState([]);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  useEffect(() => {
    const loadPhotos = async () => {
      try {
        setLoading(true);
        setError(null);
        const photoData = await getLocationPhotos(location);

        if (photoData.length === 0) {
          setError("No photos available for this location");
        } else {
          setPhotos(photoData);
        }
      } catch (err) {
        console.error("Error loading photos:", err);
        setError("Failed to load photos. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    if (location) {
      loadPhotos();
    }
  }, [location]);

  useEffect(() => {
    // Only auto-rotate local photos, not Google Photos embeds
    if (photos.length > 1 && !photos[currentPhotoIndex].isEmbed) {
      const interval = setInterval(() => {
        setCurrentPhotoIndex((prev) => {
          // Find next non-embed photo
          let nextIndex = (prev + 1) % photos.length;
          while (photos[nextIndex].isEmbed && nextIndex !== prev) {
            nextIndex = (nextIndex + 1) % photos.length;
          }
          return nextIndex;
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [photos, currentPhotoIndex]);

  const handleIndicatorClick = (index) => {
    setCurrentPhotoIndex(index);
  };

  if (loading) {
    return (
      <div className="photo-gallery">
        <div className="loading">
          <div className="loading-spinner"></div>
          <p>Loading photos...</p>
        </div>
      </div>
    );
  }

  const currentPhoto = photos[currentPhotoIndex];

  return (
    <div className="photo-gallery">
      <button className="close-button" onClick={onClose}>
        ×
      </button>

      <div className="gallery-content">
        <h2>{location.name}</h2>

        <div className="photo-container">
          {error ? (
            <div className="error-message">{error}</div>
          ) : (
            <>
              {currentPhoto &&
                (currentPhoto.isEmbed ? (
                  <iframe
                    src={currentPhoto.src}
                    title="Google Photos Album"
                    className="google-photos-embed"
                    frameBorder="0"
                    allowFullScreen
                  />
                ) : (
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.alt || `Photo ${currentPhotoIndex + 1}`}
                    loading="lazy"
                  />
                ))}

              {photos.length > 1 && !currentPhoto.isEmbed && (
                <div className="photo-indicators">
                  {photos
                    .filter((p) => !p.isEmbed)
                    .map((_, index) => (
                      <span
                        key={index}
                        className={`indicator ${
                          index === currentPhotoIndex ? "active" : ""
                        }`}
                        onClick={() => handleIndicatorClick(index)}
                      />
                    ))}
                </div>
              )}
            </>
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
            <span className="date">
              {new Date(location.visitDate).toLocaleDateString()}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
