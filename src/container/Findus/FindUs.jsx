import React from 'react';


import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
     <h1 className="headtext__cormorant" style={{ marginBottom: '2rem' }}> Contact </h1>
     <p className="p__opensans">+351916054918</p>
      <p className="p__opensans">element@email.pt</p>
      <h5 className="headtext__cormorant" style={{ marginBottom: '2rem' }}>Find Us</h5>
      <div className="app__wrapper-content">
        <p className="p__opensans">Rua Santa Catarina nº50 Porto Portugal</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
      </div>
     
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;
