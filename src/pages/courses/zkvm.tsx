import React from "react"
import Course from "../../components/Course"
import { coursesNavigationItems } from "../../config/navigation"
import { coursesFooterConfig } from "../../config/footer"
import { zkvmCourseData } from "../../data/zkvm-course"

export default function CourseZkvm() {
  return (
    <Course 
      courseData={zkvmCourseData}
      navigationItems={coursesNavigationItems}
      footerConfig={coursesFooterConfig}
    />
  )
}