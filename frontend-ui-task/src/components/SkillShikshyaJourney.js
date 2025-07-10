import React from 'react';
import StepCard from './StepCard';
import clarityImage from '../images/clarity.png';
import doingImage from '../images/doing.png';
import '../styles/SkillShikshyaJourney.css';

const SkillShikshyaJourney = () => {
  return (
    <div className="journey-container">
      <header className="journey-header">
        <h1>Your SkillShikshya Journey</h1>
        <p>Step In. Skill Up. Stand Out.</p>
      </header>
      <div className="journey-steps">
        <StepCard
          image={clarityImage}
          alt="Start with Clarity"
          title="Start with Clarity"
          tagline="Step into a better learning path."
          content="Overwhelmed by too many learning options? SkillShikshya provides a clear, curated roadmap from the start. Whether you're a beginner or upskilling, we have a path tailored to your growth."
          className="step-clarity"
        />
        <StepCard
          image={doingImage}
          alt="Learn by Doing"
          title="Learn by Doing"
          tagline="Practical skills, real projects."
          content="Theory is great, but action is better. At SkillShikshya, you learn by doing. Hands-on projects and real-world scenarios help you build, break, and create—leading to true mastery."
          className="step-doing"
          reverse
        />
        <StepCard
          image={doingImage}
          alt="Get Mentored & Supported"
          title="Get Mentored & Supported"
          tagline="You're not learning alone."
          content="Stuck or need feedback? SkillShikshya's community of mentors and learners has your back with live support, interactive discussions, and expert insights. You're never on your own."
          className="step-mentored"
        />
        <StepCard
          image={doingImage}
          alt="Achieve & Showcase"
          title="Achieve & Showcase"
          tagline="Build your portfolio, get job-ready."
          content="Your journey ends with achievement. Each completed project builds a portfolio showcasing your skills and job readiness, bringing you closer to that dream job, promotion, or your own venture."
          className="step-achieve"
          reverse
        />
      </div>
    </div>
  );
};

export default SkillShikshyaJourney;










