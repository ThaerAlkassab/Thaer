import React, { useState } from "react";
import "./Rooms.css";
import { useEffect } from "react";
import axios from "axios";
import RoomCard from "../RoomCard/RoomCard";
import { connect } from 'react-redux';

const Rooms = ({checkIn,checkOut,dayDifference,clicked}) => {
    const [rooms, setRooms] = useState([])
    const [roomsIDs, setRoomsIDs] = useState([])
    const [priceFinal, setPriceFinal]  = useState([]); 
    const [pictures, setPictures]  = useState([]); 
    const [availabilities, setAvailabilities] = useState("");
    const [roomsInfo, setRoomsInfo] = useState({});
    const [info, setInfo] = useState({});
    const [icons, setIcons] = useState({});
    const [newRooms, setNewRooms] = useState([]);

    useEffect(() => {
        fetch("AvailableRooms.json")
        .then(res => res.json())
        .then(data => setRoomsInfo(data.rooms))
        .catch((error) => {
        console.log(error); });
    }, [clicked])
    useEffect(() => {
        axios.post('/json/getProperties', {
            "authentication": {
                "apiKey": "Pricegenietesthfggi9zilgiugkjgkhg9h464654"
            }
        }).then((response) => {
            setRooms(response.data.getProperties[0].roomTypes)
        }).catch((error) => {
            console.log(error);
        });
        let infoList = [] //info_list
        let iconsList = [] //icons_list
        for(let i=0; i<roomsInfo.length; i++){
            let list1 = roomsInfo[i].info_list
            let list2 = roomsInfo[i].icons_list
            infoList.push(list1)
            iconsList.push(list2)
        }
        setInfo(infoList)
        setIcons(iconsList)
    }, [clicked,roomsInfo])
    useEffect(() => {
        let Ids=[]
        for (let i=0; i<rooms.length; i++) 
            {
            let roomsId = rooms[i].roomId
            Ids.push(roomsId)
            }
        setRoomsIDs(Ids)
    }, [rooms])
    useEffect(() => {
        axios.post('/json/getDescriptions', {
                "propId": "3578",
                "roomId": true
            }
        ).then((response) => {
            let pics = []
            for(let i = 0 ; i <roomsIDs.length; i++){
                let pic = response.data.properties.rooms[roomsIDs[i]].pictures[0]
                pics.push(pic.url)
            }
            setPictures(pics)
        }).catch((error) => {
            console.log(error);
        });
    }, [clicked,roomsIDs])
    useEffect(() => {
       
        axios.post('/json/getAvailabilities', {
            "checkIn": `${checkIn}`,
            "checkOut": `${checkOut}`,
            "propId": "3578",
            "numAdult": "1", //guests
            "ignoreAvail": true,
            "roomIds": roomsIDs
        }).then(response => {
        for (let i=0; i<= roomsIDs.length; i++){
            let price = response.data[roomsIDs[i]].price 
            let newPrice = Math.round(price * 100) / 100 
            setPriceFinal(prevArray => [...prevArray, newPrice])
            let avail = response.data[roomsIDs[i]].roomsavail 
            setAvailabilities(prevArray => [...prevArray, avail])
        }
        }).catch((error) => {
            console.log(error);
            });
    }, [ checkIn, checkOut, clicked,roomsIDs,])
    
    useEffect(() => {
        for(var i=0,len=rooms.length;i<len;i++){
            rooms[i].price = priceFinal[i];
        }
        for (let k=0 ; k< rooms.length; k++){
            rooms[k].picture = pictures[k]      
        }
        for (let k=0 ; k< rooms.length; k++){
            rooms[k].avail = availabilities[k]  
        }
        for (let k=0 ; k< rooms.length; k++){
            rooms[k].info = info[k]  
        }
        for (let k=0 ; k< rooms.length; k++){
            rooms[k].icons = icons[k]  
        }
    }, [ rooms, priceFinal, pictures,info, clicked,availabilities, icons, checkIn, checkOut]) 
    useEffect(() => {
        let slicedRooms = rooms.slice(0, size)
        setNewRooms(slicedRooms)
    }, [ rooms, checkIn, checkOut,newRooms.length ]) 
  

    const size = 7
    
    return (
        <>
            { newRooms.length>6 && newRooms.map( (room, index) =>
                <RoomCard 
                    room={room} 
                    price={room.price} 
                    picture = {room.picture}
                    key={index}
                    dayDifference={dayDifference}
                    avail={room.avail}
                    names={roomsInfo[0].name}
                    info={info[index]}
                    icons={icons[index]}
                    roomNum={index}
                /> ) 
            }
        </>
    );
};

const mapStateToProps = state => ({
    checkIn: state.checkIn.firstDay,
    clicked: state.clicked.clicked,
    dayDifference: state.dayDifference.dayDifference,
    checkOut: state.checkOut.secondDay
  });
  
export default connect( mapStateToProps)(Rooms);