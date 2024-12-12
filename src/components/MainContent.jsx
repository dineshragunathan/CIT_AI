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

const MainContent = ({ selectedSemester }) => {
  // Dynamically render the correct CourseDetails component based on selectedSemester
  const renderCourseDetails = () => {
    switch (selectedSemester) {
      case "1":
        return <CourseDetails1 />;
      case "2":
        return <CourseDetails2 />;
      case "3":
        return <CourseDetails3 />;
      case "4":
        return <CourseDetails4 />;
      case "5":
        return <CourseDetails5 />;
      case "6":
        return <CourseDetails6 />;
      case "7":
        return <CourseDetails7 />;
      case "8":
        return <CourseDetails8 />;
      default:
        return <div className = "welcome-msg">Select a semester to add course details</div>;
    }
  };

  return (
    <div className="main-content">
      {renderCourseDetails()}
    </div>
  );
};

export default MainContent;
