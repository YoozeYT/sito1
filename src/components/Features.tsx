import { useState } from "react";
import { motion } from "motion/react";
import { MessageSquare, Shield, Settings, CheckCircle2, FileText, Lock, Users, Terminal, Eye, Bell } from "lucide-react";

export default function Features() {
  const [activeTab, setActiveTab] = useState<"tickets" | "security" | "config">("tickets");

  return (
    <section id="features" className="relative py-20 bg-transparent text-slate-300 border-b border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-950/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-indigo-950/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-mono font-bold text-indigo-400 tracking-widest uppercase bg-white/5 px-4 py-1.5 rounded-full border border-white/10 shadow-sm inline-block font-display">
            LE FUNZIONALITÀ DI NEBULA
          </span>
          <h2 className="font-display text-3xl sm:text-4.5xl font-extrabold text-white tracking-tight leading-tight">
            Tutto il necessario per governare il tuo server Discord
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto font-light">
            Sostituisci decine di bot pesanti e non configurati con un'unica suite per i ticket, la sicurezza impenetrabile e la personalizzazione totale, integrata e facilissima da usare.
          </p>

          {/* Interactive tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 max-w-lg mx-auto" id="feature-selector-tabs">
            <button
              onClick={() => setActiveTab("tickets")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 border ${
                activeTab === "tickets"
                  ? "bg-indigo-600 border-white/15 text-white shadow-lg shadow-indigo-600/20 scale-[1.02]"
                  : "bg-white/5 border-white/5 text-slate-400 hover:text-slate-200"
              }`}
            >
              <MessageSquare className="h-4 w-4" />
              <span>🎫 Sistema Ticket</span>
            </button>

            <button
              onClick={() => setActiveTab("security")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 border ${
                activeTab === "security"
                  ? "bg-indigo-600 border-white/15 text-white shadow-lg shadow-indigo-600/20 scale-[1.02]"
                  : "bg-white/5 border-white/5 text-slate-400 hover:text-slate-200"
              }`}
            >
              <Shield className="h-4 w-4" />
              <span>🛡️ Sicurezza & Antispam</span>
            </button>

            <button
              onClick={() => setActiveTab("config")}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 border ${
                activeTab === "config"
                  ? "bg-indigo-600 border-white/15 text-white shadow-lg shadow-indigo-600/20 scale-[1.02]"
                  : "bg-white/5 border-white/5 text-slate-400 hover:text-slate-200"
              }`}
            >
              <Settings className="h-4 w-4" />
              <span>⚙️ Config per Server</span>
            </button>
          </div>
        </motion.div>

        {/* Feature Display Window */}
        <motion.div
          className="glass-panel rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl shadow-black/80 relative overflow-hidden backdrop-blur-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="absolute top-0 right-0 h-40 w-40 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

          {activeTab === "tickets" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fadeIn" id="feature-tickets">
              {/* Left Info content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="h-10 w-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-indigo-300 font-bold shadow-sm">
                  🎫
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Gestione Ticket interattiva ed istantanea
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  Offri alla tua community un modulo di supporto pulito e professionale. Dimentica i comandi testuali complessi: i tuoi membri aprono i ticket premendo semplicemente un comodo pulsante interattivo.
                </p>

                {/* Sub features checklists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Transcripts in PDF/HTML</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Salva la chat intera del ticket in archivio sicuro alla chiusura.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Claiming dei Ticket</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Assegna velocemente il ticket ad uno o più membri dello Staff per evitare duplicati.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Pannelli Multipli</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Crea canali separati per supporti differenti (es: Shop, Bug, Candidature).</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Aperture Istantanee</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Canale dedicato privato istantaneo in meno di 10ms.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Mock Panel */}
              <div className="lg:col-span-6 bg-black/40 border border-white/10 rounded-2xl p-6 shadow-inner space-y-4 backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs">
                  <span className="font-mono text-purple-300 font-semibold">DISCORD PREVIEW • EMULATORE</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-300 font-mono text-[10px] border border-emerald-500/30">OPERATIONAL</span>
                </div>

                {/* Simulated Custom Embed */}
                <div className="bg-white/5 rounded-xl p-4 border-l-4 border-indigo-500 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full bg-white/5 flex items-center justify-center text-xs">🚀</div>
                    <span className="text-xs font-bold text-white uppercase tracking-wider font-display">Apertura Segnalazione #ticket-0021</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    Benvenuto <strong className="text-white">Luca_897</strong>! Spiega con dovuto dettaglio la tua richiesta di supporto in questo canale. Un membro dello staff di moderazione prenderà in carico la richiesta a breve.
                  </p>
                  <div className="bg-black/30 rounded p-2.5 font-mono text-[10px] text-indigo-300 flex justify-between items-center border border-white/5">
                    <span>👥 Ruolo assecondato: @Staff-Supporto</span>
                    <span className="text-slate-500 font-mono">LAT: 11ms</span>
                  </div>
                </div>

                {/* Simulate Moderation Buttons */}
                <div className="grid grid-cols-3 gap-2">
                  <div className="p-2.5 bg-white/5 border border-white/10 rounded-xl text-center cursor-default hover:bg-white/10 transition">
                    <span className="block text-xs font-semibold text-white">🙋‍♂️ Prendi</span>
                    <span className="text-[9px] font-mono text-slate-400">Claim Ticket</span>
                  </div>
                  <div className="p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-center cursor-default hover:bg-rose-500/20 transition">
                    <span className="block text-xs font-semibold text-rose-300">🔒 Chiudi</span>
                    <span className="text-[9px] font-mono text-rose-450">Save Transcript</span>
                  </div>
                  <div className="p-2.5 bg-[#141f39] border border-blue-500/20 rounded-xl text-center cursor-default hover:bg-blue-950/40 transition">
                    <span className="block text-xs font-semibold text-blue-300">📥 Transcript</span>
                    <span className="text-[9px] font-mono text-blue-400">HTML Log</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "security" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fadeIn" id="feature-security">
              {/* Left Info content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="h-10 w-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-rose-400 font-bold shadow-sm">
                  🛡️
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Sicurezza infallibile ed Antispam reattivo
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  Mantieni la tua community pulita ed al sicuro dai cyber-attacchi. Nebula blocca istantaneamente gli spammer, elimina i link non autorizzati ai server concorrenti e impone una barriera per garantire il massimo rispetto delle regole.
                </p>

                {/* Sub features checklists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="flex items-start gap-2.5">
                    <Lock className="h-5 w-5 text-rose-405 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Antilink Intelligente</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Rilevamento ed eliminazione istantanea di link e inviti Discord fraudolenti.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Lock className="h-5 w-5 text-rose-405 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Protezione dai Raid</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Lockdown provvisorio automatico dei canali in caso di afflusso violento o massivo di utenti.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Lock className="h-5 w-5 text-rose-405 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Rilevamento Auto-Mod</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Previene insulti selvaggi, spam di emoticon e menzioni di massa in microsecondi.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Lock className="h-5 w-5 text-rose-405 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Verifica Captcha</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Impone una verifica ad ingresso per evitare bots dannosi e account fake.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Mock Panel */}
              <div className="lg:col-span-6 bg-black/40 border border-white/10 rounded-2xl p-6 shadow-inner space-y-4 backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs">
                  <span className="font-mono text-rose-300 font-bold">FILTRO SICUREZZA • LOG EVENTI</span>
                  <span className="px-2 py-0.5 rounded-full bg-rose-950 text-rose-300 font-mono text-[10px] border border-rose-500/35">DANGER RILEVATO</span>
                </div>

                <div className="space-y-2">
                  <div className="bg-black/30 rounded-xl p-3.5 border border-rose-500/20 text-xs flex gap-3">
                    <span className="text-rose-405 text-base shrink-0">🚨</span>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1.5 font-mono text-[10px]">
                        <span className="text-rose-300 font-bold">AUTO-MOD BAN</span>
                        <span className="text-slate-500">•</span>
                        <span>07/06/2026 alle 12:05</span>
                      </div>
                      <p className="text-slate-205">
                        L'utente <strong className="text-white">RaidBot_992</strong> è stato espulso per tentativo di invio multiplo di link sospetti in meno di 2 secondi.
                      </p>
                      <p className="text-[10px] text-slate-400">
                        <strong>Canale bersagliato:</strong> #chat-del-server • <strong>Azione automatica:</strong> Ban Permanente
                      </p>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2.5 flex items-center justify-between border border-white/5 text-[10.5px]">
                    <span className="text-slate-400">Attiva filtro antilink globale:</span>
                    <span className="text-green-400 font-mono font-bold">ABILITATO ✓</span>
                  </div>

                  <div className="bg-white/5 rounded-lg p-2.5 flex items-center justify-between border border-white/5 text-[10.5px]">
                    <span className="text-slate-400">Soglia massima messaggi/sec:</span>
                    <span className="text-yellow-400 font-mono font-bold">4 MESSAGGI</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "config" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center animate-fadeIn" id="feature-config">
              {/* Left Info content */}
              <div className="lg:col-span-6 space-y-6">
                <div className="h-10 w-10 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-cyan-400 font-bold shadow-sm">
                  ⚙️
                </div>
                <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Configurazione modulare per ogni Server
                </h3>
                <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                  Ogni server Discord è governato da una propria anima. Nebula lo sa e ti permette di cucire su misura prefissi per i comandi classici, log differenziati per categoria di eventi ed una accoglienza memorabile per ogni iscritto.
                </p>

                {/* Sub features checklists */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                  <div className="flex items-start gap-2.5">
                    <Users className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Log di Canale Separati</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Spedisci resoconti differenti (es: moderazione o messaggi cancellati) in canali differenti.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Users className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Welcome Messages</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Invia un messaggio di benvenuto con una bellissima card grafica descrittiva automatica.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Users className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Prefisso Personalizzato</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Sottolinea l'unicità del tuo server potendo mutare il prefisso dei comandi tradizionali.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <Users className="h-5 w-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">Comandi Semplificati</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Interfaccia interattiva visuale pulitissima con messaggi informativi accurati.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Mock Panel */}
              <div className="lg:col-span-6 bg-black/40 border border-white/10 rounded-2xl p-6 shadow-inner space-y-4 backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 border-b border-white/5 text-xs">
                  <span className="font-mono text-cyan-300 font-bold">LOG CONFIGURAZIONE • STATO</span>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-300 font-mono text-[10px] border border-cyan-500/30">SETUP READY</span>
                </div>

                <div className="bg-black/30 border border-white/5 p-4 rounded-xl space-y-3">
                  <div className="flex items-center justify-between text-xs text-white">
                    <span className="font-semibold">Benvenuti automatici:</span>
                    <span className="px-2 py-0.5 text-[9px] bg-cyan-950 text-cyan-400 border border-cyan-500/30 font-mono font-medium rounded">ABILITATO</span>
                  </div>

                  {/* Welcome visual card simulate */}
                  <div className="bg-white/5 rounded-xl p-3 text-center border-dashed border border-white/10 text-xs">
                    <div className="h-10 w-10 mx-auto rounded-full bg-cyan-500/10 flex items-center justify-center text-base mb-1.5 border border-cyan-500/25">
                      👋
                    </div>
                    <p className="text-white font-bold text-xs uppercase">BENVENUTO NEL SERVER!</p>
                    <p className="text-[10px] text-slate-400 mt-0.5 font-light">Sei il membro #1240 di questo fantastico equipaggio</p>
                  </div>

                  <div className="border-t border-white/5 pt-3 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Canale di Atterraggio:</span>
                    <code className="text-cyan-300 font-mono font-bold bg-black/35 px-1.5 py-0.5 rounded">#👋-welcome</code>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
