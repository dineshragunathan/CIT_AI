import React, { useState } from "react";
import axios from "axios";
import "./SemesterDetails.css";

const SemesterDetails = () => {
  // Use separate useState for each input field
  const [regulationId, setRegulationId] = useState("");
  const [regulationName, setRegulationName] = useState("");
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [creditCount, setCreditCount] = useState("");
  const [courseId, setCourseId] = useState("");
  const [courseCode, setCourseCode] = useState("");
  const [courseName, setCourseName] = useState("");
  const [semester, setSemester] = useState("");
  const [credits, setCredits] = useState("");
  const [ltp, setLtp] = useState("");
  const [statusMessage, setStatusMessage] = useState(""); // To show status of the request

  // Handle input changes
  const handleChange = (e, setterFunction) => {
    setterFunction(e.target.value);
  };

  // Handle form submission to send data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    const parsedCreditCount = parseInt(creditCount); 

    if (isNaN(parsedCreditCount)) {
      setStatusMessage("Please enter a valid number for Credit Count.");
      return;
    }

    const course = {
      regulationId,
      regulationName,
      startYear,
      endYear,
      creditCount: parsedCreditCount, // Use the parsed value here
      courseId,
      courseCode,
      courseName,
      semester,
      credits,
      ltp,
    };

    const semesterData = {
      semester: semester, // You can use this if you want to insert semester info separately
      courses: [course], // Add more courses if you want
    };

    try {
      // Make a POST request to the backend with the semester and courses data
      const response = await axios.post(
        "http://localhost:5000/api/semester-details",
        semesterData
      );
      console.log("Response from backend:", response.data);

      setStatusMessage("Courses successfully inserted!");
    } catch (error) {
      console.error("Error inserting courses:", error);
      setStatusMessage("Error inserting courses. Please try again.");
    }
  };

  return (
    <div className="semester-container">
      <h1 className="header-semester">Semester Details</h1>
      <div className="form-container">
        <h2 className="course-header">Course 1</h2>
        <form className="form-grid" onSubmit={handleSubmit}>
          {/* Form fields (same as before) */}
          <div className="form-group">
            <label htmlFor="regulation-id">Regulation Id</label>
            <input
              id="regulation-id"
              type="text"
              placeholder="Regulation Id"
              value={regulationId}
              onChange={(e) => handleChange(e, setRegulationId)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="regulation-name">Regulation Name</label>
            <input
              id="regulation-name"
              type="text"
              placeholder="Regulation Name"
              value={regulationName}
              onChange={(e) => handleChange(e, setRegulationName)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="start-year">Start Year</label>
            <input
              id="start-year"
              type="text"
              placeholder="Start Year"
              value={startYear}
              onChange={(e) => handleChange(e, setStartYear)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="end-year">End Year</label>
            <input
              id="end-year"
              type="text"
              placeholder="End Year"
              value={endYear}
              onChange={(e) => handleChange(e, setEndYear)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="credit-count">Credit Count</label>
            <input
              id="credit-count"
              type="text"
              placeholder="Credit Count"
              value={creditCount}
              onChange={(e) => handleChange(e, setCreditCount)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="course-id">Course Id</label>
            <input
              id="course-id"
              type="text"
              placeholder="Course Id"
              value={courseId}
              onChange={(e) => handleChange(e, setCourseId)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="course-code">Course Code</label>
            <input
              id="course-code"
              type="text"
              placeholder="Course Code"
              value={courseCode}
              onChange={(e) => handleChange(e, setCourseCode)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="course-name">Course Name</label>
            <input
              id="course-name"
              type="text"
              placeholder="Course Name"
              value={courseName}
              onChange={(e) => handleChange(e, setCourseName)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="semester">Semester</label>
            <input
              id="semester"
              type="text"
              placeholder="Semester"
              value={semester}
              onChange={(e) => handleChange(e, setSemester)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="credits">Credits</label>
            <input
              id="credits"
              type="text"
              placeholder="Credits"
              value={credits}
              onChange={(e) => handleChange(e, setCredits)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="ltp">LTP</label>
            <input
              id="ltp"
              type="text"
              placeholder="LTP"
              value={ltp}
              onChange={(e) => handleChange(e, setLtp)}
            />
          </div>

          <div className="button-container">
            <button className="add-course">
              Add Course
            </button>
            <button className="submit" type="submit">
              Submit
            </button>
          </div>
        </form>

        {/* Displaying status message */}
        {statusMessage && <p>{statusMessage}</p>}
      </div>
    </div>
  );
};

export default SemesterDetails;
