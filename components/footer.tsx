import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs text-gray-100">
        &copy; 2030 Jash Agrawal. All rights reserved.
      </small>
      <p className="text-xs text-gray-400">
        <span className="font-semibold text-gray-300">About this website:</span>{" "}
        built with React & Next.js (App Router & Server Actions), TypeScript,
        Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
