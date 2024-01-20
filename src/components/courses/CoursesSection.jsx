import React from "react";
import "./CoursesSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "iOS Development",
      description: "რეგისტრაცია დასრულებულია",
      image: "/assets/courses/ios.png",
    },
    {
      id: 2,
      title: "React",
      description: "რეგისტრაცია დასრულებულია",
      image: "/assets/courses/react.png",
    },
    {
      id: 3,
      title: "Intro to Python",
      description: "რეგისტრაცია დასრულებულია",
      image: "/assets/courses/python.png",
    },
    {
      id: 4,
      title: "Advanced Python",
      description: "რეგისტრაცია დასრულებულია",
      image: "/assets/courses/python.png",
    },
    {
      id: 5,
      title: "Advanced Cybersecurity Course",
      description: "რეგისტრაცია დასრულებულია",
      image: "/assets/courses/cyber.png",
    },
    {
      id: 6,
      title: " ToT - Training of Trainers",
      description: "რეგისტრაცია დასრულებულია",
      image: "/assets/courses/training.png",
    },
    {
      id: 7,
      title: "Blockchain",
      description: "რეგისტრაცია დასრულებულია",
      image: "/assets/courses/blockchain.png",
    },
    {
      id: 8,
      title: "DevOps",
      description: "რეგისტრაცია დასრულებულია",
      image: "/assets/courses/devops.png",
    },
    {
      id: 9,
      title: "Information Security Governance",
      description: "რეგისტრაცია დასრულებულია",
      image: "/assets/courses/security.png",
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
            <div className="course_contents">
              <p className="course_title">{course.title}</p>
              <p className="course_description">{course.description}</p>
              <div className="course_button_container">
                <FontAwesomeIcon
                  icon={faArrowRight}
                  size="lg"
                  style={{ color: "#01a8e8" }}
                />
                <p className="course_button">კურსის დეტალები</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
