"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Physics</span>, I decided to pursue my
        passion for programming. I took some night classes in programming and
        learned{" "}
        <span className="font-medium">
          software development. Back when I learned it, there was no concept of
          full-stack vs front-end vs backend.
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB and any one of the many SQL databases
        </span>
        . I started my career as a C#/.Net developer with SQL Server. I am
        always looking to learn new technologies. I am learning{" "}
        <span className="font-medium">Python and Generative AI.</span>. I am
        currently looking for a{" "}
        <span className="font-medium">freelance position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">{"When I'm not coding"}</span>, I enjoy the
        intracacies and complexities of playing poker and watching soccer on the
        weekends. I also enjoy{" "}
        <span className="font-medium">
          learning new things such as art history, languages and European
          history
        </span>
        .
      </p>
    </motion.section>
  );
}
