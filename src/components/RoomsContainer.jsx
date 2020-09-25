import React from "react";
import { withRoomConsumer, RoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";

// function RoomContainer({ context }) {
//   const { loading, sortedRooms, rooms } = context;
//   if (loading) {
//     return <Loading />;
//   }
//   return (
//     <>
//       <RoomsFilter rooms={rooms} />
//       <RoomsList rooms={sortedRooms} />
//     </>
//   );
// }

// export default withRoomConsumer(RoomContainer);
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
                           <RoomsFilter  rooms={rooms} />
                          <RoomsList rooms={sortedRooms} />
                         </div>
                       )
             }
         }
        </RoomConsumer>
        
        </>
    )
}
