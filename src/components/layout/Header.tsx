"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const NavLink = ({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) => (
    <Link
      href={href}
      className={clsx(
        "text-white hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors duration-200",
        className
      )}
    >
      {children}
    </Link>
  );

  return (
    <header className="w-full bg-secondary sticky top-0 z-50 relative">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Hidden on home page */}
          {!isHomePage && (
            <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              <Image src="/brand/logo-w.png" alt="Logo" width={40} height={40} />
            </div>
          )}

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center w-full">
            <div className="flex space-x-8">
              {isHomePage ? (
                // Centered layout when no logo
                navLinks.map((link) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.label}
                  </NavLink>
                ))
              ) : (
                // Split layout around logo
                <>
                  <div className="flex space-x-8 mr-20">
                    {navLinks.slice(0, 2).map((link) => (
                      <NavLink key={link.href} href={link.href}>
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                  <div className="flex space-x-8 ml-20">
                    {navLinks.slice(2).map((link) => (
                      <NavLink key={link.href} href={link.href}>
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center h-16">
            <button onClick={toggleMenu} className="text-white transition-colors duration-200" aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Floating Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-lg z-40">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-base font-medium text-gray-900 px-3 py-2 rounded-md hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
