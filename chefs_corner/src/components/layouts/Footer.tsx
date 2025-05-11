import { Mail, Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-white to-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between py-6 gap-4 text-center md:text-left">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold hover:text-primary transition-colors">
            Chef&apos;s Corner 🍽️
          </span>
        </div>

        <p className="text-sm text-muted-foreground max-w-md">
          Discover and share delicious recipes curated by our professional chefs.
        </p>

        <div className="flex items-center gap-4">
          <Link to="https://www.facebook.com/" className="hover:text-primary">
            <Facebook className="h-5 w-5" />
          </Link>
          <Link to="https://www.instagram.com/" className="hover:text-primary">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link to="mailto:shawmicasivatharan@gmail.com" className="hover:text-primary">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-4 py-4 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Chef&apos;s Corner. All rights reserved.
      </div>
    </footer>
  );
};
