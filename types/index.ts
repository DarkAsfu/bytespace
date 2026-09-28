export type CourseId = string;
export type CreatorId = string;

export interface Course {
  id: CourseId;
  slug: string;
  title: string;
  creatorId: CreatorId;
}

export interface Creator {
  id: CreatorId;
  name: string;
  avatarUrl?: string;
}
