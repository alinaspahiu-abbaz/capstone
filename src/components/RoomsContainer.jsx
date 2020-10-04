// import React, {Component} from "react";
// import { RoomConsumer } from "../context";
// import Loading from "./Loading";
// import RoomsFilter from "./RoomsFilter";
// import RoomsList from "./RoomsList";
// import {Container, Row, Col, Button} from "react-bootstrap"



// export default class RoomsContainer extends Component {
//     state={
//         rooms: [],
        
//     }
//     render(){
//     return (<> 
//     <Container>
//         <div>
//             {this.state.rooms.map( room =>
//             <RoomsList />
//                 // <Row className="">
//                 //     <Col sm={2}>{room.name}</Col>
//                 // </Row>
//                 )
//             }
//         </div>
//     </Container>


        
        
//         </>
//     )
// }
// componentDidMount = async () => {
//     const roomsResp = await fetch("http://localhost:3003/rooms")
//     const rooms = await roomsResp.json()
//     this.setState({
//         rooms: rooms
//     })
//     console.log(rooms)
// }
// }

import React from "react";
import { withRoomConsumer, RoomConsumer } from "../context";
import Loading from "./Loading";
import RoomsFilter from "./RoomsFilter";
import RoomsList from "./RoomsList";


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
