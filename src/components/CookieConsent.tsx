import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, X } from "lucide-react";

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    // Check if user already accepted cookies
    const accepted = localStorage.getItem("cookie_consent_accepted");
    if (!accepted) {
      // Small delay so it pops up elegantly after page load
      const timer = setTimeout(() => {
        setShowConsent(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem("cookie_consent_accepted", "all");
    setShowConsent(false);
  };

  const handleAcceptNecessary = () => {
    localStorage.setItem("cookie_consent_accepted", "necessary");
    setShowConsent(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent_accepted", "declined");
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          id="cookie-consent-banner"
          className="fixed bottom-4 left-4 right-4 md:bottom-6 md:right-6 md:left-auto md:max-w-md z-40 bg-[#0c0c12]/90 border border-white/10 p-5 sm:p-6 rounded-3xl backdrop-blur-xl shadow-2xl shadow-black/80 flex flex-col gap-4"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-indigo-505/10 text-indigo-400 border border-indigo-500/20">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="font-display font-bold text-white text-sm">Informativa sui Cookie 🍪</h4>
            </div>
            <button
              onClick={() => setShowConsent(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg transition-colors border border-transparent hover:border-white/5"
              title="Chiudi informativa"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-300 leading-relaxed">
            Zentry Nebula Studios utilizza cookie tecnici e analitici per ottimizzare l'esperienza utente, raccogliere statistiche e garantire la sicurezza del nostro portale.
          </p>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-2 mt-1">
            <button
              onClick={handleAcceptNecessary}
              className="py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition border border-white/5 hover:border-white/10"
            >
              Solo Necessari
            </button>
            <button
              onClick={handleAcceptAll}
              className="py-2 px-3 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-505 rounded-xl transition shadow-lg shadow-indigo-600/15 border border-white/10"
            >
              Accetta Tutti
            </button>
          </div>

          <div className="text-center">
            <button
              onClick={handleDecline}
              className="text-[10px] text-slate-500 hover:text-slate-300 cursor-pointer underline underline-offset-2 transition-colors"
            >
              Rifiuta non indispensabili
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
