"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
            <Image
              src="/images/logo.webp"
              alt="Madera RWMG Logo"
              width={48}
              height={48}
              className="w-12 h-12 object-contain"
            />
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
