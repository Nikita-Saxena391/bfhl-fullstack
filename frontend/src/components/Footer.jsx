import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-10 py-4 text-center border-t border-gray-700">
      <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
        Built with{" "}
        <FaHeart className="text-red-500 animate-pulse" />{" "}
        by <span className="font-semibold text-white">Nikita Saxena</span>
      </p>
    </footer>
  );
}