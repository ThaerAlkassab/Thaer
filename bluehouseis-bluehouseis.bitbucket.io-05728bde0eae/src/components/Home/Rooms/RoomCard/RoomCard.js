import { makeStyles, Typography, withStyles } from "@material-ui/core";
import Netflix from "../../../images/Netflix.png";
import QueenBed from "../../../images/QueenBed.png";
import TwinBed from "../../../images/TwinBeds.png";
import Kitchen from "../../../images/Kitchen.png";
import Dinning from "../../../images/Dinning.png";
import Cereal from "../../../images/Cereal.png";
import Private from "../../../images/Private_Bathroom.png";
import SharedBathroom from "../../../images/SharedBathroom.png";
import SelfService from "../../../images/SelfService.png";
import React, { useState, useEffect } from "react";
import Selector from "../Selector/Selector";
import "../Rooms/Rooms.css";
import { Link } from "react-router-dom";
import { setQuantity } from "../../../../redux/userInfo/userInfo.action";
import { connect } from "react-redux";
import {
  setBookingPrice,
  setRoomIndex,
  setRoomName,
} from "../../../../redux/booking/booking.action";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "1155px",
    display: "flex",
    marginBottom: "55px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "-100px",
      marginBottom: "100px",
    },
  },

  img: {
    width: "341px",
    height: "285px",
    padding: "37px 40px",
    boxSizing: "content-box",
    [theme.breakpoints.down("xs")]: {
      width: "291px",
      height: "243px",
    },
  },

  icons: {
    height: "50px",
    justifySelf: "flex-start",
    [theme.breakpoints.down("xs")]: {
      height: "40px",
    },
  },
  rooms: {
    width: "1100px",
    height: "359px",
    display: "flex",
    justifyContent: "space-between",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      alignItems: "center",
      width: "339px",
      height: "851px",
    },
  },
  Info: {
    display: "flex",
    width: "385px",
    justifyContent: "space-between",
    alignItems: " ",
    height: "76px",
    marginBottom: "-10px",

    [theme.breakpoints.down("xs")]: {
      width: "auto",
      marginTop: "30px",
      marginBottom: "10px",
    },
  },
  IconsInfo: {
    paddingTop: "37px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "265px",
    marginLeft: "-50px",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0",
      justifyContent: "center",
    },
  },
  data: {
    textAlign: "center",
    fontSize: "12px",
    fontWeight: "300",
    color: "#14202B",
    lineHeight: "16px",
    width: "80px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "11px",
    },
  },
  list: {
    [theme.breakpoints.down("xs")]: {
      marginTop: "-60px",
    },
  },
  Info_list: {
    fontWeight: "300 !important",
    fontSize: "18px",
    lineHeight: "30px",
    color: "#14202B",
    marginLeft: "20px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
      marginLeft: "40px",
    },
  },
  price: {
    fontSize: "48px",
    lineHeight: "50px",
    marginBottom: "-5px",
    letterSpacing: ".1em",
    marginTop: "50px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "40px",
    },
  },
  nights: {
    fontSize: "14px",
    lineHeight: "30px",
    fontWeight: "300",
    color: "#14202B",
    margin: "0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "12px",
    },
  },
  Cancellation: {
    fontWeight: "300 !important",
    fontSize: "18px",
    lineHeight: "30px",
    color: "#14202B",
    margin: "0 0 5px 0",
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
  },
  priceContainer: {
    textAlign: "center",
  },
  bookingContanier: {
    width: "275px",
    marginRight: "15px",
    marginLeft: "-15px",
    [theme.breakpoints.down("xs")]: {
      margin: "-30px 0 30px 0",
    },
  },
  bookingButton: {
    height: "40px",
    width: "112px",
    borderRadius: "0",
    backgroundColor: "#073762",
    color: "white",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "-19px",
  },
  mobileTitle: {
    fontFamily: "Oblik",
    fontSize: "18px",
    lineHeight: "50px",
    color: "#14202B",
    fontWeight: "700",
    opacity: ".9",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  notAvailable: {
    backgroundColor: "#F8DEDC",
    color: "#ED6B60",
    border: "none",
    width: "126px",
    fontWeight: "700",
    height: "30px",
    fontSize: "12px",
    lineHeight: "12px",
    borderRadius: "6px",
    marginTop: "60px",
    [theme.breakpoints.down("xs")]: {
      marginTop: "20px",
    },
  },
  ENQUIRE: {
    backgroundColor: "#F0F8EF",
    color: "#60B158",
    border: "none",
    width: "81px",
    height: "33px",
    fontFamily: "Inter",
    fontSize: "12px",
    borderRadius: "6px",
    marginTop: "20px",
    cursor: "pointer",
    lineHeight: "15px",
  },
}));
const TextTypography = withStyles({
  root: {
    fontSize: "24px",
    fontWeight: "bold",
    lineHeight: "50px",
    fontFamily: "Oblik",
    color: "#14202B",
    width: "50px",
  },
})(Typography);

const RoomCard = ({
  room,
  price,
  picture,
  dayDifference,
  avail,
  info,
  icons,
  setBookingPrice,
  setRoomIndex,
  setRoomName,
  roomNum,
  setQuantity,
  quantity,
}) => {
  const [prices, setPrices] = useState("1");
  const [guests, setGuests] = useState("0");
  const [calPrice, setCalPrice] = useState();

  const handleQuantityChange = (quan) => {
    setQuantity(quan);
  };

  const handleGuestsChange = (guest) => {
    setGuests(guest);
  };

  const classes = useStyles();
  let name = room.name
    .split(" ")
    .slice(1)
    .filter((e) => e !== "-")
    .join(" ")
    .toUpperCase();

  useEffect(() => {
    if (quantity < guests) {
      setCalPrice(price * quantity + 20 * (guests - quantity));
    } else {
      setCalPrice(price * quantity);
    }
  }, [guests, quantity, price]);

  useEffect(() => {
    let round = Math.round(calPrice * 100) / 100;
    setPrices(round);
  }, [quantity, guests, calPrice]);

  const handleClick = () => {
    setBookingPrice(prices);
    setRoomName(name);
    setRoomIndex(roomNum);
  };
  return (
    <div className={classes.container}>
      <div className="sidebar">
        <TextTypography variant="h6">{name}</TextTypography>
      </div>
      <p className={classes.mobileTitle}>{name}</p>
      <div className={classes.rooms}>
        <img
          className={picture && classes.img}
          alt="complex"
          src={picture && picture}
        />
        <div className={classes.IconsInfo}>
          <div className={classes.list}>
            {info &&
              info.map((data, index) => (
                <li className={classes.Info_list} key={index}>
                  {data}
                </li>
              ))}
          </div>
          <div className={classes.Info}>
            {icons &&
              icons.map((data, index) => (
                <div key={index}>
                  <div className="items">
                    {data === "Netflix TV" ? (
                      <img src={Netflix} alt="" className={classes.icons} />
                    ) : data === "Queen Sized Bed" ||
                      data === "King/Twin Sized Bed" ||
                      data === "King Sized Bed + Sofa Bed" ||
                      data === "2 Bedrooms + 1 Sofa Bed" ||
                      data === "3 Bedrooms + 3 Sofa Beds" ? (
                      <img src={QueenBed} alt="" className={classes.icons} />
                    ) : data === "Shared Bathroom" ? (
                      <img
                        src={SharedBathroom}
                        alt=""
                        className={classes.icons}
                      />
                    ) : data === "Self Service Continental Breakfast" ? (
                      <img src={SelfService} alt="" className={classes.icons} />
                    ) : data === "Queen/Twin Beds" ? (
                      <img src={TwinBed} alt="" className={classes.icons} />
                    ) : data === "Cereal Breakfast" ? (
                      <img src={Cereal} alt="" className={classes.icons} />
                    ) : data === "Private kitchen" ||
                      data === "Private kitchenette" ? (
                      <img src={Kitchen} alt="" className={classes.icons} />
                    ) : data === "Private dining area" ? (
                      <img src={Dinning} alt="" className={classes.icons} />
                    ) : (
                      <img src={Private} alt="" className={classes.icons} />
                    )}
                  </div>
                  <p className={classes.data}>{data}</p>
                </div>
              ))}
          </div>
        </div>
        <div className={classes.bookingContanier}>
          <div className={classes.priceContainer}>
            <h2 className={classes.price}>€{prices ? prices : price}</h2>
            <h6 className={classes.nights}>
              {dayDifference < 2
                ? "per night"
                : "for " + dayDifference + " nights"}
            </h6>
            <h5 className={classes.Cancellation}>14 day Cancellation</h5>
          </div>
          <div>
            <div className="selector">
              {avail !== "0" && (
                <>
                  <div className="selector-item">
                    <Selector
                      maxQuantity={avail}
                      quantity={quantity}
                      handleQuantityChange={handleQuantityChange}
                      name="Quantity"
                    />
                  </div>
                  <div className="selector-item">
                    <Selector
                      maxQuantity={room.maxPeople}
                      quantity={guests}
                      handleQuantityChange={handleGuestsChange}
                      name="Guests"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
          {avail === "0" ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <button className={classes.notAvailable} href="">
                NOT AVAILABLE{" "}
              </button>
              <Link to="/enquire">
                <button className={classes.ENQUIRE}>ENQUIRE </button>
              </Link>
            </div>
          ) : prices && quantity > 0 && guests > 0 ? (
            <Link className="button" to="/book">
              <button onClick={handleClick} className={classes.bookingButton}>
                {" "}
                BOOK{" "}
              </button>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  setBookingPrice: (p) => dispatch(setBookingPrice(p)),
  setRoomName: (roomName) => dispatch(setRoomName(roomName)),
  setRoomIndex: (i) => dispatch(setRoomIndex(i)),
  setQuantity: (q) => dispatch(setQuantity(q)),
});

const mapStateToProps = (state) => ({
  quantity: state.quantity.quantity,
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomCard);
