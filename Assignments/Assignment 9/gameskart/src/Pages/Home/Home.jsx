import React from 'react'
import Card from '../../Components/Card';
import Navbar from '../Navbar/Navbar';
import "./Home.css";

function Home() {
    const imageUrls = [
        {
            id: 1,
            url: "Grand-Theft-Auto-V-PS3-300x343.jpg",
            title: "GRAND THEFT AUTO V PS3 ($10.99)",
        },
        {
            id: 2,
            url: "PS4-Mirros-Edge-Catalyst-300x343.jpg",
            title: "MIRRORS EDGE EXTENDED PS4 ($9.99)"
        },
        {
            id: 3,
            url: "PS4-Call-Of-Duty-WWII-300x343.jpg",
            title: "CALL OF DUTY WW2 PS4 ($10.99)"
        },
        {
            id: 4,
            url: "God-of-War-III-PS3-300x343.jpg",
            title: "GOD OF WAR 3 EXTENDED PS3 ($4.99)"
        },
        {
            id: 5,
            url: "Watch-dogs-ps3.jpg",
            title: "WATCH DOGS-EXTENDED PS3 ($5.99)"
        },
        {
            id: 6,
            url: "inFAMOUS-Second-Son-PlayStation-4-Cover-Art-300x343.jpg",
            title: "INFAMOUS SECOND SON PS4 ($9.99)"
        },
    ];
    return (
        <div>
            <Navbar title="home" />
            <div className="game-title-header">
                GameShop
            </div>

            <div className="detroit" style={{ backgroundColor: 'url("images/Detroit-Become-Human.jpg")' }}></div>
            <br /><br />
            <div className="games-title">
                <h1>TOP SELLERS</h1>
            </div>
            <div className="games-container">
                {imageUrls.map(imageUrl => (<Card
                    key={imageUrl.id}
                    src={imageUrl.url}
                    title={imageUrl.title}
                />))}
            </div>
            <div>
                <br />
                <div style={{ textAlign: 'center' }}>
                    <h4>Upcoming Halloween Games</h4>
                    {/* <hr style={{ width: '50%' }} /> */}
                </div>

                <table id="customers">
                    <tr>
                        <th>Name</th>
                        <th>Platform</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>Resident Evil 4 Remake</td>
                        <td>PS5</td>
                        <td>$39.9</td>
                        <td><button className="add" style={{ padding: '5px' }}>ADD TO CART</button></td>
                    </tr>
                    <tr>
                        <td>The Evil Within 2</td>
                        <td>PS4</td>
                        <td>$59.9</td>
                        <td><button className="add" style={{ padding: '5px' }}>ADD TO CART</button></td>
                    </tr>
                    <tr>
                        <td>Soma</td>
                        <td>PS4</td>
                        <td>$29.9</td>
                        <td><button className="add" style={{ padding: '5px' }}>ADD TO CART</button></td>
                    </tr>
                    <tr>
                        <td>The Quarry</td>
                        <td>PS5</td>
                        <td>$39.9</td>
                        <td><button className="add" style={{ padding: '5px' }}>ADD TO CART</button></td>
                    </tr>
                </table>
                <br />

                <div style={{ textAlign: 'center' }}>
                    <a href="#">Submit queries</a>
                </div>

                <br />

            </div>
        </div>
    )
}

export default Home