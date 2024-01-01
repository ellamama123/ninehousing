import React, { useState, useEffect } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, [showScroll]);

  return (
    <div className={`scroll-to-top${showScroll ? " show" : ""}`} onClick={handleScrollToTop}>
      <ArrowUpOutlined />
    </div>
  );
};

export default ScrollToTop;
