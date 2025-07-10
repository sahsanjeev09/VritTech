import React from "react";

const TestimonialItem = ({ src, alt, className, style }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`testimonial-item ${className}`}
      style={style}
    />
  );
};

export default TestimonialItem;
