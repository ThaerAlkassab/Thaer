import React, { useState, useEffect } from "react";
import "./css/Rooms.css";
import { Paper } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import { WithTransLate } from "./translating/index";

function Rooms({ handleClose }) {
  const rooms = [
    {
      id: 1,
      image:
        "http://www.hotelduforum.com/wp-content/uploads/2018/09/YET_5365-ok.jpg",
      name: "Double/Twin",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 2,
      image:
        "https://www.hotellavilla.it/wp-content/uploads/2018/12/web-BU6A3127-1980.jpg",
      name: "Triple / Quadruple",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 3,
      image:
        "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/alexander-design-contemporary-family-room-1555952765.jpg",
      name: "Family Room",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
    {
      id: 4,
      image:
        "https://d1bvpoagx8hqbg.cloudfront.net/originals/share-flat-4-private-rooms-apartment-refurbished-downtown-center-nice-2-min-tram-train-station-71ab4e0ccd5cbdfd9701caf48720a69f.jpg",
      name: "Apartments",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    },
  ];
  const [slide, setSlide] = useState(rooms);
  const [index, setIndex] = useState(0);
  const [room, setRooms] = useState(true);
  const [houses, setHouses] = useState(false);
  const [surrounding, setSurrounding] = useState(false);
  
  useEffect(() => {
    const lastIndex = slide.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > slide.length - 1) {
      setIndex(0);
    }
  }, [index, slide]);

  useEffect(() => {
    let Slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => clearInterval(Slider);
  }, [index]);
  let activeRoom;
  let activeHouse;
  let activeSurr;
  const handleRoom = () => {
    setRooms(true);
    setHouses(false);
    setSurrounding(false);
    if (room) {
      activeRoom = "active";
    }
    return activeRoom;
  };

  const handleHouse = () => {
    setHouses(true);
    setRooms(false);
    setSurrounding(false);
  };
  const handleSurr = () => {
    setSurrounding(true);
    setRooms(false);
    setHouses(false);
  };
  if (room) {
    activeRoom = "active";
  }
  if (houses) {
    activeHouse = "active";
  }
  if (surrounding) {
    activeSurr = "active";
  }

  return (
    <Paper className="modal-galery">
      <nav className="header-rooms">
        <div className="nav-center">
          <button className={activeRoom} type="button" onClick={handleRoom}>
            {" "}
            <h2>
              <WithTransLate text="Rooms" />
            </h2>
          </button>
          <button className={activeHouse} type="button" onClick={handleHouse}>
            {" "}
            <h2>
              <WithTransLate text="Houses" />
            </h2>
          </button>
          <button className={activeSurr} type="button" onClick={handleSurr}>
            {" "}
            <h2>
              <WithTransLate text="Surroundings" />
            </h2>
          </button>
        </div>
        <div className="nav-button">
          <button type="button" onClick={handleClose}>
            <CloseIcon />
          </button>
        </div>
      </nav>
      {room ? (
        <div className="main">
          {slide.map((item, slideIndex) => {
            const { id, image, name } = item;
            let position = "nextSlide slide";
            if (slideIndex === index) {
              position = "activeSlide slide";
            }
            if (
              slideIndex === index - 1 ||
              (index === 0 && slideIndex === slide.length - 1)
            ) {
              position = "lastSlide slide";
            }
            return (
              <div className={position} key={id}>
                <img className="slide-img" src={image} alt={name} />
              </div>
            );
          })}
          <button
            onClick={() => {
              setIndex(index - 1);
            }}
            className="prev"
          >
            <NavigateBeforeIcon />
          </button>
          <button
            onClick={() => {
              setIndex(index + 1);
            }}
            className="next"
          >
            <NavigateNextIcon />
          </button>
          <div className="slides-text">
            {slide.map((item, itemindex) => {
              const { name, id } = item;
              let activePosition;
              if (itemindex === index) {
                activePosition = "activeText";
              } else {
                activePosition = "";
              }
              console.log(activePosition);

              return (
                <button
                  type="button"
                  onClick={() => {
                    setIndex(itemindex);
                  }}
                  className={activePosition}
                >
                  <h3 key={id}>
                    <WithTransLate text={name} />
                  </h3>
                </button>
              );
            })}
          </div>

          <div className="room__description">
            {slide.map((item, slideIndex) => {
              const { id, description } = item;
              let position = "nextSlide text-origin";
              if (slideIndex === index) {
                position = "activeSlide text-origin";
              }
              if (
                slideIndex === index - 1 ||
                (index === 0 && slideIndex === slide.length - 1)
              ) {
                position = "lastSlide  text-origin";
              }
              return (
                <div className={position} key={id}>
                  <p>
                    <WithTransLate text={description} />
                  </p>
                </div>
              );
            })}
          </div>
          <div className="slider-button">
            <button type="button">
              <WithTransLate text="Book Now" />
            </button>
          </div>
        </div>
      ) : null}
    </Paper>
  );
}

export default Rooms;
