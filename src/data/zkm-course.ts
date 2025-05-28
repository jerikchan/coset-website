import { CourseData } from "../types/course"

export const zkmCourseData: CourseData = {
  title: "ZKM 课程",
  episodes: [
    "ZKM 介绍与基础概念",
    "ZKM 架构深度解析",
    "ZKM 实践应用",
    "ZKM 性能优化",
    "ZKM 生态系统"
  ],
  speakers: [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve"
  ],
  videoLinks: [
    "https://www.youtube.com/embed/example1",
    "https://www.youtube.com/embed/example2",
    "https://www.youtube.com/embed/example3",
    "https://www.youtube.com/embed/example4",
    "https://www.youtube.com/embed/example5"
  ],
  slideLinks: [
    "https://github.com/example/zkm-course/blob/main/lesson1/slides.pdf",
    "https://github.com/example/zkm-course/blob/main/lesson2/slides.pdf",
    null,
    "https://github.com/example/zkm-course/blob/main/lesson4/slides.pdf",
    null
  ],
  resourceLinks: [
    [
      { title: "ZKM 白皮书", url: "https://example.com/zkm-whitepaper" },
      { title: "ZKM 技术文档", url: "https://docs.zkm.io" }
    ],
    [
      { title: "ZKM 架构指南", url: "https://example.com/zkm-architecture" },
      { title: "ZKM 开发者文档", url: "https://dev.zkm.io" }
    ],
    [
      { title: "ZKM 实践案例", url: "https://example.com/zkm-cases" }
    ],
    [
      { title: "ZKM 性能基准测试", url: "https://example.com/zkm-benchmarks" }
    ],
    [
      { title: "ZKM 生态项目", url: "https://ecosystem.zkm.io" }
    ]
  ],
  assignments: [
    {
      title: "第一周作业",
      description: "ZKM 基础概念理解与实践",
      url: "https://github.com/example/zkm-course/discussions/1"
    },
    {
      title: "第二周作业", 
      description: "ZKM 架构分析与设计",
      url: "https://github.com/example/zkm-course/discussions/2"
    },
    {
      title: "期末项目",
      description: "基于 ZKM 的完整应用开发",
      url: "https://github.com/example/zkm-course/discussions/3"
    }
  ],
  sponsors: [
    {
      name: "ZKM Foundation",
      logo: "/images/sponsors/zkm-foundation.png",
      alt: "ZKM Foundation Sponsor"
    },
    {
      name: "Crypto Labs",
      logo: "/images/sponsors/crypto-labs.png", 
      alt: "Crypto Labs Sponsor"
    }
  ],
  githubBaseUrl: "https://github.com/example/zkm-course/tree/main",
  discussionUrl: "https://github.com/example/zkm-course/discussions"
}; 