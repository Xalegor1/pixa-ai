"use client";

import { useState, useEffect } from "react";

export default function CustomAlert() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isFirstVisit = localStorage.getItem("firstVisit");
    if (!isFirstVisit || isFirstVisit === "false") {
      setIsVisible(true);
      localStorage.setItem("firstVisit", "true");
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="flex h-[200px] w-[350px] flex-col justify-center rounded-lg bg-slate-800 p-6 text-center shadow-lg">
        <h2 className="mb-2 text-4xl uppercase text-red-500">Disclaimer</h2>
        <p className="mb-4 text-lg font-semibold text-white">
          Not a real product
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="rounded-lg bg-blue-800 px-4 py-2 text-white transition hover:bg-sky-600"
        >
          Close
        </button>
      </div>
    </div>
  );
}
