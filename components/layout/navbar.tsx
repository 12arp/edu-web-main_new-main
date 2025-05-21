"use client";
import { ChevronsDown, Menu, Phone, Languages } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const routeList = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "#contact", label: "Contact" },
];

// Add TypeScript declarations for Google Translate
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages: string;
              layout: number;
              autoDisplay?: boolean;
            },
            elementId: string
          ): void;
          InlineLayout: {
            SIMPLE: number;
          };
        };
      };
    };
  }
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const handleClose = React.useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    // Check for existing language preference
    const cookies = document.cookie.split(';');
    const googtransCookie = cookies.find(cookie => cookie.trim().startsWith('googtrans='));
    if (googtransCookie) {
      const lang = googtransCookie.includes('/hi') ? 'hi' : 'en';
      setCurrentLang(lang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = currentLang === 'en' ? 'hi' : 'en';
    const cookieName = 'googtrans';
    const cookieValue = `/en/${newLang}`;
    document.cookie = `${cookieName}=${cookieValue}; path=/; domain=.${window.location.hostname}`;
    setCurrentLang(newLang);
    window.location.reload();
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-secondary bg-white shadow-md transition-all">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-3">
          <Link
            href="/"
            className="font-bold text-xl flex items-center space-x-2 hover:scale-105 transition-transform"
          >
            <Image src="/61ee283f-278d-43e8-8c23-8e0cdbbc61d6.png" alt="Sahu Metals Logo" width={36} height={36} className="rounded-lg" />
            <span className="text-foreground">Sahu Metals</span>
          </Link>

          {/* Mobile Nav */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="transition hover:scale-110">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary transition-all"
              >
                <div>
                  <SheetHeader className="mb-4 ml-4">
                    <SheetTitle className="flex items-center space-x-2">
                      <Link href="/" className="flex items-center" onClick={handleClose}>
                        <Image src="/61ee283f-278d-43e8-8c23-8e0cdbbc61d6.png" alt="Sahu Metals Logo" width={36} height={36} className="rounded-lg" />
                        <span className="ml-2 font-semibold text-lg">Sahu Metals</span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>

                  <div className="flex flex-col gap-3 px-4">
                    {routeList.map(({ href, label }) => (
                      <Button
                        key={href}
                        asChild
                        variant="ghost"
                        className="justify-start text-base transition hover:translate-x-1"
                        onClick={handleClose}
                      >
                        <Link href={href}>{label}</Link>
                      </Button>
                    ))}
                  </div>
                  {/* Mobile WhatsApp and Call Buttons */}
                  <div className="flex gap-4 px-4 mt-4">
                    <Link
                      href="https://wa.me/919928398987?text=I%20have%20enquiry"
                      target="_blank"
                      className="transition-transform hover:scale-105"
                    >
                      <Image
                        src="/wh491wad6-whatsapp-icon-logo-whatsapp-icon-whatsapp-logo-call-logo-instagram-logo-new.png"
                        alt="WhatsApp"
                        width={32}
                        height={20}
                        className="rounded-md"
                      />
                    </Link>
                    <a
                      href="tel:+919928398987"
                      className="transition-transform hover:scale-110"
                    >
                      <Button variant="ghost" size="icon">
                        <Phone className="h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>

                <SheetFooter className="flex-col items-start p-4">
                  <Separator className="mb-2" />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Nav */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="flex gap-6 items-center">
              {routeList.map(({ href, label }) => (
                <NavigationMenuItem key={href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={href}
                      className="text-base font-medium text-foreground relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="https://wa.me/919928398987?text=I%20have%20enquiry"
              target="_blank"
              className="transition-transform hover:scale-105"
            >
              <Image
                src="/wh491wad6-whatsapp-icon-logo-whatsapp-icon-whatsapp-logo-call-logo-instagram-logo-new.png"
                alt="WhatsApp"
                width={40}
                height={24}
                className="rounded-md"
              />
            </Link>
            <a
              href="tel:+919928398987"
              className="transition-transform hover:scale-110"
            >
              <Button variant="ghost" size="icon">
                <Phone className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
        {/* Hidden Google Translate Element */}
        <div id="google_translate_element" style={{ display: 'none' }} />
      </header>

      {/* Language Toggle Button - Fixed Position */}
      <Button
        variant="default"
        size="lg"
        onClick={toggleLanguage}
        className="fixed bottom-6 right-6 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90 px-3 py-3 md:px-6 md:py-6 h-auto"
        title={currentLang === 'en' ? 'हिंदी में बदलें' : 'Switch to English'}
      >
        <Languages className="h-5 w-5 md:h-7 md:w-7" />
        <span className="ml-2 md:ml-3 text-sm md:text-base font-medium">{currentLang === 'en' ? 'हिंदी' : 'ENG'}</span>
      </Button>
    </>
  );
};
