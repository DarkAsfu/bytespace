export const routes = {
  home: () => "/",
  login: () => "/login",
  register: () => "/register",
  courses: () => "/courses",
  creators: () => "/creators",
  search: (q?: string) => (q ? `/search?q=${encodeURIComponent(q)}` : "/search"),
  courseDetails: (courseId: string) => `/courses/${courseId}`,
  courseLessons: (courseId: string) => `/courses/${courseId}/lessons`,
  courseReviews: (courseId: string) => `/courses/${courseId}/reviews`,
  creatorProfile: (creatorId: string) => `/creators/${creatorId}`,
} as const;
