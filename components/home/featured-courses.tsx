"use client";

import { useState } from "react";
import { CategoryChips } from "@/components/home/category-chips";
import { CourseCard, type Course } from "@/components/home/course-card";
import { SectionHeader } from "@/components/home/section-header";

const COURSES: Course[] = [
  {
    id: "learn-figma-from-basic",
    title: "Learn Figma from Basic",
    author: "pumpari studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 10 mins",
    comments: 99,
    level: "Beginner",
    students: "34+",
    price: "$25",
    priceUnit: "lifetime",
    image: "/images/courses/1.jpg",
    categories: ["UI/UX Design", "Graphic Design", "Digital Illustration"],
  },
  {
    id: "build-digital-asset",
    title: "Build Digital Asset",
    author: "pumpari studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 30 mins",
    comments: 99,
    level: "Beginner",
    students: "33+",
    price: "$25",
    priceUnit: "lifetime",
    image: "/images/courses/2.jpg",
    categories: ["Graphic Design", "Digital Illustration", "Animation"],
  },
  {
    id: "the-power-of-big-data",
    title: "the Power of Big Data",
    author: "pumpari studio",
    rating: 4.5,
    lessons: 21,
    duration: "4 hours 10 mins",
    comments: 25,
    level: "Beginner",
    students: "3+",
    price: "$25",
    priceUnit: "lifetime",
    image: "/images/courses/3.jpg",
    categories: ["Data Science", "Marketing"],
  },
  {
    id: "balancing-productivity",
    title: "Balancing Productivity and Focus",
    author: "pumpari studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 10 mins",
    comments: 99,
    level: "Beginner",
    students: "32+",
    price: "$25",
    priceUnit: "lifetime",
    image: "/images/courses/4.jpg",
    categories: ["Productivity", "Web Development"],
  },
  {
    id: "mastering-money-management",
    title: "Mastering Money Management",
    author: "pumpari studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 10 mins",
    comments: 99,
    level: "Beginner",
    students: "24+",
    price: "$25",
    priceUnit: "lifetime",
    image: "/images/courses/5.jpg",
    categories: ["Marketing", "Freelance & Entrepreneurship"],
  },
  {
    id: "from-idea-to-startup",
    title: "From Idea to Startup Success",
    author: "pumpari studio",
    rating: 4.5,
    lessons: 17,
    duration: "2 hours 10 mins",
    comments: 99,
    level: "Beginner",
    students: "24+",
    price: "$25",
    priceUnit: "lifetime",
    image: "/images/courses/6.jpg",
    categories: ["Freelance & Entrepreneurship", "Marketing", "Social Media"],
  },
];

export function FeaturedCourses() {
  const [active, setActive] = useState("Featured");

  const visible =
    active === "Featured"
      ? COURSES
      : COURSES.filter((course) => course.categories.includes(active));

  return (
    <section className="flex w-full flex-col bg-white px-5 pb-20 sm:px-8 lg:px-[120px] lg:pt-4">
      <div className="mx-auto flex w-full max-w-[1199px] flex-col gap-10">
        <SectionHeader
          title="Discover Your Passion, Build Your Skills"
          description="At ByteSpace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        <CategoryChips active={active} onSelect={setActive} />

        <div className="flex w-full flex-wrap items-start content-start gap-10">
          {visible.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
          {visible.length === 0 && (
            <p className="w-full py-10 text-center font-satoshi text-[15px] text-shuttle-400">
              No courses in this category yet.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
