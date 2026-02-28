import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Projects', href: '#projects' },
        { name: 'Education', href: '#education' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 backdrop-blur-xl bg-background/70 border-b border-border' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between relative z-50">
                <a href="#" className="text-2xl font-extrabold tracking-tight" onClick={() => setMobileMenuOpen(false)}>
                    Nishant <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Gaikwad</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-base font-semibold tracking-wide">
                    {navLinks.map(link => (
                        <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors">
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" className="px-5 py-2.5 rounded-full border border-border hover:bg-white/5 transition-colors">Contact</a>
                </div>

                {/* Mobile Menu Toggle Button */}
                <button
                    className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border shadow-2xl md:hidden"
                    >
                        <div className="flex flex-col container mx-auto px-6 py-8 gap-6 text-center">
                            {navLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-xl font-bold text-gray-300 hover:text-white transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                className="text-xl font-bold px-6 py-3 mt-4 mx-auto rounded-full border border-primary text-primary hover:bg-primary hover:text-white transition-all w-full max-w-xs"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
