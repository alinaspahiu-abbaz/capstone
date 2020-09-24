import React from 'react';
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import {RoomConsumer} from "../context";
import Loading from './Loading';

export default function RoomsContainer() {
    return (<> 
        <RoomConsumer>
         {
             (value) => {
                 //console.log("Value", value)
                 const {loading, sortedRooms, rooms} = value;
                 if(loading){
                     return <Loading />
                 }
                 return (<div>
                 HEllo From Rooms <div class="container">
                     <RoomsFilter  rooms={rooms} />
                     <RoomsList rooms={sortedRooms} />
                 </div>
             </div>
                 )
             }
         }
        </RoomConsumer>
        
        </>
    )
}
