"use client";

import { Send } from "lucide-react";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="fullName"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Emri i Plotë
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-transparent focus:ring-2 focus:ring-rose-500"
          placeholder="Emri juaj i plotë"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Adresa e Email-it
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-transparent focus:ring-2 focus:ring-rose-500"
          placeholder="juaj@email.com"
        />
      </div>
      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Numri i Telefonit
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-transparent focus:ring-2 focus:ring-rose-500"
          placeholder="+355 6X XXX XXXX"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-medium text-gray-700"
        >
          Mesazhi
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2 transition-colors focus:border-transparent focus:ring-2 focus:ring-rose-500"
          placeholder="Mesazhi juaj..."
        />
      </div>
      <button
        type="submit"
        className="flex w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-rose-600 to-rose-500 px-6 py-2 text-white shadow-lg transition-all duration-300 hover:from-rose-700 hover:to-rose-600 hover:shadow-xl"
      >
        Dërgo Mesazhin
        <Send className="h-5 w-5" />
      </button>
    </form>
  );
}
