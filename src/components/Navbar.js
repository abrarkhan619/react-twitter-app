import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'
import logo from '../images/logo.png'
import John from '../images/JohnDoe.jpeg'

export default function Navbar(props) {
    return (
        <Fragment>
        <nav>
            <ul>
            <img className="logo" src={logo} alt=""/>
                <Link to="/"><li><ion-icon name="home-outline"></ion-icon><span className="hideText">Home</span></li></Link>
                <Link to="/explore"><li><ion-icon name="contract-outline"></ion-icon><span className="hideText">Explore</span></li></Link>
                <Link to="/notifications"><li><ion-icon name="notifications-outline"></ion-icon><span className="hideText">Notifications</span></li></Link>
                <Link to="/messages"><li><ion-icon name="mail-outline"></ion-icon><span className="hideText">Messages</span></li></Link>
                <Link to="/bookmarks"><li><ion-icon name="bookmark-outline"></ion-icon><span className="hideText">Bookmarks</span></li></Link>
                <Link to="/list"><li><ion-icon name="reader-outline"></ion-icon><span className="hideText">List</span></li></Link>
                <Link to="/profile"><li><img className="profPic" src={John} alt={props.avatarAltText}/><span className="hideText">Profile</span></li></Link>
                <Link to="/more"><li><ion-icon name="ellipsis-horizontal-circle-outline"></ion-icon><span className="hideText">More</span></li></Link>
                <Link to="/tweet"><li id="twitter-btn"><span className="hideText">Tweet</span></li></Link>
                {/* <Link to="/"><li id="twitter-btn"><span className="blockText"></span><ion-icon name="reader-outline"></ion-icon></li></Link> */}
            </ul>
        </nav>
        <div className="placeholder"></div>
        </Fragment>
    )
}
