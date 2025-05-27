import React from "react"
import Course from "../../components/Course"
import { coursesNavigationItems } from "../../config/navigation"
import { coursesFooterConfig } from "../../config/footer"
import { zkmCourseData } from "../../data/zkm-course"

export default function CourseZkm() {
  return (
    <Course 
      courseData={zkmCourseData}
      navigationItems={coursesNavigationItems}
      footerConfig={coursesFooterConfig}
    />
  )
} 