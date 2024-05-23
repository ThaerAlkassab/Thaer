const express = require("express");
const app = express();
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
const cors = require("cors");
const dateFormat = (...args) =>
  import("dateFormat").then(({ default: dateFormat }) => dateFormat(...args));

var bodyParser = require("body-parser");
var availableroomsArray = [];
var arrayAll = [];
var rooms = [];
var roomIds = [9748, 7264, 59038, 110158, 42714];
var obj = {};
const start = async function () {
  // GET THE ROOMS
  const body = { propId: "3578", roomId: true };
  const response = await fetch("https://api.beds24.com/json/getDescriptions", {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  for (let i in roomIds) {
    arrayAll.push(data["properties"]["rooms"][roomIds[i]]);
    app.get("/api/rooms", (req, res) => {
      res.json({ rooms: arrayAll });
    });
  }

  var from = await dateFormat(Date.now(), "yyyymmdd");
  console.log("aa" + from);
  var to = await dateFormat(
    new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    "yyyymmdd"
  );
  console.log("aa" + to);

  //GET ROOM'S AVAILABILITY
  for (let i in roomIds) {
    const AvailBody = {
      authentication: {
        apiKey: "BookingpageBlueHouse",
        propKey: "BB3578IceZenoLand",
      },
      from: from, // datenow w format
      to: to,
      roomId: roomIds[i],
    };
    const AvailResponse = await fetch(
      "https://api.beds24.com/json/getRoomDates",
      {
        method: "post",
        body: JSON.stringify(AvailBody),
        headers: { "Content-Type": "application/json" },
      }
    );
    var indicateur = roomIds[i]; //num el room besh yji lenna  w baad nabaathouh lel json besh ymarki nharou
    const Availabilitydata = await AvailResponse.json();
    //   availableroomsArray[roomIds[i]] = Availabilitydata;
    obj[roomIds[i]] = Availabilitydata;
  }
  availableroomsArray.push(obj);

  app.get("/api/availability", (req, res) => {
    res.json({ availability: availableroomsArray });
  });
};
const port = 3001;
app.use(express.json());
app.use(cors({ origin: "*" }));
app.listen(port, () => console.log("running on 3001 ..."));

start();
