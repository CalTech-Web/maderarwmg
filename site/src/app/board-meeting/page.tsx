"use client";

import { motion } from "framer-motion";
import { Calendar, FileText, Clock, Video } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const meetings = [
  {
    date: "January 2026",
    agenda:
      "https://maderarwmg.com/wp-content/uploads/2026/01/MaderaRWMG_Agenda_January2026.pdf",
    minutes: null,
  },
  {
    date: "November 2025",
    agenda:
      "https://maderarwmg.com/wp-content/uploads/2025/11/MaderaRWMG_Agenda_November2025.pdf",
    minutes:
      "https://maderarwmg.com/wp-content/uploads/2026/01/MaderaRWMG_Minutes_November2025.pdf",
  },
  {
    date: "September 2025",
    agenda:
      "https://maderarwmg.com/wp-content/uploads/2025/09/MaderaRWMG_Agenda_September2025.pdf",
    minutes:
      "https://maderarwmg.com/wp-content/uploads/2025/11/MaderaRWMG_Minutes_September2025.pdf",
  },
  {
    date: "July 2025",
    agenda:
      "https://maderarwmg.com/wp-content/uploads/2025/07/MaderaRWMG_Agenda_July2025.pdf",
    minutes:
      "https://maderarwmg.com/wp-content/uploads/2025/09/MaderaRWMG_Minutes_July2025.pdf",
  },
];

export default function BoardMeetingPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-bold mb-4"
            >
              Board Meetings
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-blue-100 max-w-2xl">
              The RWMG meets monthly to coordinate regional water management efforts.
              Access agendas, minutes, and meeting details below.
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
            {/* Meeting Info */}
            <motion.div
              variants={fadeUp}
              className="grid sm:grid-cols-3 gap-4 mb-12"
            >
              <div className="bg-blue-50 rounded-xl p-5 flex items-start gap-3">
                <Calendar className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900">Schedule</h3>
                  <p className="text-sm text-blue-800 mt-1">
                    4th Monday of each month
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 flex items-start gap-3">
                <Clock className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900">Time</h3>
                  <p className="text-sm text-blue-800 mt-1">1:30 PM</p>
                </div>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 flex items-start gap-3">
                <Video className="w-6 h-6 text-blue-700 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-900">Format</h3>
                  <p className="text-sm text-blue-800 mt-1">
                    Zoom and telephone conference
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Meeting Materials */}
            <motion.h2
              variants={fadeUp}
              className="text-2xl font-bold text-gray-900 mb-6"
            >
              Meeting Materials
            </motion.h2>
            <motion.div variants={fadeUp} className="space-y-4">
              {meetings.map((meeting) => (
                <div
                  key={meeting.date}
                  className="bg-gray-50 rounded-xl p-5 border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-gray-900">
                      {meeting.date}
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={meeting.agenda}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition"
                    >
                      <FileText className="w-4 h-4" />
                      Agenda
                    </a>
                    {meeting.minutes ? (
                      <a
                        href={meeting.minutes}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded-lg hover:bg-gray-300 transition"
                      >
                        <FileText className="w-4 h-4" />
                        Minutes
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-400 text-sm font-medium rounded-lg cursor-default">
                        <FileText className="w-4 h-4" />
                        Minutes Pending
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
