import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container px-0 pt-0 pb-8 sm:pb-12 mt-8">
      <div className="w-full bg-gradient-to-tr from-green-100 via-white to-green-50 border border-secondary rounded-2xl p-6 md:p-10 flex flex-col gap-8">
        {/* <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
          <div className="flex flex-col items-center md:items-start gap-2 md:w-1/3">
            <Link href="/" className="flex items-center gap-3">
              <img src="/61ee283f-278d-43e8-8c23-8e0cdbbc61d6.png" alt="Sahu Metals Logo" className="w-12 h-12 rounded-lg border border-secondary bg-white p-1 shadow" />
              <span className="text-2xl font-bold text-primary">Sahu Metals</span>
            </Link>
            <span className="text-sm text-muted-foreground mt-1 text-center md:text-left max-w-xs">
              Your trusted partner for agriculture equipment sales, leasing, and maintenance.
            </span>
          </div>

          <div className="flex flex-row justify-center md:justify-end gap-12 md:w-2/3">
            <div className="flex flex-col gap-2 min-w-[120px] items-center md:items-start">
              <h3 className="font-bold text-lg mb-1 text-primary">Contact</h3>
              <Link href="#" className="opacity-70 hover:opacity-100 transition">Twitter</Link>
              <Link href="#" className="opacity-70 hover:opacity-100 transition">Instagram</Link>
            </div>
            <div className="flex flex-col gap-2 min-w-[120px] items-center md:items-start">
              <h3 className="font-bold text-lg mb-1 text-primary">Help</h3>
              <Link href="#" className="opacity-70 hover:opacity-100 transition">Contact Us</Link>
              <Link href="#" className="opacity-70 hover:opacity-100 transition">FAQ</Link>
              <Link href="#" className="opacity-70 hover:opacity-100 transition">Feedback</Link>
            </div>
          </div>
        </div> */}

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
