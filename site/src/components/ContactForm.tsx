"use client";

import { useRef, useState, useEffect } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: { sitekey: string; callback: (token: string) => void }
      ) => string;
      reset: (widgetId: string) => void;
    };
  }
}

export function ContactForm() {
  const turnstileRef = useRef<HTMLDivElement>(null);
  const [turnstileToken, setTurnstileToken] = useState("");
  const widgetIdRef = useRef<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.turnstile && turnstileRef.current && !widgetIdRef.current) {
        widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
          sitekey: "0x4AAAAAACyyxWiwuD5JXCdv",
          callback: (token: string) => setTurnstileToken(token),
        });
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const data = {
          site: "maderarwmg.com",
          name: (form.elements.namedItem("name") as HTMLInputElement).value,
          email: (form.elements.namedItem("email") as HTMLInputElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement)
            .value,
          source: "contact-page",
          turnstileToken,
        };
        try {
          await fetch("https://forms.caltechweb.com/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
          });
          form.reset();
          setTurnstileToken("");
          if (window.turnstile && widgetIdRef.current) {
            window.turnstile.reset(widgetIdRef.current);
          }
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
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
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
        <div ref={turnstileRef} className="mt-4"></div>

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
