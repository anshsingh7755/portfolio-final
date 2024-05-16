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
        Hey there, I'm Jash Agrawal, your friendly neighborhood{" "}
        <span className="font-medium italic underline">
          Full Stack Developer
        </span>
        . I'm passionate about
        <span className="font-medium italic">
          {" "}
          JavaScript, React, Redux, NodeJs{" "}
          <span className="font-normal">and</span> SQL
        </span>
        , and I've got a <span className="font-medium">Bachelor's</span> in{" "}
        <span className="font-medium">Computer Engineering</span> from the{" "}
        <span className="font-medium">University Of Mumbai</span> to back it up!
      </p>
      <p className="mb-3">
        I <span className="underline italic">thrive</span> on{" "}
        <span className="italic">cracking codes</span> and solving problems with
        a smile. Currently, I'm cooking up something special – an app that'll
        revolutionize how businesses and customers interact. Imagine businesses
        listing their stores on our platform, turning our app into their own
        e-commerce playground.{" "}
        <span className="italic font-medium">Shopping</span>,{" "}
        <span className="italic font-medium">booking</span>, and{" "}
        <span className="italic font-medium">learning</span>, all in one spot –
        that's convenience at its finest!
      </p>
      <p className="mb-3">
        When I'm not glued to my screen, you'll find me{" "}
        <span className="italic">kicking a ball</span>,{" "}
        <span className="italic">hitting the gym</span>, or{" "}
        <span className="italic">diving into some serious gaming</span>.{" "}
        <span className="italic">Work hard, play hard</span> – that's my motto!
      </p>
      <p>
        Ready to join forces and bring some digital dreams to life? <br />
        <a href="#contact" className="underline italic">
          Let's chat and sprinkle some magic into the digital world!{" "}
        </a>
      </p>
    </motion.section>
  );
}
