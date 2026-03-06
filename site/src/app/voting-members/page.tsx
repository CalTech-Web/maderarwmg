"use client";

import { motion } from "framer-motion";
import { Users, Building2, Landmark, TreePine } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const votingMembers = [
  { name: "Chowchilla Water District", type: "Water District", icon: Building2 },
  { name: "City of Madera", type: "Municipality", icon: Landmark },
  { name: "Gravelly Ford Water District", type: "Water District", icon: Building2 },
  { name: "Madera County", type: "County Government", icon: Landmark },
  { name: "City of Chowchilla", type: "Municipality", icon: Landmark },
  { name: "Madera Water District", type: "Water District", icon: Building2 },
  { name: "Madera Irrigation District", type: "Irrigation District", icon: Building2 },
  { name: "Root Creek Water District", type: "Water District", icon: Building2 },
  { name: "MAWA (Madera Ag Water Association)", type: "Agricultural", icon: TreePine },
  { name: "Triangle T Water District", type: "Water District", icon: Building2 },
  { name: "Yosemite Springs Park Utility Company", type: "Utility", icon: Building2 },
];

const dacMembers = [
  { name: "North Fork Rancheria of Mono Indians", type: "Tribal" },
  { name: "Self Help Enterprises", type: "Community Organization" },
  { name: "Fairmead Community and Friends", type: "Community Organization" },
  { name: "Madera Valley Water Company", type: "Water Company" },
  { name: "Indian Lakes", type: "Community" },
  { name: "Coarsegold RCD", type: "Resource Conservation" },
  { name: "Madera/Chowchilla RCD", type: "Resource Conservation" },
];

export default function VotingMembersPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              Voting Members
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-blue-100 max-w-2xl">
              The RWMG brings together water districts, cities, tribal communities, and
              disadvantaged community organizations for collaborative water management.
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
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Primary Voting Members
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
            >
              {votingMembers.map((member) => {
                const Icon = member.icon;
                return (
                  <div
                    key={member.name}
                    className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:shadow-md transition"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm">
                          {member.name}
                        </h3>
                        <span className="text-xs text-gray-500">{member.type}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              DAC & Tribal Members
            </motion.h2>
            <motion.div
              variants={fadeUp}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {dacMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-green-50 rounded-xl p-5 border border-green-100 hover:shadow-md transition"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {member.name}
                      </h3>
                      <span className="text-xs text-gray-500">{member.type}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-12">
              <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                <h3 className="font-bold text-blue-900 mb-2">Interested in Joining?</h3>
                <p className="text-sm text-blue-800 mb-4">
                  The RWMG welcomes new member organizations. Download the membership
                  packet or DAC application to get started.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://maderarwmg.com/wp-content/uploads/2025/07/MaderaRWMG_NewMemberPacketFile.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition"
                  >
                    Member Packet
                  </a>
                  <a
                    href="https://maderarwmg.com/wp-content/uploads/2025/04/MaderaRWMG_DAC_Application.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-700 text-white text-sm font-medium rounded-lg hover:bg-green-800 transition"
                  >
                    DAC Application
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
