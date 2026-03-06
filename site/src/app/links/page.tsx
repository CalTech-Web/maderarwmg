"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const sections = [
  {
    title: "Federal & State Water Agencies",
    links: [
      {
        name: "Bureau of Reclamation - Central Valley Project",
        url: "https://www.usbr.gov/mp/cvp/",
      },
      {
        name: "Department of Water Resources",
        url: "https://water.ca.gov",
      },
      {
        name: "State Water Resources Control Board",
        url: "https://www.waterboards.ca.gov/",
      },
    ],
  },
  {
    title: "Water Policy & Research",
    links: [
      {
        name: "California Water Institute",
        url: "http://www.californiawater.org/",
      },
      {
        name: "Public Policy Institute - Water Policy Center",
        url: "https://www.ppic.org/water/",
      },
      {
        name: "Roundtable of Regions",
        url: "https://www.roundtableofregions.org/",
      },
    ],
  },
  {
    title: "Local Water Management",
    links: [
      {
        name: "SGMA Subbasins",
        url: "https://www.maderacountywater.com/subbasins/",
      },
      {
        name: "Madera Subbasin",
        url: "https://www.maderacountywater.com/madera-subbasin/",
      },
      {
        name: "Chowchilla Subbasin",
        url: "https://www.maderacountywater.com/chowchilla-subbasin/",
      },
      {
        name: "Delta-Mendota Subbasin",
        url: "https://www.maderacountywater.com/madera-subbasin/",
      },
      {
        name: "County GSAs",
        url: "https://www.maderacountywater.com/county-gsas/",
      },
      {
        name: "Madera County Farm Bureau",
        url: "https://www.maderafb.com/",
      },
    ],
  },
];

export default function LinksPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              Useful Links
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-blue-100 max-w-2xl">
              Resources related to water management, regional agencies, and water
              policy in California.
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
            className="space-y-12"
          >
            {sections.map((section) => (
              <motion.div key={section.title} variants={fadeUp}>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100 hover:shadow-md hover:border-blue-200 transition group"
                    >
                      <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition">
                        {link.name}
                      </span>
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 shrink-0 transition" />
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
