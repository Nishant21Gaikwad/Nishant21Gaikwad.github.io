import { motion } from 'framer-motion';

const SplashScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] bg-background flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] opacity-40 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[80px] opacity-30 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
                {/* Rectangle Border Animation replacing the circular ring */}
                <div className="relative mb-10 p-4">
                    {/* SVG Rectangular Tracing Path */}
                    <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                        <rect
                            x="2"
                            y="2"
                            width="98%"
                            height="98%"
                            rx="16"
                            ry="16"
                            fill="none"
                            stroke="#1E3A8A" // Dark blue track
                            strokeWidth="2"
                        />
                        <motion.rect
                            x="2"
                            y="2"
                            width="98%"
                            height="98%"
                            rx="16"
                            ry="16"
                            fill="none"
                            stroke="url(#glowGradient)"
                            strokeWidth="4"
                            strokeDasharray="0 1000"
                            animate={{
                                strokeDasharray: ["0 1000", "800 0"]
                            }}
                            transition={{ duration: 5, ease: "linear" }}
                            className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                        />
                        <defs>
                            <linearGradient id="glowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#3B82F6" /> {/* primary */}
                                <stop offset="100%" stopColor="#6EE7B7" /> {/* accent */}
                            </linearGradient>
                        </defs>
                    </svg>

                    {/* Photo / Avatar ring */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "backOut" }}
                        className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl p-1 bg-surface shadow-[0_0_50px_rgba(59,130,246,0.2)] flex items-center justify-center z-10"
                    >
                        {/* Inner photo container */}
                        <div className="w-full h-full bg-surface rounded-xl flex items-center justify-center overflow-hidden border-4 border-background relative z-10">
                            <img
                                src="/profile.jpeg"
                                alt="Nishant Gaikwad"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    target.parentElement?.querySelector('span')?.classList.remove('hidden');
                                }}
                            />
                            {/* Fallback Initials */}
                            <span className="hidden text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">NG</span>
                        </div>
                    </motion.div>
                </div>

                {/* Greetings Text */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="text-center"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-white">
                        Welcome, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Nishant.</span>
                    </h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="text-xl md:text-2xl text-gray-400 tracking-wide font-medium"
                    >
                        Engineering solutions for tomorrow.
                    </motion.p>
                </motion.div>

                {/* Loading indicator precise 5-second timing match */}
                <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: "250px", opacity: 1 }}
                    transition={{ delay: 1, duration: 3.5, ease: "easeInOut" }}
                    className="h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-12 shadow-[0_0_15px_rgba(59,130,246,0.6)]"
                />
            </div>
        </motion.div>
    );
};

export default SplashScreen;
