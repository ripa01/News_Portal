import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-white text-black py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center sm:px-6 lg:px-8">
        <div className="text-xl font-bold">
          <Link href="/">News Portal</Link>
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="flex items-center space-x-4">
            <NavigationMenuItem>
              <NavigationMenuLink href="/news" className="hover:text-red-500">
                News
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/services">
                <NavigationMenuTrigger className="hover:text-red-500">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-4 bg-white shadow-md">
                  <NavigationMenuLink href="/services/web">
                    Web Development
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/services/mobile">
                    Mobile App
                  </NavigationMenuLink>
                  <NavigationMenuLink href="/services/seo">
                    SEO
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="hover:text-red-500">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="hover:text-red-500"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="default">Log in</Button>
        </div>

        <div className="lg:hidden">
          <Button>
            <IoMenu />
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
