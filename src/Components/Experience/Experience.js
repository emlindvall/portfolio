import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import textCulturalEd from '../../assets/text-cultural-ed.png';
import AliceCarousel from 'react-alice-carousel';
import exArvada1 from '../../assets/ex-arvada1.jpg';
import exArvada2 from '../../assets/ex-arvada2.jpg';
import exPcc from '../../assets/ex-pcc.jpg';
import exKirkland from '../../assets/ex-kirkland.jpg';
import exDmap from '../../assets/ex-dmap.jpg';
import exJyf from '../../assets/ex-jyf.jpg';
import exSam from '../../assets/ex-sam.jpg';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Experience.css';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 1 },
  600: { items: 1 },
  1000: { items: 4 },
};

const items = [
  <div className="ex-item">
    <img className="ex-img" src={exArvada1} onDragStart={handleDragStart} role="presentation"/>
    <div className="ex-text-container" id="hidden">
      <p className="ex-header">The Arvada Center</p>
      <p className="ex-subheader">Education Associate 2021-22</p>
      <p className="ex-description">In this multi-faceted role, I helped to support the organization’s extremely varied umbrella of education programs for students of all ages. From high-level budgeting and data analysis to hands-on daily program management, I had the unique opportunity to leave my mark on every corner of the Arvada Center's education deparment. I especially enjoyed modernizing and overhauling the Theatre for Young Audiences field trip program, being able to occasionally teach 3D printing classes, and overseeing a team of 25 amazing volunteers.</p>
    </div>
  </div>,
  <div className="ex-item">
    <img className="ex-img" src={exArvada2} onDragStart={handleDragStart} role="presentation"/>
    <div className="ex-text-container" id="hidden">
      <p className="ex-header">The Arvada Center</p>
      <p className="ex-subheader">School Programs Associate 2020-22</p>
      <p className="ex-description">In this position, I worked to support the organization's school-based programming. Due to the COVID-19 pandemic of 2020, I also helped to successfully move all of the organization's educational programming for students aged infant-senior to a virtual format to help students stay engaged while sheltering at home. This was a huge undertaking, but also one of the proudest achievements of my career-- many of the programs I designed, launched, and perfected are still in place at the Arvada Center today.</p>
    </div>
  </div>,
  <div className="ex-item">
    <img className="ex-img" src={exPcc} onDragStart={handleDragStart} role="presentation"/>
    <div className="ex-text-container" id="hidden">
      <p className="ex-header">Pop Culture Classroom</p>
      <p className="ex-subheader">Instructor 2017-2020</p>
      <p className="ex-description">As an instructor and the Game On! Series programming captain, I helped students unlock their creativity and potential through pop culture. From helping students brush up on math skills and social collaboration through weekly Dungeons and Dragons sessions to working on literay and writing by creating our own graphic novels, this role was as fun as it was rewarding. I especially enjoyed being able to design and teach sessions of a two-week comic con summer camp that culminated in students spending the weekend at Denver Comic Con.</p>
    </div>
  </div>,
  <div className="ex-item">
    <img className="ex-img" src={exKirkland} onDragStart={handleDragStart} role="presentation"/>
    <div className="ex-text-container" id="hidden">
      <p className="ex-header">Kirkland Museum of Fine & Decorative Art</p>
      <p className="ex-subheader">Visitor Services Lead 2017-2020</p>
      <p className="ex-description">At the Kirkland Museum, I helped to facilitate an excellent visitor experience by overseeing the sale of tickets, memberships, and souvenirs. I also helped to define the museum's visitor tour programs after it's reopening in 2017, as well as lead both general and specialized tours for visitors and VIPs. I also ran their Facebook and Instagram accounts!</p>
    </div>
  </div>,
  <div className="ex-item">
    <img className="ex-img" src={exDmap} onDragStart={handleDragStart} role="presentation"/>
    <div className="ex-text-container" id="hidden">
      <p className="ex-header">Dzhungar Mountain Archaeology Project</p>
      <p className="ex-subheader">Field Tech 2017</p>
      <p className="ex-description">I spent the summer of 2017 working as an archaeological field tech in rural Kazakhstan, along the Dzhungarian Alatau Mountain range near the Chinese border. It was an incredible opportunity to help shed light on a bronze age cemetary, assisting with excavation, data entry, and surveying alongside seasoned professionals in bioanthropology and paleogenetics. I also got to hang out with a lot of local herders, make friends with quite a few wild horses, and go without internet or cell service for two months straight.</p>
    </div>
  </div>,
  <div className="ex-item">
    <img className="ex-img" src={exJyf} onDragStart={handleDragStart} role="presentation"/>
    <div className="ex-text-container">
      <p className="ex-header">The Jamestown Yorktown Foundation</p>
      <p className="ex-subheader">Museum Educator 2016-2017</p>
      <p className="ex-description">While working for the Jamestown-Yorktown Foundation, I helped to develop and lead educational programs for adults, students, and summer campers at Jamestown Settlement and Yorktown Battlefield living history museums. In particular, I supported the launch of a brand-new selection of programming at the new American Revolution Museum at Yorktown, which opened during my time in this role. I have especially happy memories of showing students how to fire matchlock muskets (no bullets!), raising sails on the Susan Constant, and herding heritage chickens out of the Jamestown church.</p>
    </div>
  </div>,
  <div className="ex-item">
    <img className="ex-img" src={exSam} onDragStart={handleDragStart} role="presentation"/>
    <div className="ex-text-container" id="hidden">
      <p className="ex-header">The Swedish American Museum</p>
      <p className="ex-subheader">Intern 2016</p>
      <p className="ex-description">During the summer of 2016, I interned at the Swedish American Museum, helping primarily to organize and teach their Pioneer the World summercamp programs. I was also able to help out their curatorial staff as-needed, including for the install of Skål!, a very fun special exhibit focusing on snaps and Swedish drinking culture.</p>
    </div>
  </div>
];

const Experience = () => {
  return (
    <div className="experience-container" id="experience">
      <p className="experience-header">As a museum professional, I have a decade of experience in <img className="text-cultural-ed" src={textCulturalEd}/>.</p>
      <AliceCarousel 
      className="carousel"
      items={items}
      disableButtonsControls="true"
      infinite
      responsive={responsive}
      mouseTracking
      paddingRight="100px"
      />
    </div>
  )
}

export default Experience;