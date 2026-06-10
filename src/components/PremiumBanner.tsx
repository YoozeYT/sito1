import { motion } from "motion/react";
import { ArrowRight, Sparkles, MessageSquare, ShieldCheck, Heart } from "lucide-react";

interface PremiumBannerProps {
  inviteLink: string;
  supportLink: string;
}

export default function PremiumBanner({ inviteLink, supportLink }: PremiumBannerProps) {
  return (
    <section className="py-20 bg-transparent relative z-10 overflow-hidden border-b border-white/5" id="join-invite-banner">
      {/* Background blobs for premium cosmetic feels */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-indigo-800/10 to-purple-800/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="glass-panel rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Subtle cosmic particle grids */}
          <div className="absolute inset-0 nebula-grid opacity-15 pointer-events-none"></div>

          <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-505/5 rounded-full blur-2xl pointer-events-none"></div>

          <div className="max-w-2xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs font-mono font-bold tracking-wider uppercase font-display">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-pulse" />
              <span>SETUP RAPIDO • GESTIONE IMMEDIATA</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4.5xl font-extrabold text-white tracking-tight leading-tight">
              Sei pronto a rivoluzionare la tua community?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              Invitando Nebula avrai a disposizione un bot Discord affidabile, interamente tradotto in Italiano, reattivo al millisecondo e libero da pubblicità. Salvaguarda i tuoi canali e accogli i tuoi iscritti con uno stile regale.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href={inviteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-base rounded-xl transition duration-300 hover:scale-[1.03] shadow-lg shadow-indigo-600/20 border border-white/10 flex items-center justify-center gap-2"
              >
                <span>Aggiungi Nebula Ora</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={supportLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 border border-white/10 hover:bg-white/10 text-indigo-300 hover:text-white font-bold text-base rounded-xl transition duration-300 flex items-center justify-center gap-2"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-indigo-400 animate-ping"></div>
                <span>Chiedi Aiuto su Discord</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400 font-mono pt-6 border-t border-white/5 max-w-md mx-auto">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-green-400" />
                Sicuro al 100%
              </span>
              <span className="flex items-center gap-1">
                <Heart className="h-3.5 w-3.5 text-indigo-400" />
                Sviluppato con Amore
              </span>
              <span className="flex items-center gap-1">
                <MessageSquare className="h-3.5 w-3.5 text-blue-400" />
                Supporto attivo
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
