import React from 'react'
import Card from '../../Components/Card'
import Navbar from '../Navbar/Navbar';
import "./About.css";

function About() {
    return (
        <div>
            <Navbar title="about" />
            <div className="container-fluid">
                <div className="aboutUs">
                    <center><h1>Buy or Sell Games Online</h1></center>
                    <center><h3>"Gamezone offers you a brand new, ultra-convenient way to buy and sell games and gaming consoles online. We specialize in trading new and pre-owned games, covering all current consoles (PS4, PS3, Xbox One, Xbox 360 and PS Vita). You can buy all the latest games such as Assassin's Creed, Fifa 17, Uncharted, God of War, GTA and Call of Duty at the best prices available online"</h3></center>
                </div>
            </div>
        </div>
    )
}

export default About