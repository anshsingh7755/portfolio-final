"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsDataMap } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useCursor } from "@/context/cursor-context";

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

export default function Skills() {
  const { ref } = useSectionInView("Skills");
  const { skillEnter, makeDefault } = useCursor();
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-[0.7rem] text-lg text-gray-800">
        {skillsDataMap.map((skill, index) => (
          <motion.li
            onMouseEnter={() => skillEnter(skill.text)}
            onMouseLeave={() => makeDefault()}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.5 },
              backgroundColor: "#6b7280",
              color: skill.color,
            }}
            style={{
              color: skill.color,
            }}
            className={`bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex flex-row justify-center items-center `}
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="mr-2">{skill.icon}</div>
            <p>{skill.text}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
