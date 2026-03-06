"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const timeline = [
  {
    year: "2006",
    title: "IRWM Planning Begins",
    description:
      "The County of Madera began the development process for an Integrated Regional Water Management Plan to manage water resources across the region.",
  },
  {
    year: "April 2008",
    title: "IRWM Plan Completed (Prop 50)",
    description:
      "The first IRWM Plan was completed for the Madera Region under Proposition 50 Standards, covering both foothill and valley areas and creating many new partnerships.",
  },
  {
    year: "November 2009",
    title: "Formation Committee Established",
    description:
      "The Madera County Water Advisory Commission created the Formation Committee to establish the Regional Water Management Group.",
  },
  {
    year: "January 2010",
    title: "RWMG Officially Formed",
    description:
      "The Regional Water Management Group for the Madera Region was officially formed, creating a governance structure for coordinated water management.",
  },
  {
    year: "2011/2012",
    title: "Round 1 Implementation Grant",
    description:
      "Awarded the full amount of $9,413,947 in implementation funding to support priority water resource projects across the region.",
    highlight: true,
  },
  {
    year: "2014",
    title: "Plan Update (Prop 84)",
    description:
      "The IRWM Plan was updated to meet Proposition 84 Standards, reflecting new requirements and expanding the scope of regional water management.",
  },
  {
    year: "2019",
    title: "Plan Update (Prop 1)",
    description:
      "The most recent IRWM Plan Update was completed to meet the 2016 Proposition 1 Standards, ensuring the region remains eligible for state funding.",
  },
];

export default function AccomplishmentsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              Accomplishments
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-blue-100 max-w-2xl">
              A timeline of milestones in regional water management for the Madera
              Region, from initial planning through over $9.4 million in grant funding.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-blue-200 hidden sm:block" />

            <div className="space-y-8">
              {timeline.map((item) => (
                <motion.div
                  key={item.year}
                  variants={fadeUp}
                  className="relative flex gap-6"
                >
                  <div className="hidden sm:flex shrink-0 w-12 h-12 rounded-full bg-blue-100 text-blue-700 items-center justify-center z-10">
                    {item.highlight ? (
                      <Award className="w-5 h-5" />
                    ) : (
                      <CheckCircle className="w-5 h-5" />
                    )}
                  </div>
                  <div
                    className={`flex-1 rounded-xl p-6 border ${
                      item.highlight
                        ? "bg-blue-50 border-blue-200"
                        : "bg-gray-50 border-gray-100"
                    }`}
                  >
                    <span
                      className={`text-sm font-semibold ${
                        item.highlight ? "text-blue-700" : "text-blue-600"
                      }`}
                    >
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 mt-1">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    {item.highlight && (
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                        <Award className="w-4 h-4" />
                        $9,413,947 Awarded
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
