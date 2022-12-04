import React from 'react';


import { images, data } from '../../constants';
import './Laurels.css';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels_awards-card">
    
    <div className="app__laurels_awards-card_content ">
        <img src={images.quote} style={{ margin: '1rem 0', width:'30px',height:'30px' }} alt="awards" />
      
      <p className="p__opensans" style={{ margin: '1rem 0' }}>{subtitle}</p>
      <p className="p__cormorant" style={{ color: '#DCCA87' }}>{title}</p>
      <img src={imgUrl} alt="awards" />
    </div>
  </div>
);

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding" id="awards">
    <div className="app__wrapper_info">
     
      <h1 className="headtext__cormorant">What our clients say</h1>

      <div className="app__laurels_awards">
        {data.awards.map((award) => <AwardCard award={award} key={award.title} />)}
      </div>
    </div>

    
  </div>
);

export default Laurels;