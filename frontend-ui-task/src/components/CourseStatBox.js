import React from 'react';

const CourseStatBox = ({ title, description, number }) => (
  <div className="course-box stats-box">
    <div className="vertical-text">
      <p><strong>{title}</strong><br />Courses</p>
      <span>{description}</span>
    </div>
    <h3 className="stats-number">{number}<sup>+</sup></h3>
  </div>
);

export default CourseStatBox;
