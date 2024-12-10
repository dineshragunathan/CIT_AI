const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "pikachu@77",
    database: "newDB",
    port: 5432
});

const addSemesterDetails = async (req, res) => {
  const { semester, courses } = req.body;

  if (!semester || !courses || !Array.isArray(courses)) {
    return res.status(400).send('Invalid request format');
  }

  try {
    // Start a transaction to insert all courses
    await pool.query('BEGIN');

    for (let course of courses) {
      const query = `
        INSERT INTO semester_details (
          regulation_id, regulation_name, start_year, end_year, curriculum_id,
          curriculum_name, department, total_credits, duration_years, category_id,
          category_name, credit_count, course_id, course_code, course_name, semester,
          credits, ltp
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18
        )
        RETURNING *;
      `;
      
      const values = [
        course.regulationId, course.regulationName, course.startYear, course.endYear,
        course.curriculumId, course.curriculumName, course.department, course.totalCredits,
        course.durationYears, course.categoryId, course.categoryName, course.creditCount,
        course.courseId, course.courseCode, course.courseName, course.semester,
        course.credits, course.ltp,
      ];

      await pool.query(query, values);
    }

    await pool.query('COMMIT');
    res.status(201).send('Courses successfully inserted');
  } catch (error) {
    console.error('Error inserting courses:', error);
    await pool.query('ROLLBACK');
    res.status(500).send('Error inserting course details');
  }
};

module.exports = { addSemesterDetails };
