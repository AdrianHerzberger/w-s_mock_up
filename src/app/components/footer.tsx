"use client"

import { useViewCount } from "../hooks/useViewCount";

export const Footer = () => {

    const { viewCount } = useViewCount();
 
    return (
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>© 2025 W&S Mock up</p>
        <p>Visitor count: {viewCount ?? 0 }</p>
        <a href="/about" className="text-blue-500 hover:underline">About Us</a>
        <a href="/contact" className="text-blue-500 hover:underline">Contact</a>
      </footer>
    );
}