"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const aboutLinks = [
  { label: "What Is IRWM Plan?", href: "/#what-is" },
  { label: "Mission Statement", href: "/#mission-statement" },
  { label: "Voting Members", href: "/voting-members" },
  { label: "Useful Links", href: "/links" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 text-white"
                fill="currentColor"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <span className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
              Madera RWMG
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-md hover:bg-blue-50 transition"
            >
              Home
            </Link>

            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-md hover:bg-blue-50 transition flex items-center gap-1">
                About Us
                <ChevronDown className="w-3.5 h-3.5" />
              </button>
              <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px]">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/accomplishments"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-md hover:bg-blue-50 transition"
            >
              Accomplishments
            </Link>
            <Link
              href="/board-meeting"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-md hover:bg-blue-50 transition"
            >
              Board Meeting
            </Link>
            <Link
              href="/projects"
              className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 rounded-md hover:bg-blue-50 transition"
            >
              Projects
            </Link>
            <Link
              href="/#contact-us"
              className="ml-2 px-4 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 rounded-lg transition"
            >
              Contact Us
            </Link>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Home
            </Link>
            <button
              onClick={() => setAboutOpen(!aboutOpen)}
              className="w-full text-left px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded-md flex items-center justify-between"
            >
              About Us
              <ChevronDown
                className={`w-4 h-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`}
              />
            </button>
            {aboutOpen && (
              <div className="pl-4 space-y-1">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 rounded-md"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            <Link
              href="/accomplishments"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Accomplishments
            </Link>
            <Link
              href="/board-meeting"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Board Meeting
            </Link>
            <Link
              href="/projects"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 rounded-md"
            >
              Projects
            </Link>
            <Link
              href="/#contact-us"
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-md text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
