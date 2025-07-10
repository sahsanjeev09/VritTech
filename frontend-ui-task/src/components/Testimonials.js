// Testimonials.js
import React from "react";
import "../styles/Testimonials.css";
import TestimonialHeader from "./TestimonialHeader";
import TestimonialItem from "./TestimonialItem";

// Image imports (replace with actual paths)
import User1 from "../images/User1.png";
import User2 from "../images/User2.png";
import User3 from "../images/User3.png";
import User4 from "../images/User4.png";
import User5 from "../images/User5.png";
import Icon1 from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
import Icon4 from "../images/icon4.png";

const testimonialItems = [
  { src: User1, alt: "User 1", className: "user-img", style: { top: "5%", left: "10%" } },
  { src: Icon1, alt: "Icon 1", className: "icon-img", style: { top: "0%", left: "50%", transform: "translateX(-50%)" } },
  { src: User2, alt: "User 2", className: "user-img", style: { top: "5%", right: "10%" } },
  { src: Icon3, alt: "Icon 3", className: "icon-img", style: { top: "30%", right: "5%" } },
  { src: User3, alt: "User 3", className: "user-img", style: { bottom: "25%", left: "5%" } },
  { src: Icon2, alt: "Icon 2", className: "icon-img", style: { bottom: "30%", left: "50%", transform: "translateX(-50%)" } },
  { src: User4, alt: "User 4", className: "user-img", style: { bottom: "25%", right: "5%" } },
  { src: User5, alt: "User 5", className: "user-img", style: { bottom: "5%", left: "50%", transform: "translateX(-50%)" } },
  { src: Icon4, alt: "Icon 4", className: "icon-img", style: { bottom: "5%", right: "10%" } }
];

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <TestimonialHeader />
      {testimonialItems.map((item, index) => (
        <TestimonialItem
          key={index}
          src={item.src}
          alt={item.alt}
          className={item.className}
          style={item.style}
        />
      ))}
    </div>
  );
};

export default Testimonials;
