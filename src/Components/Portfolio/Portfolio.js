import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import textFrontDev from '../../assets/text-front-dev.png';
import iconLink from '../../assets/icon-link.png';
import projBirdsongs from '../../assets/proj-birdsongs.png';
import projPeggy from '../../assets/proj-peggy.png';
import projOutthere from '../../assets/proj-outthere.png';
import projReader from '../../assets/proj-reader.png';
import projRotten from '../../assets/proj-rotten.png';
import projStreeteats from '../../assets/proj-streeteats.png';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Portfolio.css';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  600: { items: 1 },
  1000: { items: 4 },
};

const items = [
  <div className="ex-item">
    <img className="ex-img" src={projBirdsongs} onDragStart={handleDragStart} role="presentation"/>
    <div className="ex-text-container">
      <p className="ex-header">Birdsongs</p>
      <p className="ex-subheader">React, router, cypress, webpack</p>
      <p className="ex-description">Birdsongs is a birdcall library designed as an ear-training app for beginner birdwatchers. Inspired by mornings spent in Chicago’s Humboldt Park, Birdsongs utilizes the vast Xeno-Canto API to help familiarize naturalists with the sounds of their own backyard.</p>
      <div className="proj-links-container">
        <img className="link-icon" src={iconLink}/>
        <Link to=""  className="proj-link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>Deployed Site</Link>
        <img className="link-icon" src={iconLink}/>
        <Link to=""  className="proj-link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>GitHub</Link>
      </div>
    </div>
  </div>,
  <div className="ex-item">
    <img className="ex-img" src={projPeggy} onDragStart={handleDragStart} role="presentation"/>
    <div className="ex-text-container">
      <p className="ex-header">Who is Peggy Simmons?</p>
      <p className="ex-subheader">React, router, SCSS</p>
      <p className="ex-description">This web-based application is the home of "Who is Peggy Simmons?", an investigative comedy podcast still in development. Designed to mimic the look and feel of a detective's evidence board and filled with hidden features and microinteractions, this application brings Peggy's mystery to life.</p>
      <div className="proj-links-container">
        <img className="link-icon" src={iconLink}/>
        <Link to=""  className="proj-link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>Deployed Site</Link>
        <img className="link-icon" src={iconLink}/>
        <Link to=""  className="link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>GitHub</Link>
      </div>
    </div>
  </div>,
  <div className="ex-item">
    <img className="ex-img" src={projOutthere} onDragStart={handleDragStart} role="presentation"/>
    <div className="ex-text-container">
      <p className="ex-header">Out There</p>
      <p className="ex-subheader">Javascript, html, css, mocha & chai, webpack</p>
      <p className="ex-description">Designed to fill the needs of a fictional travel agency, Out There helps travelers make reservations and track their trips over time. Featuring user authentication, travelers can log in to see their unique details, see cost estimates for their next dream trip, and keep tabs on any upcoming and all past journeys.</p>
      <div className="proj-links-container">
        <img className="link-icon" src={iconLink}/>
        <Link to=""  className="link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>GitHub</Link>
      </div>
    </div>
  </div>,
  <div className="ex-item">
    <img className="ex-img" src={projReader} onDragStart={handleDragStart} role="presentation"/>
    <div className="ex-text-container">
      <p className="ex-header">Reader</p>
      <p className="ex-subheader">React, router, css</p>
      <p className="ex-description">This application finds the top news stories from all over the web and aggregates them into one, easy-to-parse interface. Leveraging the News API, Reader updates in real time to bring you the day's most important news, allowing readers to search and save stories for later reading.</p>
      <div className="proj-links-container">
        <img className="link-icon" src={iconLink}/>
        <Link to=""  className="link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>GitHub</Link>
      </div>
    </div>
  </div>,
  <div className="ex-item">
    <img className="ex-img" src={projRotten} onDragStart={handleDragStart} role="presentation"/>
    <div className="ex-text-container">
      <p className="ex-header">Rotten Tomatillos</p>
      <p className="ex-subheader">React, router, css, cypress, webpack</p>
      <p className="ex-description">Rotten Tomatillos is not affiliated with, endorsed by, or in any other way associated with Rotten Tomatoes, but it is designed to help indecisive moviegoers find new films they're interested in seeing. Utilizing the Movies Database API, it delivers the top movies available in theatres and allows users to watch trailers and see details for each.</p>
      <div className="proj-links-container">
        <img className="link-icon" src={iconLink}/>
        <Link to=""  className="link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>GitHub</Link>
      </div>
    </div>
  </div>,
  <div className="ex-item">
    <img className="ex-img" src={projStreeteats} onDragStart={handleDragStart} role="presentation"/>
    <div className="ex-text-container">
      <p className="ex-header">StreetEats</p>
      <p className="ex-subheader">React, router, css, cypress, websockets</p>
      <p className="ex-description">StreetEats is a two-in-one application that helps hungry people find good food, in the form of local food trucks. Customers can log in to check out nearby options, keep track of their favorite trucks, and save trucks they're interested in. Owners can log in and update their truck's location and details, harnessing websockets to send real-time updates and push notifications to their followers.</p>
      <div className="proj-links-container">
        <img className="link-icon" src={iconLink}/>
        <Link to=""  className="link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>GitHub</Link>
      </div>
    </div>
  </div>,
];

const Portfolio = () => {

  return (
    <div className="experience-container" id="portfolio">
      <p className="portfolio-header">Which is why I'm also a <img className="text-front-dev" src={textFrontDev}/>.</p>
      <AliceCarousel 
      className="carousel"
      items={items}
      disableButtonsControls="true"
      infinite
      responsive={responsive}
      mouseTracking
      />
  </div>
  )
}

export default Portfolio;