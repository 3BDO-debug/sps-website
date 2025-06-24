"use client";
import React, { Suspense } from "react";
// sections
import Projects from "@/sections/projectsPage/Projects";

function page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Projects />
    </Suspense>
  );
}

export default page;
