import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const educationData = [
    {
        institution: 'Bharati Vidyapeeth College of Engineering, Navi Mumbai',
        degree: 'Bachelor of Computer Engineering',
        period: '2024 - 2028',
        score: 'CGPA: 8.84',
        icon: <GraduationCap className="w-6 h-6 text-primary" />,
        highlight: true,
    },
    {
        institution: 'Sudhagad Education Society’s Junior College',
        degree: 'Class XII (HSC)',
        period: '2023 - 2024',
        score: '85%',
        icon: <BookOpen className="w-6 h-6 text-accent" />,
        highlight: false,
    },
    {
        institution: 'Sudhagad Education Society’s School, Kalamboli',
        degree: 'Class X (SSC)',
        period: '2021 - 2022',
        score: '94.2%',
        icon: <Award className="w-6 h-6 text-blue-400" />,
        highlight: false,
    },
];

const Education = () => {
    return (
        <section id="education" className="py-24 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-40 -translate-y-1/2" />

            <div className="absolute left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent top-0" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 flex flex-col items-center text-center"
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">The `<span className="text-primary glow-text">Education</span>`</h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto relative cursor-default">
                    {/* Glowing vertical line for timeline effect */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-px bg-gradient-to-b from-primary via-accent to-transparent -translate-x-1/2 opacity-30 hidden md:block" />

                    <div className="flex flex-col gap-12">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 100 }}
                                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex w-12 h-12 rounded-full bg-surface border-2 border-primary items-center justify-center z-20 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                                    <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
                                </div>

                                <div className={`w-full md:w-[45%] flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`glass-card p-8 w-full group hover:border-primary/50 transition-all duration-300 relative overflow-hidden pl-16 md:pl-8`}>

                                        {edu.highlight && (
                                            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-[50px] group-hover:bg-primary/30 transition-colors duration-500" />
                                        )}

                                        <div className="relative z-10">
                                            <div className="flex items-center gap-4 mb-4">
                                                <div className="p-3 bg-surface rounded-xl border border-border group-hover:rotate-12 transition-transform duration-300">
                                                    {edu.icon}
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-bold tracking-tight leading-snug">{edu.degree}</h3>
                                            </div>

                                            <p className="text-gray-200 text-lg font-medium mb-4">{edu.institution}</p>

                                            <div className="flex items-center justify-between text-sm">
                                                <span className="text-gray-400 font-medium px-3 py-1 bg-surface rounded-full border border-border">{edu.period}</span>
                                                <span className="font-bold text-accent glow-text">{edu.score}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-[45%] hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
