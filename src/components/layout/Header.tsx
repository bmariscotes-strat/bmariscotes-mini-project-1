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
    <header className="w-full bg-secondary shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Hidden on home page */}
          {!isHomePage && (
            <div className="flex items-center justify-center md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
              <Image src="/brand/logo-w.png" alt="Logo" width={40} height={40} />
            </div>
          )}

          {/* Desktop Navigation */}
          <div className={clsx("hidden md:flex items-center justify-center w-full")}>
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
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={clsx(
                "text-white hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors duration-200"
              )}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={clsx(
            "md:hidden transition-all duration-300 ease-in-out",
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          )}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-200"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
