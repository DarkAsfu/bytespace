// Central route builders — sob page-e hardcoded string na likhe eigula use koro.
export const routes = {
  home: () => "/",
  login: () => "/login",
  register: () => "/register",
  search: (q?: string) => (q ? `/search?q=${encodeURIComponent(q)}` : "/search"),
  courseDetails: (courseId: string) => `/courses/${courseId}`,
  courseLessons: (courseId: string) => `/courses/${courseId}/lessons`,
  courseReviews: (courseId: string) => `/courses/${courseId}/reviews`,
  creatorProfile: (creatorId: string) => `/creators/${creatorId}`,
} as const;
