import React, { useState, useEffect } from "react";
import "./SemesterDetails.css";
import axios from 'axios';

const SemesterDetails = ({ data, onChange }) => {
  
  const semester = {
    semesterId: 1,
    semesterName: 'Fall 2024',
    startDate: '2024-08-01',
    endDate: '2024-12-15',
    department: 'Computer Science',
  };

  const [courses, setCourses] = useState(data || []); 

  // Update courses when data prop changes
  useEffect(() => {
    if (data && Array.isArray(data)) {
      setCourses(data);
    }
  }, [data]);

  const addCourse = () => {
    setCourses((prevCourses) => [
      ...prevCourses,
      {
        id: prevCourses.length + 1,
        regulationId: "",
        regulationName: "",
        startYear: "",
        endYear: "",
        curriculumId: "",
        curriculumName: "",
        department: "",
        totalCredits: "",
        durationYears: "",
        categoryId: "",
        categoryName: "",
        creditCount: "",
        courseId: "",
        courseCode: "",
        courseName: "",
        semester: "",
        credits: "",
        ltp: "",
      },
    ]);
  };
  

  const handleInputChange = (e, courseId) => {
    const { name, value } = e.target;
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, [name]: value } : course
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("semester", semester);
    console.log("courses", courses);
    // Check for empty fields
    const hasEmptyFields = courses.some((course) =>
      Object.values(course).some((value) => value === "")
    );
    if (hasEmptyFields) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const payload = { semester, courses };
    console.log('Submitting payload:', payload);

    // Submit form data to backend
    axios
      .post('http://localhost:5000/semester-details', { semester, courses })
      .then((response) => {
        alert('Data successfully submitted!');
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error submitting data:', error);
        alert('There was an error submitting the data.');
      });
  };

  return (
    <div className="semester-details-container">
      <h2>Semester Details</h2>
      <form onSubmit={handleSubmit}>
        {Array.isArray(courses) && courses.map((course) => (
          <div key={course.id} className="course-container">
            <h3 id="course-h3">Course {course.id}</h3>
            {/* Row 1 */}
            <div className="row">
              <div className="input-group">
                <label>Regulation Id</label>
                <input
                  type="number"
                  placeholder="Regulation Id"
                  name="regulationId"
                  value={course.regulationId || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Regulation Name</label>
                <input
                  type="text"
                  placeholder="Regulation Name"
                  name="regulationName"
                  value={course.regulationName || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Start Year</label>
                <input
                  type="number"
                  placeholder="Start year"
                  name="startYear"
                  value={course.startYear || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>End Year</label>
                <input
                  type="number"
                  placeholder="End year"
                  name="endYear"
                  value={course.endYear || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
            </div>
            {/* Row 2 */}
            <div className="row">
              <div className="input-group">
                <label>Curriculum Id</label>
                <input
                  type="number"
                  placeholder="Curriculum Id"
                  name="curriculumId"
                  value={course.curriculumId || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Curriculum Name</label>
                <input
                  type="text"
                  placeholder="Curriculum Name"
                  name="curriculumName"
                  value={course.curriculumName || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Department</label>
                <input
                  type="text"
                  placeholder="Department"
                  name="department"
                  value={course.department || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Total Credits</label>
                <input
                  type="number"
                  placeholder="Total Credits"
                  name="totalCredits"
                  value={course.totalCredits || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
            </div>
            {/* Row 3 */}
            <div className="row">
              <div className="input-group">
                <label>Duration Years</label>
                <input
                  type="number"
                  placeholder="Duration Years"
                  name="durationYears"
                  value={course.durationYears || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Category Id</label>
                <input
                  type="number"
                  placeholder="Category Id"
                  name="categoryId"
                  value={course.categoryId || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Category Name</label>
                <input
                  type="text"
                  placeholder="Category Name"
                  name="categoryName"
                  value={course.categoryName || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Credit Count</label>
                <input
                  type="number"
                  placeholder="Credit Count"
                  name="creditCount"
                  value={course.creditCount || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
            </div>
            {/* Row 4 */}
            <div className="row">
              <div className="input-group">
                <label>Course Id</label>
                <input
                  type="number"
                  placeholder="Course Id"
                  name="courseId"
                  value={course.courseId || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Course Code</label>
                <input
                  type="text"
                  placeholder="Course Code"
                  name="courseCode"
                  value={course.courseCode || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Course Name</label>
                <input
                  type="text"
                  placeholder="Course Name"
                  name="courseName"
                  value={course.courseName || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Category Id</label>
                <input
                  type="number"
                  placeholder="Category Id"
                  name="categoryId"
                  value={course.categoryId || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
            </div>
            {/* Row 5 */}
            <div className="row">
              <div className="input-group">
                <label>Semester</label>
                <input
                  type="number"
                  placeholder="Semester"
                  name="semester"
                  value={course.semester || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Credits</label>
                <input
                  type="number"
                  placeholder="Credits"
                  name="credits"
                  value={course.credits || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>LTP</label>
                <input
                  type="text"
                  placeholder="LTP"
                  name="ltp"
                  value={course.ltp || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="action-buttons">
          {/* Button to add more courses */}
          <button type="button" onClick={addCourse}>
            Add Course
          </button>
          {/* Submit button */}
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SemesterDetails;
