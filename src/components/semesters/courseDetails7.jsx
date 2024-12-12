import React, { useState } from "react";
import "./courseDetails.css";

const courseDetails7 = ({ }) => {
  const semester = "7"; // Hardcoding the semester value for this component.
  
  const [courses, setCourses] = useState([
    { course_id: "", course_code: "", course_name: "", category_name: "", semester: semester, credits: "", ltp: "" }
  ]);

  const categoryOptions = ["Core", "Elective", "Lab"]; // Example options for category_name dropdown.

  const handleChange = (index, field, value) => {
    const updatedCourses = [...courses];
    updatedCourses[index][field] = value;
    setCourses(updatedCourses);
  };

  const addCourse = () => {
    setCourses([
      ...courses,
      { course_id: "", course_code: "", course_name: "", category_name: "", semester: semester, credits: "", ltp: "" }
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/semester-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ semester, courses }),
      });

      if (response.ok) {
        alert("Courses submitted successfully!");
      } else {
        alert("Failed to submit courses.");
      }
    } catch (error) {
      console.error("Error submitting courses:", error);
    }
  };

  return (
    <div className="semester-container">
      <h2 className="semester-header">Semester {semester} - Course Details</h2>
      <div className="form-container">
        {courses.map((course, index) => (
          <div key={index} className="course-row">
            <h3 className="course-header">Course {index + 1}</h3>
            <form onSubmit={handleSubmit} className="form-grid">
              <div className="form-group">
                <label>Course ID</label>
                <input
                  type="text"
                  placeholder="Course ID"
                  value={course.course_id}
                  onChange={(e) => handleChange(index, "course_id", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Course Code</label>
                <input
                  type="text"
                  placeholder="Course Code"
                  value={course.course_code}
                  onChange={(e) => handleChange(index, "course_code", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Course Name</label>
                <input
                  type="text"
                  placeholder="Course Name"
                  value={course.course_name}
                  onChange={(e) => handleChange(index, "course_name", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select
                  value={course.category_name}
                  onChange={(e) => handleChange(index, "category_name", e.target.value)}
                >
                  <option value="">Select Category</option>
                  {categoryOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Credits</label>
                <input
                  type="number"
                  placeholder="Credits"
                  value={course.credits}
                  onChange={(e) => handleChange(index, "credits", e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>LTP</label>
                <input
                  type="text"
                  placeholder="LTP"
                  value={course.ltp}
                  onChange={(e) => handleChange(index, "ltp", e.target.value)}
                />
              </div>
            </form>
          </div>
        ))}

        <div className="button-container">
          <button className="add-course" type="button" onClick={addCourse}>
            Add Course
          </button>
          <button className="submit" type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default courseDetails7;
