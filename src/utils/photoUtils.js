// Function to handle photos from public directory
const getLocalPhotos = async (photoDir) => {
  if (!photoDir) return [];

  try {
    console.log("Fetching photos from directory:", photoDir);
    // Fetch the photo index
    const response = await fetch("/photos/index.json");
    const photoIndex = await response.json();

    // Get photos for this location
    const locationPhotos = photoIndex[photoDir] || [];
    console.log("Found photos:", locationPhotos.length);

    // Map the photos to the common format
    return locationPhotos.map((filename) => ({
      src: `/photos/${photoDir}/${filename}`,
      alt: filename.split(".")[0],
      type: "local",
    }));
  } catch (error) {
    console.warn(`No photos found for ${photoDir}:`, error);
    return [];
  }
};

// Main function to get photos for a location
export const getLocationPhotos = async (location) => {
  console.log("Getting photos for location:", location.name);
  return getLocalPhotos(location.photoDir);
};

// Utility function to validate Google Photos URLs (kept for future use)
export const isValidGooglePhotosUrl = (url) => {
  const isValid =
    url &&
    (url.includes("photos.app.goo.gl/") ||
      url.includes("photos.google.com/share/"));
  console.log("Validating Google Photos URL:", url, "Result:", isValid);
  return isValid;
};
