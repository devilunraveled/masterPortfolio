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
import "./Travel.css";

const geoUrl = "/data/world-atlas.json";

function Travel(props) {
  const theme = props.theme;
  const [locations, setLocations] = useState([]);
  const [position, setPosition] = useState({
    coordinates: [78.9629, 20.5937],
    zoom: 4,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    fetch("/travelData.csv")
      .then((response) => response.text())
      .then((csvData) => {
        const results = Papa.parse(csvData, {
          header: true,
          skipEmptyLines: true,
        });
        setLocations(results.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading travel data:", error);
        setIsLoading(false);
      });
  }, []);

  function handleZoomIn() {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  }

  function handleZoomOut() {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  }

  function handleMoveEnd(position) {
    setPosition(position);
  }

  const LocationPin = ({ color }) => (
    <g transform="translate(-4, -8) scale(0.3)">
      <path
        d="M8 0C3.6 0 0 3.6 0 8c0 7.2 8 16 8 16s8-8.8 8-16c0-4.4-3.6-8-8-8zm0 11c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
        fill={color}
        stroke="#fff"
        strokeWidth="1.5"
      />
    </g>
  );

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
        className="travel-map-div"
        style={{ backgroundColor: theme.mapBackground }}
      >
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
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 200,
              }}
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <ZoomableGroup
                zoom={position.zoom}
                center={position.coordinates}
                onMoveEnd={handleMoveEnd}
              >
                <Geographies geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={theme.mapBackground}
                        stroke={theme.mapStroke}
                        strokeWidth={0.3}
                        style={{
                          default: {
                            outline: "none",
                          },
                          hover: {
                            outline: "none",
                          },
                          pressed: {
                            outline: "none",
                          },
                        }}
                      />
                    ))
                  }
                </Geographies>

                {locations.map((location, index) => {
                  const isVisited = location.status === "visited";
                  return (
                    <Marker
                      key={index}
                      coordinates={[
                        parseFloat(location.longitude),
                        parseFloat(location.latitude),
                      ]}
                      onMouseEnter={(e) => {
                        const rect = e.target.getBoundingClientRect();
                        setTooltip({
                          location,
                          x: rect.x,
                          y: rect.y,
                        });
                      }}
                      onMouseLeave={() => setTooltip(null)}
                    >
                      <LocationPin
                        color={
                          isVisited
                            ? theme.visitedLocation
                            : theme.plannedLocation
                        }
                      />
                    </Marker>
                  );
                })}
              </ZoomableGroup>
            </ComposableMap>
          )}

          {tooltip && (
            <div
              className="marker-tooltip"
              style={{
                left: tooltip.x,
                top: tooltip.y,
              }}
            >
              <h4>{tooltip.location.name}</h4>
              {tooltip.location.description && (
                <p>{tooltip.location.description}</p>
              )}
              <div className="visit-date">
                {tooltip.location.status === "visited"
                  ? "Visited"
                  : "Planning to visit"}
                : {tooltip.location.visitDate}
              </div>
            </div>
          )}
        </div>

        <div className="controls">
          <button onClick={handleZoomIn}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke={theme.text}
              strokeWidth="3"
            >
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
          <button onClick={handleZoomOut}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke={theme.text}
              strokeWidth="3"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
          </button>
        </div>
      </div>

      <Footer theme={props.theme} />
      <TopButton theme={props.theme} />
    </div>
  );
}

export default Travel;
