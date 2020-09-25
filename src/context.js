import React, {Component} from "react"
import items from "./data";

const RoomContext = React.createContext()

 class RoomProvider extends Component {
    state={
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }
    
    componentDidMount(){
        let rooms = this.formatData(items)
        let featuredRooms = rooms.filter(room => room.featured === true);
        let maxPrice = Math.max(...rooms.map( item => item.price ));
        let maxSize = Math.max(...rooms.map( item => item.size ));
        this.setState({
              rooms,  
              featuredRooms, 
              sortedRooms: rooms, 
              loading: false,
              price: maxPrice,
              maxPrice,
              maxSize,
        })
    }

    formatData(items) {
        let tempItems = items.map(item => {
          let id = item.sys.id;
          let images = item.fields.images.map(image => image.fields.file.url);
    
          let room = { ...item.fields, images, id };
          return room;
        });
        return tempItems;
      }
    
    // getRoom function
    getRoom = (slug) => {
       let tempRooms = [... this.state.rooms]
       const room = tempRooms.find(room => room.slug === slug)
       return room;
    }

    //
    handleChange = (event) =>{
        const target = event.target;
        const value = event.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        }, this.filterRooms)
  
        // console.log(`this is type: ${type}, this is name: ${name}, this is value: ${value} .`);
    }

    // filterRooms function:
    filterRooms = () =>{
        //console.log('hello')
        let{ rooms, type, capacity, price, minSize, maxSize, breakfast, pets} = this.state;

        let tempRooms = [...rooms]; // all the rooms        
        capacity = parseInt(capacity); //transform value from string to int:

        //---- filter by type:
        if(type !== 'all'){
            tempRooms = tempRooms.filter(room => room.type === type)
        }

        //---- filter by capacity:
        if(capacity !==1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }

        this.setState({
            sortedRooms: tempRooms
        })
    }

    render(){
        return (
            <RoomContext.Provider value={{
                   ...this.state, 
                      getRoom: this.getRoom, 
                      handleChange: this.handleChange 
                      }}>
                         {this.props.children}
            </RoomContext.Provider>
        )
    }
}

const RoomConsumer = RoomContext.Consumer;



export {RoomProvider, RoomConsumer, RoomContext}

// higher order component
export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer >
                  { value => <Component {...props} contex={value} /> }
               </RoomConsumer>
    }
}