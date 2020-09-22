import React, {Component} from "react"
import Title from "./Title"
import {FaCocktail, FaHiking, FaShuttleVan} from "react-icons/fa"
import {GiSodaCan} from "react-icons/gi"

export default class Services extends Component {
    state={
        services: [
            {
                icon: <FaCocktail className="nav-icon-services"/>,
                title: "Free coctails",
                info: "Lorem  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                
            },
            {
                icon: <FaHiking className="nav-icon"/>,
                title: "Endless Hiking",
                info: "Lorem  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                
            },
            {
                icon: <FaShuttleVan className="nav-icon"/>,
                title: "Free Shuttle",
                info: "Lorem  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                
            },
            {
                icon: <GiSodaCan className="nav-icon" />,
                title: "Free Drinks",
                info: "Lorem  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
                
            },
        ]
    }
    render() {
        return(
            <section className="services">
                <Title title="services" /> 
                   <div className="services-center">
                      {this.state.services.map((item, index) => {
                         return <article key={index} className="services">
                                    <span> {item.icon}</span>
                                       <h6>{item.title}</h6>
                                        <p>{item.info}</p>
                                </article>
                    })}
                </div>
            </section>
        )
    }
}