/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "./MainContent.css";
import CourseDetails1 from "./semesters/courseDetails1.jsx";
import CourseDetails2 from "./semesters/courseDetails2.jsx";
import CourseDetails3 from "./semesters/courseDetails3.jsx";
import CourseDetails4 from "./semesters/courseDetails4.jsx";
import CourseDetails5 from "./semesters/courseDetails5.jsx";
import CourseDetails6 from "./semesters/courseDetails6.jsx";
import CourseDetails7 from "./semesters/courseDetails7.jsx";
import CourseDetails8 from "./semesters/courseDetails8.jsx";

const MainContent = ({ selectedSemester, rd }) => {
  const [dept, regulation] = rd.split("-");
  // Dynamically render the correct CourseDetails component based on selectedSemester
  const renderCourseDetails = () => {
    switch (selectedSemester) {
      case "1":
        return <CourseDetails1 department={dept} regulation={regulation} />;
      case "2":
        return <CourseDetails2 department={dept} regulation={regulation} />;
      case "3":
        return <CourseDetails3 department={dept} regulation={regulation} />;
      case "4":
        return <CourseDetails4 department={dept} regulation={regulation} />;
      case "5":
        return <CourseDetails5 department={dept} regulation={regulation} />;
      case "6":
        return <CourseDetails6 department={dept} regulation={regulation} />;
      case "7":
        return <CourseDetails7 department={dept} regulation={regulation} />;
      case "8":
        return <CourseDetails8 department={dept} regulation={regulation} />;
      default:
        return <div className="welcome-msg">Select a semester to add course details</div>;
    }
  };

  return (
    <div className="main-content">
      {renderCourseDetails()}
    </div>
  );
};

export default MainContent;
