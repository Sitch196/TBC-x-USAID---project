import React from "react";
import "./CoursesSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { courses } from "../../helper/courses_list";

export default function CoursesSection() {
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
