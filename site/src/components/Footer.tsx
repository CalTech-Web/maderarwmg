import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.webp"
                alt="Madera RWMG Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain brightness-0 invert"
              />
              <h3 className="text-white font-bold text-lg">Madera RWMG</h3>
            </div>
            <p className="text-sm leading-relaxed">
              Facilitating coordination, collaboration, and communication for
              comprehensive water resource management in the Madera Region.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/accomplishments" className="hover:text-white transition">
                  Accomplishments
                </Link>
              </li>
              <li>
                <Link href="/board-meeting" className="hover:text-white transition">
                  Board Meeting
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/voting-members" className="hover:text-white transition">
                  Voting Members
                </Link>
              </li>
              <li>
                <Link href="/links" className="hover:text-white transition">
                  Useful Links
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>5668 W Lamona Ave, Fresno, CA 93722</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" />
                <a href="tel:5597308435" className="hover:text-white transition">
                  (559) 730-8435
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a
                  href="mailto:jacob_roberson@outlook.com"
                  className="hover:text-white transition"
                >
                  jacob_roberson@outlook.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>&copy; 2026 Regional Water Management Group, Madera County</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition">
              Terms of Service
            </Link>
            <a
              href="https://caltechweb.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              Powered by CalTech Web
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
