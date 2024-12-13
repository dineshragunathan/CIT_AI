/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import SideBar from "./SideBar.jsx";
import Header from "./Header.jsx";
import MainContent from "./MainContent.jsx";
import "./DashBoard.css";

function DashBoard() {
  // State to track the selected semester
  const [selectedSemester, setSelectedSemester] = useState(null);

  // Retrieve Regulation value from the state passed via navigation
  const location = useLocation();
  const { rd } = location.state || {}; // Extract Regulation from state (if available)
  // Function to handle the semester selection from the Sidebar
  const handleSemesterSelect = (semester) => {
    setSelectedSemester(semester); // Update the selected semester state
  };

  return (
    <div className="app-container">
      <Header />
      <div className="layout">
        <SideBar onSelectSemester={handleSemesterSelect} /> {/* Pass the function to Sidebar */}
        <MainContent
          selectedSemester={selectedSemester}
          rd={rd} // Pass Regulation to MainContent
        />
      </div>
    </div>
  );
}

export default DashBoard;
