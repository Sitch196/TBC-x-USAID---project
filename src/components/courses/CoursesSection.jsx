import React from "react";
import "./CoursesSection.css";

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "Description for Course 1",
      image: "course1.jpg",
    },
    {
      id: 2,
      title: "Course 2",
      description: "Description for Course 2",
      image: "course2.jpg",
    },
    {
      id: 3,
      title: "Course 3",
      description: "Description for Course 3",
      image: "course3.jpg",
    },
    {
      id: 3,
      title: "Course 3",
      description: "Description for Course 3",
      image: "course3.jpg",
    },
    {
      id: 3,
      title: "Course 3",
      description: "Description for Course 3",
      image: "course3.jpg",
    },
    {
      id: 3,
      title: "Course 3",
      description: "Description for Course 3",
      image: "course3.jpg",
    },
    {
      id: 3,
      title: "Course 3",
      description: "Description for Course 3",
      image: "course3.jpg",
    },
    {
      id: 3,
      title: "Course 3",
      description: "Description for Course 3",
      image: "course3.jpg",
    },
    {
      id: 3,
      title: "Course 3",
      description: "Description for Course 3",
      image: "course3.jpg",
    },
  ];

  return (
    <section className="courses_wrapper">
      <h2>სასწავლო კურსები</h2>
      <div className="cards_container">
        {courses.map((course) => (
          <div key={course.id} className="course_card">
            <img
              src={course.image}
              alt={course.title}
              className="course_image"
            />
            <h3>{course.title}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
