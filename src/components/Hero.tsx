import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, MessageSquare, Shield, HelpCircle, Server, Terminal, Sparkles, AlertTriangle } from "lucide-react";
import { nebulaLogoUrl } from "../assets/logo";

interface HeroProps {
  inviteLink: string;
  supportLink: string;
}

export default function Hero({ inviteLink, supportLink }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"tickets" | "security" | "config">("tickets");
  const [simulatedTickets, setSimulatedTickets] = useState<number>(0);
  const [showSimulatedTicketAlert, setShowSimulatedTicketAlert] = useState(false);

  const handleCreateTicketSim = () => {
    setSimulatedTickets((prev) => prev + 1);
    setShowSimulatedTicketAlert(true);
    setTimeout(() => {
      setShowSimulatedTicketAlert(false);
    }, 3500);
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-transparent nebula-grid overflow-hidden border-b border-white/5"
    >
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Decorative comet / orbit lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50%" cy="-20%" r="55%" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
          <circle cx="50%" cy="-20%" r="70%" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1.5" strokeDasharray="5,10" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero text panel */}
          <motion.div
            className="lg:col-span-6 flex flex-col space-y-6 text-center lg:text-left"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 self-center lg:self-start px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-purple-200 text-xs font-semibold uppercase tracking-wider font-display">
              <Sparkles className="h-3.5 w-3.5 text-indigo-400 animate-pulse" />
              <span>IL BOT DISCORD PIÙ VELOCE SUL MERCATO 🚀</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]">
              Porta il tuo server Discord nello spazio con{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 drop-shadow-sm">
                Nebula
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Un bot incredibilmente veloce, sicuro e completo. Automatizza l'assistenza con un sistema di ticket avanzato, proteggi i tuoi membri dall'antispam ed i raid ed applica una configurazione capillare adatta ad ogni tua esigenza.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={inviteLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#6366f1] hover:bg-[#4f46e5] text-white font-bold text-base rounded-2xl transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-xl shadow-indigo-600/30 border border-white/10 text-center flex items-center justify-center gap-2"
              >
                <span>Aggiungi a Discord</span>
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href={supportLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white font-bold text-base rounded-2xl transition-all duration-300 text-center flex items-center justify-center gap-2"
              >
                <div className="h-2 w-2 rounded-full bg-[#5865f2] animate-pulse"></div>
                <span>Server di Supporto</span>
              </a>
            </div>

            {/* Microstats banner */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/5 text-center lg:text-left max-w-md mx-auto lg:mx-0">
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-white">99.9%</span>
                <span className="text-xs text-purple-300/60 font-mono tracking-wider uppercase">Uptime Garantito</span>
              </div>
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-white">&lt; 15ms</span>
                <span className="text-xs text-purple-300/60 font-mono tracking-wider uppercase">Tempo Risposta</span>
              </div>
              <div>
                <span className="block font-display text-xl sm:text-2xl font-bold text-white">100%</span>
                <span className="text-xs text-purple-300/60 font-mono tracking-wider uppercase">Personalizzabile</span>
              </div>
            </div>
          </motion.div>

          {/* Discord Visual Interactive Mockup */}
          <motion.div
            className="lg:col-span-6 z-10 w-full"
            id="discord-playground"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          >
            <div className="relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-black/80 backdrop-blur-xl">
              {/* Discord App Window Header */}
              <div className="bg-[#111214]/80 px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                  <span className="pl-2 text-xs font-mono text-slate-400 select-none tracking-widest uppercase">Discord / Nebula Playground</span>
                </div>
                <div className="h-5 w-24 bg-black/45 rounded-md border border-white/5 flex items-center justify-center px-2">
                  <span className="text-[10px] text-slate-500 font-mono tracking-wider">LAT: 12ms</span>
                </div>
              </div>

              {/* Main Discord Layout */}
              <div className="flex h-[380px] sm:h-[420px] overflow-hidden">
                {/* Active Server Sidebar / Navigation */}
                <div className="hidden sm:flex flex-col w-48 bg-black/25 border-r border-white/10 text-slate-400 text-xs p-3 select-none">
                  <div className="flex items-center gap-2 pb-3 mb-2 border-b border-white/10 text-white">
                    <img src={nebulaLogoUrl} alt="" className="h-5 w-5 bg-black rounded-full" />
                    <span className="font-semibold tracking-wider font-display truncate">NEBULA CORNER</span>
                  </div>

                  {/* Channel Categories */}
                  <div className="space-y-4 pt-1">
                    <div>
                      <div className="text-[10px] font-bold text-slate-450 uppercase tracking-wider mb-1 px-1">INFORMAZIONI</div>
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-1.5 px-2 py-1 rounded hover:bg-white/5 cursor-pointer text-slate-400">
                          <span>#</span> <span className="truncate">👋-regole-benvenuto</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-1">ASSISTENZA TICKET</div>
                      <div className="space-y-0.5">
                        <div
                          onClick={() => setActiveTab("tickets")}
                          className={`flex items-center space-x-1.5 px-2 py-1 rounded cursor-pointer transition ${
                            activeTab === "tickets" ? "bg-white/10 text-white font-medium" : "hover:bg-white/5 text-slate-400"
                          }`}
                        >
                          <span className="text-[#a5b4fc]">#</span> <span className="truncate">🎫-supporto-ticket</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-1">SICUREZZA & LOGS</div>
                      <div className="space-y-0.5">
                        <div
                          onClick={() => setActiveTab("security")}
                          className={`flex items-center space-x-1.5 px-2 py-1 rounded cursor-pointer transition ${
                            activeTab === "security" ? "bg-white/10 text-white font-medium" : "hover:bg-white/5 text-slate-400"
                          }`}
                        >
                          <span className="text-[#a5b4fc]">#</span> <span className="truncate">🛡️-regole-antispam</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1 px-1">CONFIGURAZIONI</div>
                      <div className="space-y-0.5">
                        <div
                          onClick={() => setActiveTab("config")}
                          className={`flex items-center space-x-1.5 px-2 py-1 rounded cursor-pointer transition ${
                            activeTab === "config" ? "bg-white/10 text-white font-medium" : "hover:bg-white/5 text-slate-400"
                          }`}
                        >
                          <span className="text-[#a5b4fc]">#</span> <span className="truncate">⚙️-logs-config</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Primary Panel Chat Content */}
                <div className="flex-1 bg-black/10 p-4 flex flex-col justify-between overflow-y-auto">
                  {/* Top Header Channel Info */}
                  <div className="border-b border-white/10 pb-2 mb-3 flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-1.5">
                      <span className="text-slate-500 text-base">#</span>
                      <span className="font-bold text-white">
                        {activeTab === "tickets" && "supporto-ticket"}
                        {activeTab === "security" && "regole-antispam"}
                        {activeTab === "config" && "logs-config"}
                      </span>
                      <span className="text-slate-550">|</span>
                      <span className="text-slate-400 truncate text-[11px]">
                        {activeTab === "tickets" && "Clicca sul pulsante sottostante per parlare con lo Staff"}
                        {activeTab === "security" && "Regolazioni dei filtri e log di sicurezza attiva"}
                        {activeTab === "config" && "Configura prefisso, log ed eventi per il tuo server"}
                      </span>
                    </div>
                  </div>

                  {/* Active Screen Rendering */}
                  <div className="flex-1 space-y-4 overflow-y-auto pr-1">
                    {/* Intro Bot Info Card */}
                    <div className="flex items-start space-x-3 text-xs bg-white/5 p-3 rounded-xl border border-white/10">
                      <img src={nebulaLogoUrl} alt="Nebula avatar" className="h-8 w-8 bg-black rounded-full border border-purple-500/20" referrerPolicy="no-referrer" />
                      <div className="space-y-1">
                        <div className="flex items-center space-x-1.5">
                          <span className="font-bold text-white hover:underline cursor-pointer">Nebula</span>
                          <span className="bg-[#5865f2] text-white px-1 py-[1.5px] rounded-sm text-[8px] tracking-wide font-mono font-medium scale-90">BOT</span>
                          <span className="text-[10px] text-slate-500 font-mono">Oggi alle 12:00</span>
                        </div>
                        <p className="text-slate-300 text-[11px]">
                          Modulo <span className="text-indigo-300 font-semibold uppercase">{activeTab}</span> caricato con successo. Latenza ottimale stabilita a 12ms.
                        </p>
                      </div>
                    </div>

                    {/* Dynamic Simulated Interactive Areas */}
                    {activeTab === "tickets" && (
                      <div className="space-y-3">
                        {/* Interactive embeds */}
                        <div className="border-l-4 border-indigo-500 bg-white/5 p-4 rounded-r-xl space-y-3 border-r border-t border-b border-white/5">
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">🎫</span>
                            <h4 className="font-bold text-white text-sm font-display">CENTRO SUPPORTO NEBULA</h4>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed">
                            Hai bisogno di aiuto o desideri contattare gli amministratori? Clicca sul pulsante viola in basso per aprire una sessione privata e sicura con il nostro Staff.
                          </p>
                          <div className="text-[10px] text-slate-500 font-mono">
                            Nebula Support System • Gestito istantaneamente
                          </div>
                        </div>

                        {/* Custom Discord Action Button */}
                        <div className="flex flex-wrap gap-2 pt-1">
                          <button
                            onClick={handleCreateTicketSim}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 active:scale-95 transition-all text-white font-medium text-xs rounded-lg shadow-md flex items-center gap-1.5"
                          >
                            <span>📩</span>
                            <span>Apri Ticket</span>
                          </button>
                        </div>

                        {/* Simulated creation toast inside Discord mockup */}
                        {showSimulatedTicketAlert && (
                          <div className="bg-emerald-950/40 text-emerald-300 border border-emerald-500/30 p-2 text-[11px] rounded-xl animate-bounce flex items-center gap-1.5">
                            <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                            <span>
                              <strong>Successo!</strong> Eseguito: <code>/ticket-000{simulatedTickets}</code> aperto per te!
                            </span>
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === "security" && (
                      <div className="space-y-3">
                        <div className="border-l-4 border-rose-500 bg-white/5 p-4 rounded-r-xl space-y-2 border-r border-t border-b border-white/5">
                          <div className="flex items-center space-x-2 text-rose-400 text-xs font-semibold">
                            <Shield className="h-4 w-4 animate-pulse" />
                            <span>MOD-LOG: RILEVATO LINK SOSPETTO</span>
                          </div>
                          <p className="text-xs text-slate-300">
                            L'utente <strong className="text-white">UserSpam_4939</strong> ha provato ad inviare un invito Discord non autorizzato nel canale <span className="text-indigo-300">#generale</span>.
                          </p>
                          <div className="py-1 px-2.5 bg-black/40 rounded font-mono text-[9.5px] text-rose-300 border border-white/5">
                            Invito rilevato: discord.gg/spambot-raid
                          </div>
                          <p className="text-[10.5px] text-slate-350">
                            ⚡ <strong>Azione automatica:</strong> Messaggio eliminato • Utente ammonito per Spam (1/3).
                          </p>
                        </div>
                      </div>
                    )}

                    {activeTab === "config" && (
                      <div className="space-y-2 text-xs">
                        {/* Command Input Simulate */}
                        <div className="bg-black/30 p-2 rounded-lg font-mono text-emerald-400 text-[10.5px] border border-white/5 flex items-center gap-1.5">
                          <span className="text-slate-500 font-bold">$</span>
                          <span>/config logs channeled:#mod-logs filter:violations</span>
                        </div>

                        {/* Bot Prompt embed response */}
                        <div className="border-l-4 border-emerald-500 bg-white/5 p-3 rounded-r-xl space-y-2 border-r border-t border-b border-white/5">
                          <div className="flex items-center space-x-1">
                            <span className="text-emerald-400 text-sm">✅</span>
                            <span className="font-bold text-white text-xs">LOGGING ATTIVATO IPER-VELOCE</span>
                          </div>
                          <p className="text-slate-300 text-[11px]">
                            Le notifiche del modulo di sicurezza e moderazione verranno d'ora in poi indirizzate nel canale <span className="text-emerald-300 font-semibold shadow-sm">#mod-logs</span>.
                          </p>
                          <p className="text-[10px] text-slate-500 font-mono">
                            Prefisso server attivo: <code className="bg-[#202225] px-1 py-0.5 rounded text-indigo-300">/</code>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Input Discord Box Placeholder */}
                  <div className="mt-4 pt-2 border-t border-white/10 flex items-center justify-between gap-2">
                    <div className="flex-1 bg-black/40 rounded-lg px-3 py-2 flex items-center text-slate-500 text-[11px] font-sans border border-white/10">
                      <span className="text-slate-400 mr-2 hover:text-white cursor-pointer">+</span>
                      <span className="flex-1 select-none text-slate-405">
                        {activeTab === "tickets" && "Clicca su 'Apri Ticket' sopra per inviare un comando..."}
                        {activeTab === "security" && "La sicurezza antilink è attiva a livello globale..."}
                        {activeTab === "config" && "Digita un comando qui... (es: /config logs)"}
                      </span>
                      <span className="text-xs">😊</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Interactive Selector tabs under the card */}
            <div className="mt-4 flex items-center justify-center gap-2 sm:gap-4 md:px-4" id="discord-playground-tabs">
              <button
                onClick={() => setActiveTab("tickets")}
                className={`px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-xl font-medium border transition-all duration-300 ${
                  activeTab === "tickets"
                    ? "bg-white/10 border-white/20 text-white shadow-md"
                    : "bg-white/5 border-white/5 text-slate-400 hover:text-slate-200"
                }`}
              >
                🎫 Sistema Ticket
              </button>
              <button
                onClick={() => setActiveTab("security")}
                className={`px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-xl font-medium border transition-all duration-300 ${
                  activeTab === "security"
                    ? "bg-white/10 border-white/20 text-white shadow-md"
                    : "bg-white/5 border-white/5 text-slate-400 hover:text-slate-200"
                }`}
              >
                🛡️ Sicurezza & Filtri
              </button>
              <button
                onClick={() => setActiveTab("config")}
                className={`px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm rounded-xl font-medium border transition-all duration-300 ${
                  activeTab === "config"
                    ? "bg-white/10 border-white/20 text-white shadow-md"
                    : "bg-white/5 border-white/5 text-slate-400 hover:text-slate-200"
                }`}
              >
                ⚙️ Config Server
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
