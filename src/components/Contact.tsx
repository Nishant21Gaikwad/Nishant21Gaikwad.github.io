import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Download, Code2 } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] opacity-40 pointer-events-none" />

            <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent top-0" />

            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent glow-text">Next Chapter</span></h2>
                        <p className="text-xl md:text-2xl text-gray-200 font-medium tracking-wide mb-12 max-w-2xl">
                            Let's build something impactful together.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 mb-16 justify-center">
                            <a
                                href="mailto:gaikwadnishant2107@gmail.com"
                                className="group relative px-8 py-4 rounded-full bg-primary text-white font-bold tracking-wide hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center justify-center gap-2">
                                    <Mail className="w-5 h-5" />
                                    Say Hello
                                </span>
                            </a>

                            <a
                                href="https://drive.google.com/file/d/1F7uID89dNnlH7XKBBJJXjUXly3lT27tX/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group px-8 py-4 rounded-full border border-border bg-surface hover:bg-white hover:text-black transition-all font-semibold tracking-wide flex items-center justify-center gap-2"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </a>
                        </div>

                        <div className="flex items-center justify-center gap-6">
                            {[
                                { icon: <Mail />, href: "mailto:gaikwadnishant2107@gmail.com", label: "Email" },
                                { icon: <Github />, href: "https://github.com/Nishant21Gaikwad", label: "GitHub" },
                                { icon: <Linkedin />, href: "https://www.linkedin.com/in/nishantgaikwad1143", label: "LinkedIn" },
                                { icon: <Code2 />, href: "https://leetcode.com/u/SrFFnrDPZm/", label: "LeetCode" }
                            ].map((link, i) => (
                                <motion.a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -5, scale: 1.1 }}
                                    className="w-14 h-14 rounded-full bg-surface border border-border flex items-center justify-center text-gray-400 hover:text-white hover:border-primary transition-all shadow-lg"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            <footer className="absolute bottom-0 left-0 w-full py-6 text-center text-gray-500 text-sm">
                <p>© {new Date().getFullYear()} Nishant Gaikwad. Engineered with React & Framer Motion.</p>
            </footer>
        </section>
    );
};

export default Contact;
