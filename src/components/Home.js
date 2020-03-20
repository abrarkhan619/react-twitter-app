import React, { Component } from 'react'
import Createtweet from './Createtweet'
import '../css/Home.css'
import Trends from './Trends'
import Follow from './Follow'
import user1 from '../images/user1.png';
import user2 from '../images/user2.jpg';
import user3 from '../images/user3.png';

export default class Home extends Component {
    render() {
        return (
            <div className="main-container">
                <div className="feed-container">
                    <Createtweet />
                </div>
                <div className="trending-container">
                <input type="text" placeholder="Search twitter" className="search-bar"/>
                <div className="container">
                    <h4 className="headline">Trends for you</h4>
                    <Trends country="Trending in United Kingdom" hashtag="#GalentinesDay" tweetnumber="16.1k Tweets" />
                    <Trends country="Trending in United Kingdom" hashtag="#BurberryShow" tweetnumber="Watch the runway show from 5pm" />
                    <Trends country="Politics Trending" hashtag="UK for 68" tweetnumber="3,985 Tweets" />
                    <Trends country="Politics Trending" hashtag="#ReplaceMovieTitlewithTrump" tweetnumber="16.4k Tweets" />
                    <Trends country="Trending in United Kingdom" hashtag="#GalentinesDay" tweetnumber="16.1k Tweets" />
                </div>  
                <div>
                    <div className="container">
                        <h4 className="headline">Who to follow</h4>
                        <Follow img={user1} name="Tickmill" username="@Tickmill" />
                        <Follow img={user2} name="Your Life In A Song" username="@LifeInASong_UK" />
                        <Follow img={user3} name="Country Routes News" username="@CRoutesNews" />
                        <h5 className="showMore">Show More</h5>
                        </div>
                        <div className="conditions">
                            <p>Terms</p>
                            <p>Privacy policy</p>
                            <p>Cookies</p>
                            <p>Ads info</p>
                            <p>More</p>
                        </div>
                            <div className="copyright">
                                <p>© 2020 Twitter, Inc</p>
                            </div>
                        </div>
                    </div> 
                </div>
            
        )
    }
}

