import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="bg-gray-800 text-white py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center sm:px-6 lg:px-8">
        <div className="text-xl font-bold">
          <Link href="/">News Portal</Link>
        </div>

       
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>

              <NavigationMenuLink href="/news">News</NavigationMenuLink>


              <NavigationMenuLink href="/services">
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4 bg-white shadow-md">
                <NavigationMenuLink>Web Development</NavigationMenuLink>
                <NavigationMenuLink>Mobile App</NavigationMenuLink>
                <NavigationMenuLink>SEO</NavigationMenuLink>
              </NavigationMenuContent>
              </NavigationMenuLink>


              
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
 
      </nav>
    </header>
  );
};

export default Navbar;
