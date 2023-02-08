import React from "react";
import "./Home.css"
import {Link} from "react-router-dom"
import zurag from "../assets/channels4_profile.jpg"
const Home = () => {
    return (
        <div className="button">
           <div className="buttons">
            <div className="button-1">
                <button className="button-1-1"><Link to={"/red"}>Read more</Link></button>
                <button className="button-1-2"><img src={zurag} alt="/"/></button>
            </div>
            <div className="button-1">
                <button className="button-1-3"><Link to={"/green"}>Read more</Link></button>
                <button className="button-1-4"><Link to={"/blue"}>Read more</Link></button>
            </div>
           </div>
        </div>
    ) 
};
export default Home