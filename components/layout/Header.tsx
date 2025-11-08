"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/bbh-services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md bg-white" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <Link href="/" className="text-2xl font-semibold text-[#1E2A78]">
          BBH
        </Link>

        {/* Full Menu (always visible) */}
        <div className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#1E2A78] font-medium hover:text-orange-500 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Button className="bg-[#F97316] hover:bg-[#ea580c] text-white font-medium rounded-md px-5 py-2">
            Build Your Machine
          </Button>
        </div>
      </div>
    </nav>
  );
}
