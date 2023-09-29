import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import textAt from '../../assets/text-at.png';
import iconMail from '../../assets/icon-mail.png';
import iconSpotify from '../../assets/icon-spotify.png';
import atButtonBack from '../../assets/button-back.png';
import './AcquiredTaste.css';

const AcquiredTaste = () => {

  return (
    <div className="acquiredtaste-container" id="at-top">
      <div className="at-top-container">
        <img className="text-at" src={textAt}/>
        <p className="at-description">Acquired Taste is a weekly playlist curated by Em Lindvall. It's guaranteed to up your street cred at your local hipster dive or your money back, which doesn't mean much since I couldn't monetize this if I tried. </p>
        <div className="at-links-container">
          <div clasName="links-subcontainer">
            <img className="link-icon" src={iconMail}/>
            <Link to="https://media.istockphoto.com/id/91520053/photo/senior-man-shrugging-shoulders.jpg?s=612x612&w=is&k=20&c=7H7yOTxL1eywmWu-dQQMy7zz55-dOjKjrGhNIGuEPxw="  className="link-text" style={{textDecoration: 'none', color: "#F8F8F8"}}>Get it delivered</Link>
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
          <p className="at-playlist-description">Hi, kids. Welcome to Acquired Taste, an unremarkable music newsletter where I tell you what I’m listening to this week. In the grand scheme of things, I’m just a minuscule speck of dust and anxious sweat floating in an infinite, gorgeous cosmos, but in my tiny sphere of influence, I’m generally trusted with the aux. 99% of the time, I don’t really care what you think of me as long as you think I have good music taste. Here are 15 songs from my music-snob arsenal for when I want to make a good impression:</p>
          <iframe className="playlist-embed" style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/7JmlcpwMHMYs4s71z3vPSV?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
        <div className="at-bottom-right-container">
          <div className="track-title-container">
            <p className="track-num">01.1</p>
            <p className="track-title">Blackrock "Yeah, Yeah"</p>
            <p className="track-artist">by Blackrock</p>
          </div>
          <p className="track-description">If I had a walk-out song it would be Harry Nilsson’s Jump Into the Fire, but if that song was taken, I'd choose this one. Blackrock was apparently a short-lived collaboration of two session musicians, recorded in Memphis in the 60s. There’s also a persistent rumor that Jay-Z recorded a track that samples this one, but it’s never been released. Give the people what they want!</p>

          <div className="track-title-container">
            <p className="track-num">01.2</p>
            <p className="track-title">Stone Coal White</p>
            <p className="track-artist">by Stone Coal White</p>
          </div>
          <p className="track-description">I don’t know anything about Stone Coal White other than that this album was re-released by Numero Group in 2011, and that they claim the original copy was “found in the basement of a now-condemned motorcycle gang hideout in Dayton, Ohio”. Which, sure. I certainly want to believe that.</p>

          <div className="track-title-container">
            <p className="track-num">01.3</p>
            <p className="track-title">Slow Burner</p>
            <p className="track-artist">by Swithold</p>
          </div>

          <div className="track-title-container">
            <p className="track-num">01.4</p>
            <p className="track-title">Hard Times</p>
            <p className="track-artist">by Baby Huey</p>
          </div>
          <p className="track-description">Starts out with the juciest little Soul Bossa Nova flute trill, as a treat. P.S., if you have an original pressing of this album, please call me.</p>

          <div className="track-title-container">
            <p className="track-num">01.5</p>
            <p className="track-title">Paint it Black</p>
            <p className="track-artist">by Africa</p>
          </div>
          <p className="track-description">This is a grimy, borderline-sinister cover of the Stones song featuring quite a few people just straight-up screaming in the background. It's grungy and a little polyrythmic and it's so, so much better than the original, just trust me.</p>

          <div className="track-title-container">
            <p className="track-num">01.6</p>
            <p className="track-title">Man From Shooter's Hill</p>
            <p className="track-artist">by Keith Mansfield & The Soul Syndicate</p>
          </div>
          <p className="track-description">So you probably know the Hugh Masakela version better, but hear me out- this one sounds like somebody recorded it on the hottest day of the year in an un-airconditioned garage with secondhand equipment they bought off eBay, and it fucks.</p>

          <div className="track-title-container">
            <p className="track-num">01.7</p>
            <p className="track-title">Can You Get To That</p>
            <p className="track-artist">by Funkadelic</p>
          </div>
          <p className="track-description">I'm a firm believer that all playlists should include at least one Funkadelic, Parliament, and or Parliament Funkadelic track in order to be considered good or even complete.</p>

          <div className="track-title-container">
            <p className="track-num">01.8</p>
            <p className="track-title">Dion Ysiusk</p>
            <p className="track-artist">by Yin Yin</p>
          </div>

          <div className="track-title-container">
            <p className="track-num">01.9</p>
            <p className="track-title">Autopsie d'un complot</p>
            <p className="track-artist">by Ahmad Malek</p>
          </div>
          <p className="track-description">Quite possibly my favorite song of all time. It's disgustingly funky. Ahmed Malek was an Algerian composer, working mostly in the 70s and 80s on scoring soundtracks. He's got a lot of bangers, but this one's the best. The title translates into "Autopsy of a conspiracy", which is also rad as hell.</p>

          <div className="track-title-container">
            <p className="track-num">01.10</p>
            <p className="track-title">Could Heaven Ever Be Like This</p>
            <p className="track-artist">by Idris Muhammad</p>
          </div>

          <div className="track-title-container">
            <p className="track-num">01.11</p>
            <p className="track-title">Is It All Over My Face & Tower of Meaning</p>
            <p className="track-artist">by Blood Orange</p>
          </div>
          <p className="track-description">This track is legitimately nasty and so, so good. I really, really love the audible string noise on the bass when it comes in around 2:10. The backbone here is a sample of a song by the same name by a disco group called Loose Joints, which is also worth checking out- it's racous and messy and incredible. It's also worth noting that this track was produced by Arthur Russell, whom I love, and is mostly known for being a very gentle indie musician who favors the cello.</p>

          <div className="track-title-container">
            <p className="track-num">01.12</p>
            <p className="track-title">The Complete Knock</p>
            <p className="track-artist">by Blood Orange</p>
          </div>
          <p className="track-description">My queer fever dream is going cratedigging with Devonte Hynes</p>

          <div className="track-title-container">
            <p className="track-num">01.13</p>
            <p className="track-title">Soon Never Comes</p>
            <p className="track-artist">by Stimulator Jones</p>
          </div>

          <div className="track-title-container">
            <p className="track-num">01.14</p>
            <p className="track-title">Darling</p>
            <p className="track-artist">by Esbe</p>
          </div>
          <p className="track-description">This is a truly masterful rework of a fairly lukewarm Bobby Caldwell song, and I actually do mean it when I say it's one of the most gorgeous tracks I've ever heard. Sorry!</p>

          <div className="track-title-container">
            <p className="track-num">01.15</p>
            <p className="track-title">Easy Rider</p>
            <p className="track-artist">by Action Bronson</p>
          </div>
          <p className="track-description">I really like Action Bronson! I'm not apologizing. "Rocking very loose pants" is an incredible lyric and very relatable. The sample here is a very, very cool psych-rock track called Adımız Miskindir Bizim by a Turkish artist, Mazhar Ve Fuat. It once came up on a playlist at a Turkish cafe in Denver and I could not shazam that shit fast enough.</p>

        </div>
      </div>
    <NavLink to="/">
      <img className="at-button-back" src={atButtonBack}></img>
    </NavLink>
    </div>
  )
}

export default AcquiredTaste;