"use client";
import { ChevronsDown, Menu, Phone, Languages, Github } from "lucide-react";
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
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

interface RouteProps {
  href: string;
  label: string;
}

interface FeatureProps {
  title: string;
  description: string;
}

const routeList: RouteProps[] = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About Us" },
  { href: "/#contact", label: "Contact" },
];

const featureList: FeatureProps[] = [
  {
    title: "Quality Products",
    description: "Premium quality metal products for all your needs.",
  },
  {
    title: "Expert Service",
    description: "Professional service and support for all your requirements.",
  },
  {
    title: "Quick Delivery",
    description: "Fast and reliable delivery across the country.",
  },
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
    
    // Remove existing translation cookies
    document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'googtrans=; path=/; domain=.' + window.location.hostname + '; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    
    if (newLang === 'hi') {
      // Set Hindi translation cookie
      document.cookie = 'googtrans=/en/hi; path=/; domain=.' + window.location.hostname;
    }
    
    setCurrentLang(newLang);
    
    // Force reload to apply translation
    window.location.reload();
  };

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 bg-white w-[95%] md:w-[80%] lg:w-[85%] lg:max-w-screen-xl mx-auto border border-gray-200 rounded-xl flex justify-between items-center p-1.5 shadow-sm">
        <Link
          href="/"
          className="font-bold text-lg flex items-center space-x-2 hover:scale-105 transition-transform"
        >
          <Image src="/61ee283f-278d-43e8-8c23-8e0cdbbc61d6.png" alt="Sahu Metals Logo" width={36} height={36} className="rounded-lg" />
          <span className="text-foreground">Sahu Metals</span>
        </Link>

        {/* Mobile Nav */}
        <div className="flex items-center lg:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="left"
              className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
            >
              <div className="flex flex-col h-full">
                <SheetHeader className="mb-4 ml-4">
                  <SheetTitle className="flex items-center">
                    <Link href="/" className="flex items-center" onClick={handleClose}>
                      <Image src="/61ee283f-278d-43e8-8c23-8e0cdbbc61d6.png" alt="Sahu Metals Logo" width={36} height={36} className="rounded-lg" />
                      <span className="ml-2 font-semibold text-lg">Sahu Metals</span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-2 px-4">
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
              </div>

              {/* Mobile WhatsApp and Call Buttons - Fixed at bottom */}
              <div className="mt-auto border-t border-secondary">
                <div className="flex flex-col gap-2 p-4">
                  <Link
                    href="https://wa.me/919876542211?text=I%20have%20enquiry"
                    target="_blank"
                    className="flex items-center gap-2 text-sm hover:text-primary transition bg-muted/50 p-3 rounded-lg"
                  >
                    <Image
                      src="/wh491wad6-whatsapp-icon-logo-whatsapp-icon-whatsapp-logo-call-logo-instagram-logo-new.png"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="rounded-md"
                    />
                    <span>WhatsApp Support</span>
                  </Link>
                  <a
                    href="tel:+919876542211"
                    className="flex items-center gap-2 text-sm hover:text-primary transition bg-muted/50 p-3 rounded-lg"
                  >
                    <Phone className="h-5 w-5" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>

              <SheetFooter className="flex-col items-start p-4 border-t border-secondary">
                <Button
                  variant="ghost"
                  onClick={toggleLanguage}
                  className="w-full justify-start"
                >
                  <Languages className="h-5 w-5 mr-2" />
                  {currentLang === 'en' ? 'हिंदी में बदलें' : 'Switch to English'}
                </Button>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Nav */}
        <NavigationMenu className="hidden lg:block mx-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-card text-base">
                Features
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                  <Image
                    src="/61ee283f-278d-43e8-8c23-8e0cdbbc61d6.png"
                    alt="Sahu Metals"
                    className="h-full w-full rounded-md object-cover"
                    width={600}
                    height={600}
                  />
                  <ul className="flex flex-col gap-2">
                    {featureList.map(({ title, description }) => (
                      <li
                        key={title}
                        className="rounded-md p-3 text-sm hover:bg-muted"
                      >
                        <p className="mb-1 font-semibold leading-none text-foreground">
                          {title}
                        </p>
                        <p className="line-clamp-2 text-muted-foreground">
                          {description}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {routeList.map(({ href, label }) => (
              <NavigationMenuItem key={href}>
                <NavigationMenuLink asChild>
                  <Link
                    href={href}
                    className="text-base px-2 text-foreground relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
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
            href="https://wa.me/919876542211?text=I%20have%20enquiry"
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
            href="tel:+919876542211"
            className="transition-transform hover:scale-110"
          >
            <Button variant="ghost" size="icon">
              <Phone className="h-5 w-5" />
            </Button>
          </a>
        </div>
      </header>

      {/* Fixed Language Button */}
      <Button
        variant="secondary"
        size="sm"
        onClick={toggleLanguage}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
      >
        <Languages className="h-5 w-5" />
        {currentLang === 'en' ? 'हिंदी' : 'English'}
      </Button>

      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" style={{ display: 'none' }} />
    </>
  );
};
