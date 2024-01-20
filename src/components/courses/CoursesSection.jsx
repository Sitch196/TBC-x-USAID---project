import React from "react";
import "./CoursesSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ios from "../../../assets/courses/ios.png";
import react from "../../../assets/courses/react.png";
import python from "../../../assets/courses/python.png";
import cyber from "../../../assets/courses/cyber.png";
import training from "../../../assets/courses/training.png";
import blockchain from "../../../assets/courses/blockchain.png";
import devops from "../../../assets/courses/devops.png";
import security from "../../../assets/courses/ios.png";

export default function CoursesSection() {
  const courses = [
    {
      id: 1,
      title: "iOS Development",
      description: "რეგისტრაცია დასრულებულია",
      image: ios,
    },
    {
      id: 2,
      title: "React",
      description: "რეგისტრაცია დასრულებულია",
      image: react,
    },
    {
      id: 3,
      title: "Intro to Python",
      description: "რეგისტრაცია დასრულებულია",
      image: python,
    },
    {
      id: 4,
      title: "Advanced Python",
      description: "რეგისტრაცია დასრულებულია",
      image: python,
    },
    {
      id: 5,
      title: "Advanced Cybersecurity Course",
      description: "რეგისტრაცია დასრულებულია",
      image: cyber,
    },
    {
      id: 6,
      title: " ToT - Training of Trainers",
      description: "რეგისტრაცია დასრულებულია",
      image: training,
    },
    {
      id: 7,
      title: "Blockchain",
      description: "რეგისტრაცია დასრულებულია",
      image: blockchain,
    },
    {
      id: 8,
      title: "DevOps",
      description: "რეგისტრაცია დასრულებულია",
      image: devops,
    },
    {
      id: 9,
      title: "Information Security Governance",
      description: "რეგისტრაცია დასრულებულია",
      image: security,
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
