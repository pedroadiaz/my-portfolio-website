"use client";

import React from "react";
import Image from "next/image";
import SectionHeading from "./section-heading";
import { certificationsData, skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Cerfications() {
  const { ref } = useSectionInView("Certifications");

  return (
    <section
      id="certifications"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Certifications</SectionHeading>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                type: "tween",
                duration: 0.2,
            }}
        >
        {certificationsData.map((skill, index) => (
            <Image
                src={skill.imageUrl}
                alt={skill.title}
                width="192"
                height="192"
                quality="95"
                priority={true}
                className="h-28 w-28 rounded-full object-cover shadow-xl flex items-center gap-2 "
            />
        ))}
        </motion.div>
    </section>
  );
}
