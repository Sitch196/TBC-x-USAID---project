import React from "react";
import Header from "./components/header/Header";
import HeroPage from "./components/heroPage/HeroPage";
import CoursesSection from "./components/courses/CoursesSection";
import Slider from "./components/slider/Slider";
import Accordion from "./components/accordion/Accordion";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <main>
      <Header />
      <HeroPage />
      <CoursesSection />
      <Slider />
      <Accordion />
      <Footer />
    </main>
  );
}
