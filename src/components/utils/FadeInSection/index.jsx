import React, { useRef } from "react";
import "./fadeInSection.scss";

const FadeInSection = ({ direction, children }) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
        entry.isIntersecting && observer.unobserve(entry.target);
      });
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <div
      className={`fade-in-section ${direction} ${
        isVisible ? "is-visible" : ""
      }`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

FadeInSection.defaultProps = {
  direction: "up",
};

export default FadeInSection;
