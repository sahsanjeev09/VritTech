import React from 'react';
import '../styles/Courses.css';
import CourseStatBox from './CourseStatBox';
import { FaReact, FaVuejs, FaMobileAlt } from 'react-icons/fa';
import { SiAdobeillustrator } from 'react-icons/si';

const Courses = () => {
  return (
    <div className="courses-container">
      <div className="courses-header">
        <p>Explore our classes and master trending skills!</p>
        <h2>Dive Into <span className="highlight">What’s Hot Right Now!</span> 🔥</h2>
      </div>

      <div className="courses-content">
        <div className="course-box all-courses">
          <div className="course-icons">
            <FaReact className="course-icon" />
            <FaMobileAlt className="course-icon" />
            <FaVuejs className="course-icon" />
            <SiAdobeillustrator className="course-icon" />
          </div>
          <div className="course-info">
            <h3>23<sup>+</sup></h3>
            <p className="label">All Courses</p>
            <p className="desc">courses you're powering through right now.</p>
          </div>
          <span className="view-all">View all Courses →</span>
        </div>
        
        <CourseStatBox
          title="Upcoming"
          description="exciting new courses waiting to boost your skills."
          number="05"
        />
        <CourseStatBox
          title="Ongoing"
          description="currently happening—don't miss out on the action!"
          number="10"
        />
      </div>
    </div>
  );
};

export default Courses;
