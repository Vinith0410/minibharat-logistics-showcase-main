import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/minibharat-logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const companyItems = [
    { name: "About", to: "/about" },
    { name: "Blog", to: "/blog" },
    { name: "Gallery", to: "/gallery" },
    { name: "FAQ", to: "/faq" },
    { name: "Testimonials", to: "/testimonials" },
  ];

  const navItemsAfterCompany = [
    { name: "Why Choose Us", to: "/why-choose-us" },
    { name: "Services", to: "/services" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img src={logo} alt="Mini Bharat Courier & Logistics" className="h-14 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Home Link */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${isActive ? "text-orange-primary" : "text-gray-600 hover:text-orange-primary"}`
              }
              end
            >
              Home
            </NavLink>
            
            {/* Company Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="text-sm font-medium text-gray-600 hover:text-orange-primary transition-colors flex items-center gap-1">
                Company
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg rounded-md z-50">
                {companyItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <NavLink
                      to={item.to}
                      className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-primary hover:bg-gray-50 transition-colors"
                    >
                      {item.name}
                    </NavLink>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Other Nav Items */}
            {navItemsAfterCompany.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? "text-orange-primary" : "text-gray-600 hover:text-orange-primary"}`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <NavLink to="/contact">
              <Button variant="cta" size="lg">
                Get Quote
              </Button>
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {/* Home Link */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${isActive ? "text-orange-primary" : "text-gray-600 hover:text-orange-primary"}`
                }
                onClick={() => setIsMenuOpen(false)}
                end
              >
                Home
              </NavLink>
              
              {/* Company Links in Mobile */}
              <div className="border-t pt-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Company</p>
                {companyItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${isActive ? "text-orange-primary" : "text-gray-600 hover:text-orange-primary"} block py-2`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              
              {/* Other Nav Items */}
              <div className="border-t pt-4">
                {navItemsAfterCompany.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      `text-sm font-medium transition-colors ${isActive ? "text-orange-primary" : "text-gray-600 hover:text-orange-primary"} block py-2`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
              
              <NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>
                <Button variant="cta" size="lg" className="mt-4">
                  Get Quote
                </Button>
              </NavLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;