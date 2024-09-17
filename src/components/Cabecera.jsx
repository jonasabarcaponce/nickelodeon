import bgImage from '../assets/bg.png';
import logoImage from '../assets/logo.png';
import { useState } from 'react';

// Reusable Sidenav Component
// eslint-disable-next-line react/prop-types
const NavegacionLateral = ({ isOpen, toggleSideNav }) => {
    return (
        <>
            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300 ${
                    isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={toggleSideNav}
            ></div>
            {/* Sidenav */}
            <div
                className={`fixed top-0 left-0 w-64 h-full bg-nickelodeonGreen shadow-md z-20 transform transition-transform duration-300 ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <button
                    onClick={toggleSideNav}
                    className="absolute top-4 right-4 text-white focus:outline-none"
                >
                    <i className='fas fa-times'></i>
                </button>
                <div className="py-10 px-5">
                    <ul className="space-y-5">
                        <li>
                            <a href="#cotizar" onClick={toggleSideNav} className="text-white/80 hover:text-white">
                                Alojamientos
                            </a>
                        </li>
                        <li>
                            <a href="#cotizar" onClick={toggleSideNav} className="text-white/80 hover:text-white">
                                Experiencias
                            </a>
                        </li>
                        <li>
                            <a href="#cotizar" onClick={toggleSideNav} className="text-white/80 hover:text-white">
                                Aqua Nick
                            </a>
                        </li>
                        <li>
                            <a href="#cotizar" onClick={toggleSideNav} className="text-white/80 hover:text-white">
                                Alimentos y Bebidas
                            </a>
                        </li>
                        <li>
                            <a href="#cotizar" onClick={toggleSideNav} className="text-white/80 hover:text-white">
                                Bodas
                            </a>
                        </li>
                        <li>
                            <a href="#cotizar" onClick={toggleSideNav} className="text-white/80 hover:text-white">
                                Grupos y Celebraciones
                            </a>
                        </li>
                        <li>
                            <a href="#cotizar" onClick={toggleSideNav} className="text-white/80 hover:text-white">
                                Ofertas
                            </a>
                        </li>
                        <li>
                            <a href="#cotizar" onClick={toggleSideNav} className="text-white/80 hover:text-white">
                                Galería
                            </a>
                        </li>
                        <li>
                            <a href="#cotizar" onClick={toggleSideNav} className="text-white/80 hover:text-white">
                                Check-In Digital
                            </a>
                        </li>
                        <li>
                            <a href="#cotizar" onClick={toggleSideNav} className="text-white/80 hover:text-white">
                                Tienda en Línea
                            </a>
                        </li>
                        <li>
                            <a href="#cotizar" onClick={toggleSideNav} className="text-white/80 hover:text-white">
                                Contáctanos
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

// Main Header Component
const Cabecera = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <NavegacionLateral isOpen={isOpen} toggleSideNav={toggleSideNav} />
            {/* Main Header Section */}
            <div
                className="h-screen bg-no-repeat bg-cover"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="max-w-[986px] mx-auto py-10 px-5">
                    <nav className="flex justify-between items-center">
                        <div>
                            <img src={logoImage} className="w-6/12 md:w-8/12" alt="Logo" />
                        </div>
                        <div className="flex flex-row space-x-2">
                            <a
                                href="#"
                                className="bg-orange-500 text-2xl text-white flex items-center justify-center rounded-full min-w-12 w-12 h-12"
                            >
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a
                                href="#"
                                className="bg-black text-xl text-white flex items-center justify-center rounded-full min-w-12 w-12 h-12"
                                onClick={toggleSideNav}
                            >
                                <i className="fas fa-bars"></i>
                            </a>
                        </div>
                    </nav>
                </div>
                <div className="flex items-center max-w-[986px] mx-auto px-5 h-4/6 font-bold text-white">
                    <div>
                        <h1 className="mb-3 big-responsive-text">
                            Disfruta tu vacaciones como nunca
                        </h1>
                        <p className="medium-responsive-text">
                            Junto a Bob Esponja, Las Tortugas Ninja y muchos otros personajes
                            de Nick en una escapada inolvidable.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cabecera;
