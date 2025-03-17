"use client";
import React from 'react'
import { IoMenu , IoClose} from "react-icons/io5";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const MobileMenu = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <div>
      
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Button onClick={toggleMobileMenu}>
            {
              // Show close icon if mobile menu is open
              isMobileMenuOpen ? <IoClose /> : <IoMenu />
            }
          
          </Button>
        </div>
    </div>
  )
}

export default MobileMenu
