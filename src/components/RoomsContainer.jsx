import React from 'react';
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";
import {withRoomConsumer} from "../context";
import Loading from './Loading';

function RoomContainer({context}) {
const {loading, sortedRooms, rooms} = context;

  if(loading) {  
      return <Loading />  
       }
         return(
           <div> HEllo From Rooms 
              <RoomsFilter  rooms={rooms} />
              <RoomsList rooms={sortedRooms} />
           </div> 
           )
}

export default withRoomConsumer(RoomContainer)
// export default function RoomsContainer() {
//     return (<> 
//         <RoomConsumer>
//          {
//              (value) => {
//                  //console.log("Value", value)
//                  const {loading, sortedRooms, rooms} = value;
//                  if(loading){
//                      return <Loading />
//                  }
//                  return (<div>
//                  HEllo From Rooms <div class="container">
//                      <RoomsFilter  rooms={rooms} />
//                      <RoomsList rooms={sortedRooms} />
//                  </div>
//              </div>
//                  )
//              }
//          }
//         </RoomConsumer>
        
//         </>
//     )
// }
