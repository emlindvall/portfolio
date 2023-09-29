import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import textAt from '../../assets/text-at.png';
import iconMail from '../../assets/icon-mail.png';
import iconSpotify from '../../assets/icon-spotify.png';
import atButtonBack from '../../assets/button-back.png';
import './AcquiredTaste.css';

const AcquiredTaste = () => {

  return (
    <div className="acquiredtaste-container">
      <div className="at-top-container">
        <img className="text-at" src={textAt}/>
        <p className="at-description">Acquired Taste is a weekly playlist curated by Em Lindvall. It's guaranteed to up your street cred at your local hipster dive. </p>
        <div className="at-links-container">
          <div clasName="links-subcontainer">
            <img className="link-icon" src={iconMail}/>
            <Link to="https://www.linkedin.com/in/emlindvall/"  className="link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>Get it delivered</Link>
          </div>
          <div clasName="links-subcontainer">
            <img className="link-icon" src={iconSpotify}/>
            <Link to="https://open.spotify.com/user/1227302936?si=d33b7518b45846a2"  className="link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>Find me on Spotify</Link>
          </div>
        </div>
      </div>
      <div className="at-bottom-container">
        <div className="at-bottom-left-container">
          <p className="at-playlist-header">01. I'm desperately trying to impress you</p>
          <p className="at-playlist-description">Hi, kids. Welcome to Acquired Taste, an unremarkable music newsletter where I tell you what I’m listening to this week. In the grand scheme of things, I’m just a minuscule speck of dust and sweat floating in an infinite, gorgeous universe, but in my tiny sphere of influence, I’m generally trusted with the aux. Generally, I don’t really care what you think of me as long as you think I have good music taste. Here are 15 songs from my music-snob arsenal for when I want to make a good impression:</p>
          <iframe className="playlist-embed" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/7JmlcpwMHMYs4s71z3vPSV?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div className="at-bottom-right-container">
          <div className="track-title-container">
            <p className="track-num">01.1</p>
            <p className="track-title">Blackrock "Yeah, Yeah"</p>
            <p className="track-artist">by Blackrock</p>
          </div>
          <p className="track-description">If I had a walk-up song it would be Harry Nilsson’s Jump Into the Fire, but if that song was taken, “Yeah, Yeah“ would be my runner-up. Blackrock was apparently a short-lived collaboration of two session musicians, recorded in Memphis in the 60s. There’s also a persistent rumor that Jay-Z recorded a track that samples this track, but it’s never been released.</p>

          <div className="track-title-container">
            <p className="track-num">01.2</p>
            <p className="track-title">Stone Coal White</p>
            <p className="track-artist">by Stone Coal White</p>
          </div>
          <p className="track-description">I don’t know anything about Stone Coal White other than that this album was re-released by Numero Group in 2011, and that they claim the original was “found in the basement of a now-condemned motorcycle gang hideout in Dayton, Ohio”. Which, sure. I certainly want to believe that.</p>

          <div className="track-title-container">
            <p className="track-num">01.3</p>
            <p className="track-title">Slow Burner</p>
            <p className="track-artist">by Swithold</p>
          </div>
          <p className="track-description">Another track courtesy of Numero Group, included on their Eccentric Funk album. Like the previous track, it also came out of Dayton and appropriately straddles the line between rock, funk, and disco. Liza Richardson, if you’re reading this, it’s also begging to be used in a soundtrack.</p>

          <div className="track-title-container">
            <p className="track-num">01.4</p>
            <p className="track-title">Hard Times</p>
            <p className="track-artist">by Baby Huey</p>
          </div>
          <p className="track-description">Baby Huey really should be more famous than he is. If you like Curtis Mayfield, Otis Redding, or Charles Bradley, this will also do it for you. Plus this track starts with the juciest little Soul Bossa Nova flute trill, as a treat. PS, if you have an original pressing of this album, please call me.</p>

          <div className="track-title-container">
            <p className="track-num">01.5</p>
            <p className="track-title">Paint it Black</p>
            <p className="track-artist">by Africa</p>
          </div>
          <p className="track-description">I know nothing about this artist. I only know one thing about this album, and that's that it doesn't skip a beat top to bottom. Imagine the Rolling Stones track but way more sinister, good and grungy, and just a touch polyrythmic. Plus it's one of those tracks where you can hear the band just straight up whooping and hollering in the background, which I love.</p>

          <div className="track-title-container">
            <p className="track-num">01.6</p>
            <p className="track-title">Man From Shooter's Hill</p>
            <p className="track-artist">by Keith Mansfield, The Soul Syndicate</p>
          </div>
          <p className="track-description">So you probably know the Hugh Masakela version better, but hear me out. This one sounds like somebody recorded it on the very hottest day of the year in a garage with equipment they bought on eBay. It fucks.</p>

        </div>
      </div>
    <NavLink to="/">
      <img className="at-button-back" src={atButtonBack}></img>
    </NavLink>
    </div>
  )
}

export default AcquiredTaste;