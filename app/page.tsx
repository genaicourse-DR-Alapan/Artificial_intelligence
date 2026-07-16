import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Vision from "@/components/sections/Vision";
import CourseInfo from "@/components/sections/CourseInfo";
import LearningJourney from "@/components/sections/LearningJourney";
import Modules from "@/components/sections/Modules";
import WeeklyTimeline from "@/components/sections/WeeklyTimeline";
import FacultyAssessment from "@/components/sections/FacultyAssessment";
import Resources from "@/components/sections/Resources";
import Footer from "@/components/layout/Footer";
import LearningOutcomes from "@/components/sections/LearningOutcomes";

export default function Home() {
  return (
   <>
      <Navbar />
      <Hero />
      <Vision />
      <CourseInfo />
      <LearningJourney />
      <LearningOutcomes />
      <Modules />
      <WeeklyTimeline />
      <FacultyAssessment />
      <Resources />
      <Footer />
    </>
  );
}