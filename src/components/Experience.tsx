import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
    {
        role: 'Google Student Ambassador',
        company: 'Google',
        period: 'Sept 2025 - Present',
        description: [
            'Organized 2 campus-level technical sessions on Gemini AI, programming fundamentals, and web dev.',
            'Mentored 20–30 students through hands-on activities, encouraging collaborative learning.',
        ],
        highlight: true,
    },
    {
        role: 'AI & Machine Learning Intern (Virtual)',
        company: 'IBM',
        period: 'June 2025 - August',
        description: [
            'Completed Introduction to Artificial Intelligence as part of IBM’s AI internship program.',
            'Developed an employee salary prediction model using supervised machine learning with Scikit-learn and Pandas.',
            'Worked with real-world datasets involving data preprocessing, feature engineering, and model training.',
        ],
        highlight: false,
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none opacity-50" />

            <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent top-0" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex flex-col items-center text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The `<span className="text-accent glow-text">Experience</span>`</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto flex flex-col gap-8">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-accent/50 transition-colors duration-300"
                        >
                            {exp.highlight && (
                                <div className="absolute -top-32 -right-32 w-64 h-64 bg-accent/20 rounded-full blur-[80px] group-hover:bg-accent/30 transition-colors duration-700" />
                            )}

                            <div className="relative z-10 flex flex-col md:flex-row gap-8 justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-4">
                                        <Briefcase className="w-6 h-6 text-accent" />
                                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{exp.role}</h3>
                                    </div>

                                    <div className="flex items-center gap-3 text-primary font-semibold mb-6">
                                        <span className="text-xl md:text-2xl">{exp.company}</span>
                                        <span className="w-1.5 h-1.5 rounded-full bg-border" />
                                        <div className="flex items-center gap-2 text-gray-400 text-sm font-normal">
                                            <Calendar className="w-4 h-4" />
                                            {exp.period}
                                        </div>
                                    </div>

                                    <ul className="space-y-3">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="flex items-start gap-3 text-gray-300 text-lg md:text-base leading-relaxed">
                                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent/50 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
