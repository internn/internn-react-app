import React from "react";
import config from "../../../config.json";
import "./slide.scss";

const Slide = ({
  slideInfo: {
    text: { line1, line2, line3 },
    button,
    image,
    extraClasses,
  },
}) => {
  return (
    <div
      className={`slide ${extraClasses}`}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(
          ${config["s3-images-url"]}/${image}
        )`,
      }}
    >
      <div className="slide-text">
        <h2>{line1}</h2>
        <h2>{line2}</h2>
        <h2>{line3}</h2>
      </div>
      {/* Create link generator component to return an a or Link component here. */}
      <a href={button.link}>{button.text}</a>
    </div>
  );
};

export default Slide;
