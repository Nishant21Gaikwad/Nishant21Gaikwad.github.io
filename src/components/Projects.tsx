import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'Sahayak',
        description: 'AI-Powered Career Guidance Platform utilizing the Google Gemini API to analyze patterns and provide personalized insights in under 2 seconds.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Gemini API'],
        github: 'https://github.com/Nishant21Gaikwad/sahayak-career-guidance',
        live: 'https://the-sahayak.vercel.app/',
        highlight: false,
    },
    {
        title: 'Smart Xerox',
        description: 'Digital Print Ordering System designed for campus efficiency. Reduced queue wait times by 60% with streamlined document handling.',
        tech: ['React', 'Tailwind', 'PostgreSQL', 'Supabase'],
        github: 'https://github.com/Nishant21Gaikwad/SmartXerox',
        live: 'https://smart-xerox.vercel.app/',
        highlight: false,
    },
    {
        title: 'BV-NoteHub',
        description: 'Academic Note Sharing Platform that achieved 100+ monthly active users, facilitating collaborative learning across the university.',
        tech: ['React', 'Firebase', 'Uploadcare API'],
        github: 'https://github.com/Nishant21Gaikwad/BVCOE-NoteHub',
        live: 'http://bv-notehub.web.app/',
        highlight: false,
    },
    {
        title: 'CampIn',
        description: 'Campus Social Networking Mobile App featuring student feeds, professional networking, club announcements, and real-time messaging.',
        tech: ['React Native', 'Tailwind', 'Firebase', 'Node.js'],
        github: 'https://github.com/Nishant21Gaikwad/CampIn',
        live: '#',
        highlight: false,
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-1/4 -left-[200px] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none opacity-50" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The `<span className="text-primary glow-text">Evidence</span>`</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, rotateX: 2, rotateY: 2 }}
                            className={`glass-card p-8 group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] ${project.highlight ? 'lg:col-span-2' : ''
                                }`}
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h3>
                                    <div className="flex gap-3">
                                        <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                                            <Github className="w-5 h-5" />
                                        </a>
                                        <a href={project.live} className="text-gray-400 hover:text-white transition-colors">
                                            <ExternalLink className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>

                                <p className="text-gray-300 text-lg md:text-base mb-8 flex-grow leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tech.map(tech => (
                                        <span key={tech} className="px-3 py-1 text-sm font-medium rounded-full bg-surface border border-border text-gray-200 tracking-wide">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
