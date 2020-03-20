import React, { Component } from 'react'
import '../css/Home.css'
import Trends from './Trends'
import Follow from './Follow'

export default class Explore extends Component {
    render() {
        return (
                // <div className="main-container">
                // <div className="feed-container">
                //     <Createtweet />
                // </div>
                // <div className="trending-container">
                <div>
                <div className="container">
                <p>SOME TEXT IN HERE</p>
                    <h4 className="headline">Trends for you</h4>
                    <Trends country="Trending in United Kingdom" hashtag="#GalentinesDay" tweetnumber="16.1k Tweets" />
                    <Trends country="Trending in United Kingdom" hashtag="#GalentinesDay" tweetnumber="16.1k Tweets" />
                    <Trends country="Trending in United Kingdom" hashtag="#GalentinesDay" tweetnumber="16.1k Tweets" />
                    <Trends country="Trending in United Kingdom" hashtag="#GalentinesDay" tweetnumber="16.1k Tweets" />
                    <Trends country="Trending in United Kingdom" hashtag="#GalentinesDay" tweetnumber="16.1k Tweets" />
                </div>
                <div>
                    <Follow />
                </div>
                </div>

         
        )
    }
}
