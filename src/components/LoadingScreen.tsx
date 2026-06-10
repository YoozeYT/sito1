import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles } from "lucide-react";

interface LoadingScreenProps {
  onFinished: () => void;
  key?: string;
}

export default function LoadingScreen({ onFinished }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 2000; // 2 seconds loader
    const intervalTime = 40;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min((currentStep / steps) * 100, 100);
      setProgress(Math.round(currentProgress));

      if (currentStep >= steps) {
        clearInterval(timer);
        setIsDone(true);
        // Add a micro-delay for clean fade-out transition
        setTimeout(() => {
          onFinished();
        }, 500);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onFinished]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          id="loading-screen"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030305] text-white select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {/* Background elements */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/10 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute top-1/3 left-1/4 w-[250px] h-[250px] bg-purple-600/10 rounded-full blur-[80px]"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center max-w-sm px-6 text-center space-y-6">
            {/* Animated Logo / Icon container */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative flex items-center justify-center h-20 w-20 rounded-2xl bg-white/5 border border-white/10 shadow-xl shadow-indigo-600/10"
            >
              <span className="text-3xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-indigo-400 to-purple-400">
                N
              </span>
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-indigo-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase font-mono tracking-wider text-indigo-300"
              >
                <Sparkles className="h-3 w-3 animate-pulse" />
                <span>Zentry Nebula Studios</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-xl font-display font-extrabold tracking-tight text-white"
              >
                Caricamento di Nebula...
              </motion.h2>
            </div>

            {/* Custom progress bar and counter */}
            <div className="w-48 space-y-2">
              <div className="h-[3px] w-full bg-white/5 rounded-full overflow-hidden border border-white/5 relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-indigo-505 via-indigo-500 to-purple-500 rounded-full"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between font-mono text-[10px] text-slate-500">
                <span>INIZIALIZZAZIONE</span>
                <span>{progress}%</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
