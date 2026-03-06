"use client";

import { motion } from "framer-motion";
import { Droplets, Shield, Leaf, Waves } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const projectAreas = [
  {
    icon: Droplets,
    title: "Water Supply Management",
    description:
      "Projects focused on ensuring reliable and affordable water supplies for both agricultural and municipal users across the Madera Region.",
    color: "blue",
  },
  {
    icon: Shield,
    title: "Flood Management",
    description:
      "Infrastructure and planning projects that reduce flood risk while capturing stormwater for beneficial reuse and groundwater recharge.",
    color: "sky",
  },
  {
    icon: Leaf,
    title: "Environmental Restoration",
    description:
      "Habitat restoration and ecosystem enhancement projects that balance water resource development with environmental stewardship.",
    color: "green",
  },
  {
    icon: Waves,
    title: "Water Quality",
    description:
      "Projects that protect and improve water quality for drinking water, agricultural use, and environmental health throughout the region.",
    color: "cyan",
  },
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  blue: { bg: "bg-blue-50", icon: "bg-blue-100 text-blue-700", border: "border-blue-100" },
  sky: { bg: "bg-sky-50", icon: "bg-sky-100 text-sky-700", border: "border-sky-100" },
  green: { bg: "bg-green-50", icon: "bg-green-100 text-green-700", border: "border-green-100" },
  cyan: { bg: "bg-cyan-50", icon: "bg-cyan-100 text-cyan-700", border: "border-cyan-100" },
};

export default function ProjectsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              Projects
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-blue-100 max-w-2xl">
              The RWMG identifies and supports multi-benefit water resource projects
              across the Madera Region, funded through state grant programs.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-12">
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
                Through the IRWM planning process, the RWMG coordinates multi-benefit
                projects that address water supply, flood management, water quality, and
                environmental needs. These projects are prioritized based on regional
                impact and benefit to disadvantaged communities.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid sm:grid-cols-2 gap-6 mb-12"
            >
              {projectAreas.map((area) => {
                const Icon = area.icon;
                const colors = colorMap[area.color];
                return (
                  <div
                    key={area.title}
                    className={`${colors.bg} rounded-xl p-6 border ${colors.border}`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg ${colors.icon} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={fadeUp}>
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">
                  $9.4 Million in Implementation Grants
                </h3>
                <p className="text-sm text-blue-800">
                  The Round 1 Implementation Grant awarded $9,413,947 for water
                  resource projects in the Madera Region. The RWMG continues to pursue
                  additional grant funding through updated IRWM Plan submissions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
