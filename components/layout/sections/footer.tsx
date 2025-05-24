import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Building2, Mail, Phone } from "lucide-react";
import Image from 'next/image';

export const FooterSection = () => {
  return (
    <footer id="footer" className="container px-0 pt-0 pb-8 sm:pb-12 mt-8">
      <div className="w-full bg-gradient-to-tr from-green-100 via-white to-green-50 border border-secondary rounded-2xl p-6 md:p-10 flex flex-col gap-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 justify-center md:justify-start">
              <Image
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-2xl font-bold text-primary">Sahu Metals</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Your trusted partner for agriculture equipment sales, leasing, and maintenance.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Building2 className="w-4 h-4 text-primary" />
                <span className="text-sm">G-510(1st),IPIA, Road no. 7, Anantpura, Kota, Rajasthan</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">+91 9928398987</span>
              </div>
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">info@sahumetals.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="font-bold text-lg text-primary">Quick Links</h3>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm hover:text-primary transition">Home</Link>
              <Link href="/products" className="text-sm hover:text-primary transition">Products</Link>
              <Link href="/about" className="text-sm hover:text-primary transition">About Us</Link>
              <Link href="#contact" className="text-sm hover:text-primary transition">Contact</Link>
            </div>
          </div>

          {/* Contact & Support */}
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h3 className="font-bold text-lg text-primary">Contact & Support</h3>
            <div className="flex flex-col gap-2">
              <Link href="https://wa.me/919928398987" target="_blank" className="text-sm hover:text-primary transition">WhatsApp Support</Link>
              <Link href="tel:+919928398987" className="text-sm hover:text-primary transition">Call Us</Link>
              <Link href="mailto:info@sahumetals.com" className="text-sm hover:text-primary transition">Email Us</Link>
              <Link href="#faq" className="text-sm hover:text-primary transition">FAQ</Link>
            </div>
          </div>
        </div>

        <Separator className="my-2" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
          <span>&copy; 2024 Sahu Metals. All rights reserved.</span>
          <span>Made with ❤️ for Indian Agriculture</span>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <Link 
            href="https://codientlabs.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Developed by CodientLabs
          </Link>
        </div>
      </div>
    </footer>
  );
};
