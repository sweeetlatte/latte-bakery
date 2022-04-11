import React, { useEffect, useState } from "react";
import Icons from "../../Icons";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    console.log("abc");
    
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

//scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="fixed right-10 bottom-10 z-20" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      {isVisible && (
        <div className="flex justify-center items-center border-primary border w-12 h-12 rounded-lg z-20 hover:bg-primary" onClick={scrollToTop}>
          <Icons.ArrowUp stroke={ isHover ? "#FFFFFF" : "#F3A446"} />
        </div>
      )}
    </div>
  );
}