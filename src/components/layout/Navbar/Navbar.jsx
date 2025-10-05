import { useCallback, useState } from "react";
import { homeImages } from '../../../constants/images';
import ThemeButton from '../../ui/ThemeButton.jsx';
import MenuButton from './MenuButton.jsx';
import DownloadButton from "../../ui/DownloadButton.jsx";

const Navbar = () => {
   const [menuOpen, setMenuOpen] = useState(false);
   const toggleMenu = useCallback(() => setMenuOpen((prev) => !prev), []);

   const navLinks = [
      { href: "/", title: "Home" },
      { href: "https://lumadocs.com/", title: "Documentation" },
      { href: "/blog", title: "Blog"}
   ]; {/* TODO: Proper Link lumadocs */}

   return (
      <div className="top-0 z-50 w-full text-mocha-text bg-mocha-crust border-2 border-mocha-surface0 md:sticky border-b-mocha-base">
         <div className="flex flex-col max-w-full px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
               <a href="/" className="flex text-mocha-text transition duration-1000 ease-in-out group">
                  <img src={homeImages.luma256} className="transition-opacity h-9 w-9 group-hover:opacity-50 group-focus:opacity-70" alt="Luma Engine Logo" />
                  <div className="mt-1 ml-3 text-xl font-black tracking-tight text-mocha-text uppercase transition-colors group-hover:text-mocha-subtext0"> Luma Engine</div>
               </a>
               <MenuButton isOpen={menuOpen} onClick={toggleMenu} />
            </div>
            <nav className={`flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row ${menuOpen ? 'flex' : 'hidden'}`}>
               {navLinks.map((link) => (
                  <a key={link.href} href={link.href} title={link.title} className="px-4 py-2 mt-2 text-sm font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-mocha-text focus:text-mocha-text hover:bg-mocha-surface0 focus:outline-none focus:shadow-outline">
                     {link.title}
                  </a>
               ))}
               <DownloadButton />
               <ThemeButton />
            </nav>
         </div>
      </div>
   )
}

export default Navbar;