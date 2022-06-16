import React, { useEffect, useRef, useState } from "react";
import "../shared/App.css";
import One from "../element/One";
import Three from "../element/Three";
import Two from "../element/Two";
import Dots from "../element/Dots";

const divider = 5;

const Main = () => {
  const [scrollIdx, setScrollIdx] = useState(0);
  const outerDivRef = useRef();
  useEffect(() => {
    const wheelHandler = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current;
      const pageHeight = window.innerHeight;

      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: pageHeight+divider,
            left: 0,
            behavior: "smooth",
          });          
          setScrollIdx(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + divider * 2,
            left: 0,
            behavior: "smooth",
          });
          // alert("1");
          setScrollIdx(2);
        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2+ divider * 2,
            left: 0,
            behavior: "smooth",
          });
          // alert("2");
          // setScrollIdx(0);
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          // setScrollIdx(0);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIdx(0);
        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight + divider,
            left: 0,
            behavior: "smooth",
          });
          setScrollIdx(1);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  });
  return (
    <div ref={outerDivRef} className="outer">
      <Dots scrollIdx={scrollIdx} />
      <div className="inner">
        <One />
      </div>
      <div className="inner">
        <Two />
      </div>
      <div className="inner">
        <Three />
      </div>
    </div>
  );
};

export default Main;
