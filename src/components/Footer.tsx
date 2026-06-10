import { MessageSquare, Heart, ShieldAlert, ArrowUpRight } from "lucide-react";
import { nebulaLogoUrl } from "../assets/logo";

interface FooterProps {
  inviteLink: string;
  supportLink: string;
}

export default function Footer({ inviteLink, supportLink }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09080e] border-t border-[#1b173a] pt-16 pb-8 relative z-10" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#1b173a]">
          {/* Brand Info Side Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#" className="flex items-center space-x-3 group w-max">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500 rounded-full blur-sm opacity-40"></div>
                <img
                  src={nebulaLogoUrl}
                  alt="Nebula Logo"
                  className="relative h-10 w-10 object-cover rounded-full border border-purple-500/30"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display text-xl font-bold tracking-wider text-white">
                NEBULA
              </span>
            </a>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed font-light">
              Un bot Discord di nuova generazione concepito per unire sotto un'unica ala un velocissimo modulo ticket, sicurezza attiva antispam ed una configurazione per server capillare.
            </p>
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 text-[10px] bg-[#14122d] border border-[#2d255a]/60 text-indigo-300 font-mono rounded">
                Ping: ~12ms
              </span>
              <span className="px-2.5 py-1 text-[10px] bg-[#0c1c1f] border border-[#14474f]/60 text-cyan-300 font-mono rounded flex items-center gap-1">
                <div className="h-1.5 w-1.5 bg-green-400 rounded-full animate-ping"></div>
                Status: Online
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-slate-250 uppercase">Navigazione</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#features" className="text-slate-400 hover:text-white transition duration-150">
                  Caratteristiche
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-white transition duration-150">
                  Domande Frequenti (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Core Bot Invites List Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-wider text-slate-250 uppercase">Collegamenti Rapidi</h4>
            <ul className="space-y-3 text-xs sm:text-sm">
              <li>
                <a
                  href={inviteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-300 hover:text-purple-100 font-semibold flex items-center gap-1 transition duration-150"
                >
                  Invita Nebula nel Server <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={supportLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-300 hover:text-indigo-100 font-semibold flex items-center gap-1 transition duration-150"
                >
                  Entra nel Discord di Supporto <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </li>
              <li>
                <div className="p-3 bg-[#131126] border border-[#231a4f] rounded-lg text-slate-400 max-w-sm leading-relaxed text-[11px] font-light">
                  <span className="font-semibold text-slate-300 block mb-0.5">🚀 Sei uno sviluppatore o staffer?</span>
                  Accedi al nostro server Discord per proporre integrazioni o segnalare bug del bot.
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Disclaimer level */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-slate-500 text-[11px] font-mono">
          <div className="space-y-1 text-center sm:text-left">
            <p>© {currentYear} Nebula Discord Bot. Tutti i diritti riservati.</p>
            <p className="text-[10px] select-none text-slate-600">
              Non siamo associati o affiliati ufficialmente a Discord Inc., MEE6 o altri servizi citati.
            </p>
          </div>
          <div className="flex items-center gap-1.5 font-sans text-xs text-slate-400">
            <span>Fatto con cuore da</span>
            <span className="font-semibold text-indigo-400">Zentry Nebula Studios</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
