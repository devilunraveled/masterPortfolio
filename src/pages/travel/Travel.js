import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import Papa from "papaparse";
import PhotoGallery from "../../components/photoGallery/PhotoGallery";
import "./Travel.css";

const worldMapUrl = "/data/world-atlas.json";
const indiaMapUrl = "/data/india-states.json";

function Travel(props) {
  const theme = props.theme;
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [indiaPosition, setIndiaPosition] = useState({
    coordinates: [78.9629, 20.5937],
    zoom: 1,
  });
  const [worldPosition, setWorldPosition] = useState({
    coordinates: [0, 20],
    zoom: 1,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/travelData.csv")
      .then((response) => response.text())
      .then((csvData) => {
        const results = Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
        });
        // Trim all string fields
        const validLocations = results.data
          .map((loc) => {
            const trimmed = {};
            for (const key in loc) {
              trimmed[key] =
                typeof loc[key] === "string" ? loc[key].trim() : loc[key];
            }
            return trimmed;
          })
          .filter(
            (loc) =>
              loc.latitude &&
              loc.longitude &&
              !isNaN(parseFloat(loc.latitude)) &&
              !isNaN(parseFloat(loc.longitude))
          );
        setLocations(validLocations);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading travel data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleIndiaZoomIn = () => {
    if (indiaPosition.zoom >= 8) return;
    setIndiaPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleIndiaZoomOut = () => {
    if (indiaPosition.zoom <= 0.5) return;
    setIndiaPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleWorldZoomIn = () => {
    if (worldPosition.zoom >= 8) return;
    setWorldPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleWorldZoomOut = () => {
    if (worldPosition.zoom <= 0.5) return;
    setWorldPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const LocationPin = ({ color, zoom, onClick }) => {
    const scale = Math.max(0.2, 1 / zoom);
    return (
      <g transform={`translate(-8, -15) scale(${scale})`}>
        <path
          d="M8 0C3.6 0 0 3.6 0 8c0 7.2 8 16 8 16s8-8.8 8-16c0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
          fill={color}
          stroke="#fff"
          strokeWidth="2"
          style={{ cursor: "pointer", pointerEvents: "all" }} // Path must be interactive
          onMouseDown={(e) => {
            console.log("[LocationPin Path]: onMouseDown triggered.");
            e.stopPropagation(); // Essential to prevent pan/zoom library interference
            if (onClick) {
              console.log(
                "[LocationPin Path]: onClick prop is valid, calling it."
              );
              onClick();
            } else {
              console.error(
                "[LocationPin Path]: onClick prop is missing or not a function!"
              );
            }
          }}
          data-nopan="true" // Hint for pan/zoom libraries
        />
      </g>
    );
  };

  const handleLocationClick = (location) => {
    console.log("handleLocationClick called with location:", location);

    if (!location) {
      console.error("handleLocationClick called with null location");
      return;
    }

    setSelectedLocation((prev) => {
      const isSelected =
        prev &&
        prev.name === location.name &&
        prev.latitude === location.latitude &&
        prev.longitude === location.longitude;

      console.log("Previous selected location:", prev);
      console.log("Is this location already selected?", isSelected);

      if (isSelected) {
        console.log("Closing gallery for", location.name);
        return null;
      } else {
        console.log("Setting new selected location:", location);
        return location;
      }
    });
  };

  // Add debugging for re-renders
  useEffect(() => {
    console.log(
      "Travel component rendered with selectedLocation:",
      selectedLocation
    );
  }, [selectedLocation]);

  // console.log("The selected location is", selectedLocation);

  return (
    <div className="travel-main">
      <Header theme={theme} />
      <div className="basic-travel">
        <Fade bottom duration={2000} distance="40px">
          <div className="travel-heading-div">
            <div className="travel-heading-text-div">
              <h1 className="travel-heading-text" style={{ color: theme.text }}>
                My Travel Map
              </h1>
              <p
                className="travel-subtitle"
                style={{ color: theme.secondaryText }}
              >
                Places I've visited and plan to visit
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <div
        className={`travel-content${selectedLocation ? " with-gallery" : ""}`}
      >
        <div className="maps-container">
          {/* India Map */}
          <div
            className="travel-map-div"
            style={{ backgroundColor: theme.mapBackground }}
          >
            <h3 className="map-title" style={{ color: theme.text }}>
              Domestic Travel
            </h3>
            <div className="travel-legend">
              <div className="legend-item">
                <div
                  className="legend-dot"
                  style={{ backgroundColor: theme.visitedLocation }}
                ></div>
                <span style={{ color: theme.text }}>Visited</span>
              </div>
              <div className="legend-item">
                <div
                  className="legend-dot"
                  style={{ backgroundColor: theme.plannedLocation }}
                ></div>
                <span style={{ color: theme.text }}>Planned</span>
              </div>
            </div>

            <div className="map-container">
              {!isLoading && (
                <>
                  <div className="controls">
                    <button onClick={handleIndiaZoomIn}>+</button>
                    <button onClick={handleIndiaZoomOut}>−</button>
                  </div>
                  <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                      scale: 800,
                      center: [78.9629, 22.5937],
                    }}
                  >
                    <ZoomableGroup
                      zoom={indiaPosition.zoom}
                      center={indiaPosition.coordinates}
                      maxZoom={8}
                      minZoom={0.5}
                      onMoveEnd={setIndiaPosition}
                    >
                      <Geographies geography={indiaMapUrl}>
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill={theme.mapBackground}
                              stroke={theme.mapStroke}
                              strokeWidth={0.3}
                            />
                          ))
                        }
                      </Geographies>

                      {locations
                        .filter((location) => location.type === "domestic")
                        .map((location, index) => {
                          const isVisited = location.status === "visited";
                          return (
                            <Marker
                              key={`${location.name}-${location.latitude}-${location.longitude}`}
                              coordinates={[
                                parseFloat(location.longitude),
                                parseFloat(location.latitude),
                              ]}
                              style={{
                                pointerEvents: "all",
                                cursor: "pointer",
                                touchAction: "none",
                              }}
                            >
                              <LocationPin
                                color={
                                  isVisited
                                    ? theme.visitedLocation
                                    : theme.plannedLocation
                                }
                                zoom={indiaPosition.zoom}
                                onClick={() => {
                                  console.log(
                                    `[Marker onClick - domestic]: Callback invoked for location:`,
                                    location.name
                                  );
                                  handleLocationClick(location);
                                }}
                              />
                            </Marker>
                          );
                        })}
                    </ZoomableGroup>
                  </ComposableMap>
                </>
              )}
            </div>
          </div>

          {/* World Map */}
          <div
            className="travel-map-div"
            style={{ backgroundColor: theme.mapBackground }}
          >
            <h3 className="map-title" style={{ color: theme.text }}>
              International Travel
            </h3>
            <div className="map-container">
              {!isLoading && (
                <>
                  <div className="controls">
                    <button onClick={handleWorldZoomIn}>+</button>
                    <button onClick={handleWorldZoomOut}>−</button>
                  </div>
                  <ComposableMap
                    projection="geoMercator"
                    projectionConfig={{
                      scale: 150,
                      center: [0, 30],
                    }}
                  >
                    <ZoomableGroup
                      zoom={worldPosition.zoom}
                      center={worldPosition.coordinates}
                      maxZoom={8}
                      minZoom={0.5}
                      onMoveEnd={setWorldPosition}
                    >
                      <Geographies geography={worldMapUrl}>
                        {({ geographies }) =>
                          geographies.map((geo) => (
                            <Geography
                              key={geo.rsmKey}
                              geography={geo}
                              fill={theme.mapBackground}
                              stroke={theme.mapStroke}
                              strokeWidth={0.3}
                            />
                          ))
                        }
                      </Geographies>

                      {locations
                        .filter((location) => location.type === "international")
                        .map((location, index) => {
                          const isVisited = location.status === "visited";
                          console.log(
                            "Rendering international marker for",
                            location.name
                          );
                          return (
                            <Marker
                              key={`${location.name}-${location.latitude}-${location.longitude}`}
                              coordinates={[
                                parseFloat(location.longitude),
                                parseFloat(location.latitude),
                              ]}
                              style={{ pointerEvents: "auto" }}
                            >
                              <LocationPin
                                color={
                                  isVisited
                                    ? theme.visitedLocation
                                    : theme.plannedLocation
                                }
                                zoom={worldPosition.zoom}
                                onClick={() => {
                                  console.log(
                                    `[Marker onClick - international]: Callback invoked for location:`,
                                    location.name
                                  );
                                  handleLocationClick(location);
                                }}
                              />
                            </Marker>
                          );
                        })}
                    </ZoomableGroup>
                  </ComposableMap>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="gallery-container">
          {selectedLocation && (
            <PhotoGallery
              location={selectedLocation}
              onClose={() => setSelectedLocation(null)}
            />
          )}
        </div>
      </div>

      <Footer theme={props.theme} />
      <TopButton theme={props.theme} />
    </div>
  );
}

export default Travel;
