import React from 'react';
import '../styles/SkillShikshyaJourney.css';

const StepCard = ({ image, alt, title, tagline, content, reverse, className }) => {
  return (
    <div className={`step ${className} ${reverse ? 'reverse' : ''}`}>
      <div className="step-image-container">
        <img src={image} alt={alt} className="step-image" />
      </div>
      <div className="step-text-container">
        <h2>{title}</h2>
        <p>{tagline}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default StepCard;
