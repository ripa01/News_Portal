"use client";

import { usePathname } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import Link from "next/link";
import MobileMenu from "./MobileMenu";


const Navbar = () => {
  const pathname = usePathname();
 

  return (
    <header className="bg-white text-black py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Link href="/">News Portal</Link>
        </div>
<div>
        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/news"
                className={`${
                  pathname === "/news" ? "text-red-500 font-semibold" : "hover:text-red-500"
                }`}
              >
                News
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-red-500">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 bg-white shadow-md">
                <NavigationMenuLink
                  href="/services/web"
                  className={`${
                    pathname === "/services/web" ? "text-red-500 font-semibold" : "hover:text-red-500"
                  }`}
                >
                  Web Development
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/services/mobile"
                  className={`${
                    pathname === "/services/mobile" ? "text-red-500 font-semibold" : "hover:text-red-500"
                  }`}
                >
                  Mobile App
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/services/seo"
                  className={`${
                    pathname === "/services/seo" ? "text-red-500 font-semibold" : "hover:text-red-500"
                  }`}
                >
                  SEO
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className={`${
                  pathname === "/about" ? "text-red-500 font-semibold" : "hover:text-red-500"
                }`}
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className={`${
                  pathname === "/contact" ? "text-red-500 font-semibold" : "hover:text-red-500"
                }`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        </div>

       
        <MobileMenu />
         {/* Right Side (Login Button) */}
         <div className="hidden lg:flex items-center space-x-4">
          <Button variant="default">Log in</Button>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
