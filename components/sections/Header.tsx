// components/sections/Header.tsx - Βελτιωμένη μετάφραση με σωστό styling
"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3 cursor-pointer flex-shrink-0">
            <Image
              src="/assets/mazi-logo.png"
              alt="Λογότυπο MaziCare"
              width={50}
              height={50}
              className="rounded-full flex-shrink-0"
            />
            <h1 className="text-xl lg:text-2xl font-bold text-primary whitespace-nowrap">MaziCare</h1>
          </Link>

          {/* Trust statement - μόνο για μεγάλες οθόνες */}
          <div className="hidden xl:flex items-center text-sm text-[#717182] mx-4 flex-shrink-0">
            <span className="border-l border-gray-300 pl-4 whitespace-nowrap">
               Επαληθευμένοι φροντιστές σε όλη την Ελλάδα
            </span>
          </div>

          {/* Desktop Navigation - βελτιωμένο για ελληνικά */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-4 flex-1 justify-end">
            <div className="flex items-center space-x-2 xl:space-x-4">
              <Link
                href="/find-care"
                className="text-[#030213] hover:text-[#030213]/80 transition-colors font-medium text-sm xl:text-base whitespace-nowrap px-2 py-1"
              >
                Βρείτε Φροντίδα
              </Link>
              <Link
                href="/for-caregivers"
                className="text-[#030213] hover:text-[#030213]/80 transition-colors font-medium text-sm xl:text-base whitespace-nowrap px-2 py-1"
              >
                Για Φροντιστές
              </Link>
              <Link
                href="/pricing"
                className="text-[#030213] hover:text-[#030213]/80 transition-colors font-medium text-sm xl:text-base whitespace-nowrap px-2 py-1"
              >
                Τιμολόγηση
              </Link>
              <Link
                href="/contact"
                className="text-[#030213] hover:text-[#030213]/80 transition-colors font-medium text-sm xl:text-base whitespace-nowrap px-2 py-1"
              >
                Επικοινωνία
              </Link>
            </div>
            
            {/* Language Toggle - μικρότερο */}
            <div className="flex items-center space-x-1 ml-2 xl:ml-4 border-l border-gray-300 pl-2 xl:pl-4 flex-shrink-0">
              <button className="text-xs xl:text-sm text-[#717182] hover:text-[#030213] font-medium px-1">EN</button>
              <span className="text-gray-300 text-xs">|</span>
              <button className="text-xs xl:text-sm text-[#717182] hover:text-[#030213] px-1">EL</button>
            </div>
            
            <Link href="https://mazicare-webapp.vercel.app/signup" className="ml-2 xl:ml-4 flex-shrink-0">
              <Button variant="default" className="font-medium text-sm xl:text-base px-3 xl:px-4 py-2 whitespace-nowrap">
                Σύνδεση
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button - με σύνδεση για μικρές οθόνες */}
          <div className="lg:hidden flex items-center gap-2">
            <Link href="https://mazicare-webapp.vercel.app/signup" className="hidden sm:block">
              <Button size="sm" variant="default" className="text-sm">
                Σύνδεση
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden animate-in slide-in-from-top duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <div className="px-3 py-2 text-sm text-[#717182] border-b pb-3 mb-2 bg-[#f3f3f5] rounded-lg">
              Επαληθευμένοι επαγγελματίες φροντίδας ηλικιωμένων σε όλη την Ελλάδα
              </div>
              
              <div className="space-y-1">
                <Link
                  href="/find-care"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-[#030213] hover:bg-[#f3f3f5] transition-colors font-medium rounded-lg"
                >
                  Βρείτε Φροντίδα
                </Link>
                <Link
                  href="/for-caregivers"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-[#030213] hover:bg-[#f3f3f5] transition-colors font-medium rounded-lg"
                >
                  Για Φροντιστές
                </Link>
                <Link
                  href="/pricing"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-[#030213] hover:bg-[#f3f3f5] transition-colors font-medium rounded-lg"
                >
                  Τιμολόγηση
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-left px-4 py-3 text-[#030213] hover:bg-[#f3f3f5] transition-colors font-medium rounded-lg"
                >
                  Επικοινωνία
                </Link>
              </div>
              
              {/* Language Toggle Mobile */}
              <div className="px-3 py-4 border-t mt-3 pt-4">
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="flex-1 text-sm" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    EN
                  </Button>
                  <Button 
                    variant="default" 
                    className="flex-1 text-sm bg-[#030213]" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    EL
                  </Button>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Link
                  href="https://mazicare-webapp.vercel.app/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  <Button className="w-full bg-[#030213] hover:bg-[#030213]/90">
                    Σύνδεση στο MaziCare
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}