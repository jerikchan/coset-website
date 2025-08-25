import React from "react"
import Course from "../../components/Course"
import { coursesNavigationItems } from "../../config/navigation"
import { coursesFooterConfig } from "../../config/footer"
import { latticeCourseData } from "../../data/lattice-course"

export default function CourseLattice() {
  return (
    <Course 
      courseData={latticeCourseData}
      navigationItems={coursesNavigationItems}
      footerConfig={coursesFooterConfig}
    />
  )
}


