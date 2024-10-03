import { navItems } from "../constants/navbar-data";
import logo from "../assets/logo-sin-texto.png";
import { FaBars, FaXmark } from "react-icons/fa6";
import { useState } from "react";

function Navbar() {
    const [menuDrawerIsOpen, setMenuDrawerIsOpen] = useState(false);

    const handleNavbar = () => {
        setMenuDrawerIsOpen(!menuDrawerIsOpen);
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80s">
            <div className="container px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                        <span className="text-lg tracking-tight">VrWondersTeam</span>
                    </div>
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index} className="group">
                                <a href={item.link} className="relative inline-block">
                                    {item.label}
                                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#106b91] to-[#4fa3bc] transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <a href="#" className="bg-gradient-to-r from-[#0c4f6b] to-[#3f8296] hover:from-[#106b91] hover:to-[#4fa3bc] py-2 px-3 rounded-md text-white">Adquirir producto</a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={handleNavbar} className="text-2xl">
                            {menuDrawerIsOpen ? <FaXmark color="#000" size={20} /> : <FaBars color="#000" size={20} />}
                        </button>
                    </div>
                </div>
                {menuDrawerIsOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-100 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li key={index} className="py-4">
                                    <a href={item.link}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="bg-gradient-to-r from-[#0c4f6b] to-[#3f8296] hover:from-[#106b91] hover:to-[#4fa3bc] py-2 px-3 rounded-md text-white">Adquirir producto</a>
                    </div>
                )}
            </div>
        </nav>
    )
};

export default Navbar;