import React from 'react'
import user1 from '../images/user1.png';
import user2 from '../images/user2.jpg';
import user3 from '../images/user3.png';
import '../css/Follow.css'

export default function Follow(props) {
    return (
        <div className="wrapper">
            <div className="followContainer">
                <img className="profileImage" src={props.img} alt="profilepic"/>
                <div className="usernameSection">
                <h4 className="twitterName">{props.name}</h4>
                <h4 className="username">{props.username}</h4>
                </div>
                <button className="follow">Follow</button>
            </div>
        </div>
    )
    
}
