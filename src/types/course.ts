export interface Resource {
  title: string;
  url: string;
}

export interface Assignment {
  title: string;
  description: string;
  url: string;
}

export interface Sponsor {
  name: string;
  logo: string;
  alt: string;
}

export interface CourseData {
  title: string;
  episodes: string[];
  speakers: string[];
  videoLinks: string[];
  slideLinks: (string | null)[];
  resourceLinks: Resource[][];
  assignments: Assignment[];
  sponsors: Sponsor[];
  githubBaseUrl: string;
  discussionUrl: string;
}

export interface CourseProps {
  courseData: CourseData;
  navigationItems: any[];
  footerConfig: any;
} 