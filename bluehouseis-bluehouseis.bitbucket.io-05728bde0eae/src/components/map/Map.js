import React, { useRef } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { legandItemsData, features } from "./Elements";
import upArrow from "../../images/map/upArrow.svg";
import "../../Styles/Home.css";
import "../../Styles/Home.scss";
import { Element } from "react-scroll";
import { WithTransLate } from "../../translating/index";

const containerStyle = {
  width: "100%",
  height: "450px",
};

const Home = () => {
  const mapRef = useRef(null);
  // eslint-disable-next-line no-unused-vars
  const [position, setPosition] = React.useState({
    lat: 64.15085669896943,
    lng: -21.965248737429826,
  });

  function handleLoad(map) {
    mapRef.current = map;
  }

  const apiKey = "AIzaSyA-LWuIlquldSBDqQWlgr3nJE8h3AMTDCE";
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  // eslint-disable-next-line no-unused-vars
  const [map, setMap] = React.useState(null);
  const [legend, setLegend] = React.useState(true);
  const [weather, setWeather] = React.useState(undefined);

  React.useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Reykjavik&appid=ea5ec3c49c438a83e8c7e8719ff84445&units=metric"
    )
      .then((resp) => resp.json())
      .then((data) => setWeather(data))
      .catch((err) => alert(err.message));
  }, [setWeather]);
  const onUnmount = React.useCallback((map) => setMap(null), [setMap]);
  return (
    <Element name="Map" id="map">
      <div className="map-root">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={13}
            onLoad={handleLoad}
            onUnmount={onUnmount}
          >
            {features.map((feature, index) => (
              <Marker
                key={index}
                icon={
                  position.lat === feature.position.lat
                    ? feature.iconb
                    : feature.icon
                }
                position={feature.position}
              />
            ))}
          </GoogleMap>
        ) : (
          <div></div>
        )}
        <section className="legend">
          {legend ? (
            <div className="legend-button" onClick={() => setLegend(false)}>
              <WithTransLate text="Legend" />
              <img src={upArrow} alt="arrow" />
            </div>
          ) : (
            <div>
              <div className="legend-max-1">
                {legandItemsData.map(({ src, text, position }, i) => (
                  <div
                    className="legand-item clickable"
                    onClick={() => setPosition(position)}
                    key={i}
                  >
                    <img src={src} alt={text} />
                    <p>
                      <WithTransLate text={text} />
                    </p>
                  </div>
                ))}
              </div>
              <div
                className="clicked-legend-button"
                onClick={() => setLegend(true)}
              >
                <WithTransLate text="Legend" />{" "}
                <img src={upArrow} alt="arrow" />
              </div>
            </div>
          )}
        </section>
        {weather && (
          <div className="weather center">
            <div className="center">
              <h2 className="temp">
                {Math.round(weather.main.temp)}
                <WithTransLate text="°C" />
              </h2>
              <img
                className="city-icon"
                src={`https://openweathermap.org/img/wn/${weather.weather[0]["icon"]}@2x.png`}
                alt="map"
              />
              <h4 className="location">
                <WithTransLate text="Reykjavik, Iceland" />
              </h4>
            </div>
          </div>
        )}
      </div>
    </Element>
  );
};

export default Home;
