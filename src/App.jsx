import React from "react";
import Header from "./components/header/Header";
import HeroPage from "./components/heroPage/HeroPage";
import CoursesSection from "./components/courses/CoursesSection";

export default function App() {
  return (
    <div>
      <Header />
      <HeroPage />
      <CoursesSection />
    </div>
  );
}
