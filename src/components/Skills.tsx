import { motion } from 'framer-motion';
import { Terminal, Lightbulb, Database, LayoutTemplate } from 'lucide-react';

const skillCategories = [
    {
        title: 'Core Logic',
        icon: <Terminal className="w-6 h-6 text-primary" />,
        skills: ['Java', 'Data Structures', 'Algorithms', 'OOP', 'System Design'],
        highlight: '200+ day LeetCode streak (250+ problems solved on all platforms).',
    },
    {
        title: 'Web Technologies',
        icon: <LayoutTemplate className="w-6 h-6 text-accent" />,
        skills: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        title: 'Backend & Data',
        icon: <Database className="w-6 h-6 text-blue-400" />,
        skills: ['Node.js', 'Express', 'MySQL', 'Supabase', 'Firebase'],
    },
    {
        title: 'Tools & AI',
        icon: <Lightbulb className="w-6 h-6 text-yellow-500" />,
        skills: ['GitHub', 'Antigravity', 'Gemini API', 'AI Studio', 'VS Code'],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex flex-col items-center text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The `<span className="text-primary glow-text">Engine</span>`</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mb-6"></div>
                    <p className="text-gray-300 text-lg md:text-xl font-medium tracking-wide max-w-2xl">The technical foundation powering my solutions.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card p-8 group hover:border-primary/50 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-surface rounded-xl border border-border group-hover:scale-110 transition-transform">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{category.title}</h3>
                            </div>

                            {category.highlight && (
                                <div className="mb-6 px-4 py-3 bg-surface border border-accent/20 rounded-lg flex items-start gap-3">
                                    <span className="text-xl">🔥</span>
                                    <p className="text-sm font-medium text-gray-300">
                                        <span className="text-accent glow-text">Highlight:</span> {category.highlight}
                                    </p>
                                </div>
                            )}

                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2 + (skillIndex * 0.05) }}
                                        className="px-4 py-2 text-base font-semibold rounded-full bg-black/40 border border-border text-gray-200 tracking-wide hover:text-white hover:border-primary cursor-default transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)]"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative blurry spots */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default Skills;
