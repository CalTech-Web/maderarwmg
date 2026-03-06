"use client";

import { motion } from "framer-motion";
import {
  Droplets,
  Users,
  FileText,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Download,
  ArrowRight,
  Award,
  Shield,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { WaterCanvas } from "@/components/WaterCanvas";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const stats = [
  { value: "$9.4M+", label: "In Grants Awarded" },
  { value: "2006", label: "Planning Began" },
  { value: "18+", label: "Member Organizations" },
  { value: "3", label: "IRWM Plan Versions" },
];

const features = [
  {
    icon: Droplets,
    title: "Water Resource Planning",
    description:
      "Comprehensive IRWM plans addressing supply, flood management, water quality, and environmental restoration across the Madera Region.",
  },
  {
    icon: Users,
    title: "Regional Coordination",
    description:
      "Bringing together water districts, cities, tribal communities, and disadvantaged communities for collaborative water management.",
  },
  {
    icon: Award,
    title: "Grant Funding",
    description:
      "Securing state and federal grants for water resource projects. Over $9.4 million awarded through Proposition-funded programs.",
  },
  {
    icon: Shield,
    title: "Community Representation",
    description:
      "Inclusive governance with dedicated seats for tribal nations and disadvantaged community organizations.",
  },
];

const documents = [
  {
    title: "IRWM Plan (2019 Prop 1 Update)",
    href: "https://maderarwmg.com/wp-content/uploads/2023/01/Madera-Integrated-Regional-Water-Management-Plan-2019-Prop-1-Update-1.pdf",
  },
  {
    title: "Storm Water Resource Plan",
    href: "https://maderarwmg.com/wp-content/uploads/2023/03/FINAL_MaderaSWRP_171228.pdf",
  },
  {
    title: "New Member Packet",
    href: "https://maderarwmg.com/wp-content/uploads/2025/07/MaderaRWMG_NewMemberPacketFile.pdf",
  },
  {
    title: "DAC Membership Application",
    href: "https://maderarwmg.com/wp-content/uploads/2025/04/MaderaRWMG_DAC_Application.pdf",
  },
  {
    title: "RWMG At-A-Glance Flyer",
    href: "https://maderarwmg.com/wp-content/uploads/2022/10/RWMG-At-A-Glance-Flyer.pdf",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 text-white">
        <Image
          src="/images/hero-landscape.jpg"
          alt="California agricultural landscape"
          fill
          className="object-cover opacity-20"
          priority
        />
        <WaterCanvas />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-700/50 rounded-full mb-6 tracking-wide uppercase">
                Madera Region, California
              </span>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Regional Water Management Group
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed"
            >
              Facilitating coordination, collaboration, and communication for
              comprehensive water resource management in the Madera Region -
              ensuring affordable water supplies now and in the future.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                href="/#what-is"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition"
              >
                Contact Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-blue-800">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Is IRWM */}
      <section id="what-is" className="bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="max-w-3xl mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                What Is an Integrated Regional Water Management Plan?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                An IRWM Plan is a voluntary and comprehensive non-regulatory planning
                document prepared on a region-wide scale. It identifies broadly
                supported priority water resource projects and programs with multiple
                benefits.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
                    >
                      <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="mission-statement" className="bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.div variants={fadeUp}>
                <Globe className="w-12 h-12 text-blue-600 mb-6" />
              </motion.div>
              <motion.h2
                variants={fadeUp}
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
              >
                Our Mission
              </motion.h2>
              <motion.p
                variants={fadeUp}
                className="text-lg text-gray-600 leading-relaxed"
              >
                The RWMG will facilitate future coordination, collaboration, and
                communication for comprehensive management of water resources in the
                Madera Region. We ensure governance, development, planning, funding,
                and implementation to provide optimal and affordable water supplies
                and facilities now and in the future.
              </motion.p>
            </div>
            <motion.div variants={fadeUp} className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/water-river.jpg"
                  alt="River flowing through the Madera Region"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[350px]"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Image Banner */}
      <section className="relative h-64 sm:h-80">
        <Image
          src="/images/dam-water.jpg"
          alt="Water reservoir and dam infrastructure"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/60 flex items-center justify-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center text-white px-4"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Protecting Our Water Future
            </h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Over $9.4 million in grants awarded for regional water resource projects
              serving the Madera community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Documents */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-gray-900 mb-8"
            >
              Key Documents
            </motion.h2>
            <motion.div variants={fadeUp} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {documents.map((doc) => (
                <a
                  key={doc.title}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 group-hover:bg-blue-200 transition">
                    <Download className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition">
                    {doc.title}
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-3 gap-6"
          >
            <motion.div variants={fadeUp}>
              <Link
                href="/accomplishments"
                className="block rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 group h-64 flex flex-col justify-end bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-700"
              >
                <FileText className="w-8 h-8 mb-3 drop-shadow-md" />
                <h3 className="text-lg font-bold mb-1">Accomplishments</h3>
                <p className="text-sm text-blue-100">
                  Milestones and funded projects since 2006.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                  View all <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                href="/board-meeting"
                className="block rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 group h-64 flex flex-col justify-end bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-600"
              >
                <Calendar className="w-8 h-8 mb-3 drop-shadow-md" />
                <h3 className="text-lg font-bold mb-1">Board Meetings</h3>
                <p className="text-sm text-cyan-100">
                  Monthly on the 4th Monday at 1:30 PM.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                  View schedule <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
            <motion.div variants={fadeUp}>
              <Link
                href="/voting-members"
                className="block rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl transition-shadow duration-300 group h-64 flex flex-col justify-end bg-gradient-to-br from-sky-400 via-blue-500 to-indigo-600"
              >
                <Users className="w-8 h-8 mb-3 drop-shadow-md" />
                <h3 className="text-lg font-bold mb-1">Voting Members</h3>
                <p className="text-sm text-sky-100">
                  18+ water districts, cities, and tribal communities.
                </p>
                <span className="inline-flex items-center gap-1 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                  View members <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact-us" className="bg-gray-50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold text-gray-900 mb-8"
            >
              Contact Us
            </motion.h2>
            <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">5668 W Lamona Ave, Fresno, CA 93722</p>
                    <a
                      href="https://maps.app.goo.gl/Tv8gJvij8KUsKsa48"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:underline mt-1 inline-block"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a
                      href="tel:5597308435"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      (559) 730-8435
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a
                      href="mailto:jacob_roberson@outlook.com"
                      className="text-gray-600 hover:text-blue-600 transition"
                    >
                      jacob_roberson@outlook.com
                    </a>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 mt-4">
                  <h3 className="font-semibold text-blue-900 mb-1">Board Meetings</h3>
                  <p className="text-sm text-blue-800">
                    4th Monday of each month at 1:30 PM via Zoom and telephone
                    conference.
                  </p>
                </div>
              </div>

              <ContactForm />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = {
          site: "maderarwmg.com",
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
          source: "contact-page",
        };
        try {
          await fetch("https://forms.caltechweb.com/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          form.reset();
          alert("Message sent successfully!");
        } catch {
          alert("Failed to send message. Please try again.");
        }
      }}
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
    >
      <h3 className="font-semibold text-gray-900 mb-4">Send us a message</h3>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-none"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2.5 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}
