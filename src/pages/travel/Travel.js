import React, { useState } from "react";
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
import PhotoGallery from "../../components/photoGallery/PhotoGallery";
import { travelData } from "../../portfolio";
import "./Travel.css";

const worldMapUrl = "/data/world-atlas.json";
const indiaMapUrl = "/data/india-states.json";

function Travel(props) {
  const theme = props.theme;
  const [locations] = useState(travelData.locations);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [activeTab, setActiveTab] = useState("domestic");
  const [indiaPosition, setIndiaPosition] = useState({
    coordinates: [81.9629, 20.5937],
    zoom: window.innerWidth <= 1024 ? 1.2 : 0.8,
  });
  const [worldPosition, setWorldPosition] = useState({
    coordinates: [window.innerWidth <= 1024 ? 81 : 0, 20],
    zoom: window.innerWidth <= 1024 ? 1.5 : 1,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleContextMenu = (e, location) => {
    e.preventDefault();
    setSelectedLocation(location);

    // On mobile, scroll to gallery after a short delay to allow for render
    if (window.innerWidth <= 1024) {
      setTimeout(() => {
        const galleryContainer = document.querySelector(".gallery-container");
        if (galleryContainer) {
          galleryContainer.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 100);
    }
  };

  const handleMapClick = (e) => {
    // Only clear selection if clicking the map container itself, not markers
    if (e.target.closest(".marker") || e.target.closest("g[transform]")) {
      return;
    }
    setSelectedLocation(null);
  };

  const LocationPin = ({ color, zoom, location }) => {
    const scale = Math.max(0.2, (window.innerWidth <= 1024 ? 2.1 : 1) / zoom);
    return (
      <g
        transform={`translate(-8, -15) scale(${scale})`}
        onContextMenu={(e) => handleContextMenu(e, location)}
        style={{ cursor: "context-menu" }}
      >
        <path
          d="M8 0C3.6 0 0 3.6 0 8c0 7.2 8 16 8 16s8-8.8 8-16c0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
          fill={color}
          stroke="#fff"
          strokeWidth="2"
        />
      </g>
    );
  };

  const renderMap = (type) => {
    const isIndia = type === "domestic";
    const mapUrl = isIndia ? indiaMapUrl : worldMapUrl;
    const position = isIndia ? indiaPosition : worldPosition;
    const setPosition = isIndia ? setIndiaPosition : setWorldPosition;
    const filteredLocations = locations.filter((loc) =>
      type === "domestic"
        ? loc.type === "domestic"
        : loc.type === "international"
    );

    return (
      <div className="travel-map-div">
        <div className="travel-legend">
          <div className="legend-item">
            <div
              className="legend-dot"
              style={{ backgroundColor: theme.visitedLocation }}
            ></div>
            <span>Visited</span>
          </div>
          <div className="legend-item">
            <div
              className="legend-dot"
              style={{ backgroundColor: theme.plannedLocation }}
            ></div>
            <span>Planning to Visit</span>
          </div>
        </div>
        <div className="map-container">
          {!isLoading && (
            <>
              <div className="controls">
                <button
                  onClick={() =>
                    setPosition((pos) => ({
                      ...pos,
                      zoom: Math.min(pos.zoom * 2, 8),
                    }))
                  }
                >
                  +
                </button>
                <button
                  onClick={() =>
                    setPosition((pos) => ({
                      ...pos,
                      zoom: Math.max(pos.zoom / 2, 0.5),
                    }))
                  }
                >
                  −
                </button>
              </div>
              <ComposableMap
                projection="geoMercator"
                projectionConfig={
                  isIndia
                    ? {
                        scale: window.innerWidth <= 1024 ? 1200 : 800,
                        center: [78.9629, 22.5937],
                      }
                    : {
                        scale: window.innerWidth <= 1024 ? 200 : 150,
                      }
                }
                style={{
                  width: "100%",
                  height: "100%",
                }}
              >
                <ZoomableGroup
                  zoom={position.zoom}
                  center={position.coordinates}
                  maxZoom={window.innerWidth <= 1024 ? 6 : 8}
                  minZoom={window.innerWidth <= 1024 ? 0.1 : 0.5}
                  onMoveEnd={setPosition}
                >
                  <Geographies geography={mapUrl}>
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

                  {filteredLocations.map((location, index) => {
                    const isVisited = location.status === "visited";
                    return (
                      <Marker
                        key={`${location.name}-${location.latitude}-${location.longitude}`}
                        coordinates={[
                          parseFloat(location.longitude),
                          parseFloat(location.latitude),
                        ]}
                      >
                        <LocationPin
                          color={
                            isVisited
                              ? theme.visitedLocation
                              : theme.plannedLocation
                          }
                          zoom={position.zoom}
                          location={location}
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
    );
  };

  return (
    <div className="travel-main">
      <Header theme={theme} />
      <Fade bottom duration={1000} distance="20px">
        <div className="travel-heading-div">
          <div className="travel-heading-text-div">
            <h1 className="travel-heading-text" style={{ color: theme.text }}>
              Travel Map
            </h1>
            <p
              className="travel-subtitle"
              style={{ color: theme.secondaryText }}
            >
              Places I've been and places I'm planning to visit
            </p>
          </div>
        </div>
      </Fade>

      <div className="travel-content">
        <div
          className={`maps-container ${selectedLocation ? "shrunk" : ""}`}
          onClick={handleMapClick}
        >
          <div className="travel-tabs">
            <button
              className={`travel-tab ${
                activeTab === "domestic" ? "active" : ""
              }`}
              onClick={() => setActiveTab("domestic")}
            >
              India
            </button>
            <button
              className={`travel-tab ${
                activeTab === "international" ? "active" : ""
              }`}
              onClick={() => setActiveTab("international")}
            >
              World
            </button>
          </div>
          {renderMap(activeTab)}
        </div>

        <div
          className={`gallery-container ${!selectedLocation ? "hidden" : ""}`}
        >
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
