import express from "express";
import pool from "../config/db.js"
const router = express.Router();

router.post("/semester-details", async (req, res) => {
    console.log("Received data:", req.body);
    const { semester, courses } = req.body;
  
    if (!semester || !courses || !Array.isArray(courses)) {
      return res.status(400).send("Invalid request format");
    }
  
    try {
      // Insert multiple course details for the semester
      const insertQuery = `
        INSERT INTO course_details (semester, course_id, course_code, course_name, category_name, credits, ltp)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
      `;
      
      // Loop through each course and insert into the table
      for (let course of courses) {
        const { course_id, course_code, course_name, category_name, credits, ltp } = course;
        await pool.query(insertQuery, [semester, course_id, course_code, course_name, category_name, credits, ltp]);
      }
  
      res.status(200).send({ message: 'Courses successfully inserted!' });
    } catch (error) {
      console.error(error);
      res.status(500).send({ message: 'Error inserting courses.' });
    }
  });

export default router;
