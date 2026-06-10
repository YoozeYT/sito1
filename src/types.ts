export interface Command {
  name: string;
  description: string;
  usage: string;
  example: string;
  category: 'tickets' | 'security' | 'config' | 'util';
  permissions?: string;
}

export interface FeatureDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  capabilities: string[];
  mockUpHtml: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ_DATA: FAQItem[] = [
  {
    question: "Come posso invitare Nebula nel mio server Discord?",
    answer: "Puoi invitare Nebula cliccando sul pulsante 'Aggiungi a Discord' o 'Invita Nebula' presente in questo sito. Ti verrà richiesto di accedere con il tuo account Discord ed autorizzare il bot con i permessi necessari (ti consigliamo il permesso di Amministratore per consentire il pieno funzionamento della sicurezza e del sistema di ticket)."
  },
  {
    question: "Nebula è davvero un bot gratuito?",
    answer: "Sì, tutte le funzionalità principali di Nebula (Ticket illimitati, Moderazione automatica reattiva, Sicurezza Antilink e configurazione avanzata) sono totalmente gratuite ed accessibili a tutti i server."
  },
  {
    question: "Quanto è veloce il tempo di risposta di Nebula?",
    answer: "Nebula è ospitato su server ad altissime prestazioni con connessioni ultra-rapide ai gateway di Discord. Il tempo di risposta medio a comandi ed interazioni è inferiore a 15ms, rendendolo uno dei bot più veloci sul mercato."
  },
  {
    question: "Come si configura il sistema di Ticket?",
    answer: "È semplicissimo! Puoi avviare la configurazione guidata con il comando `/ticket setup`. Verrai guidato nella scelta del canale dove inviare il messaggio del Ticket, dei ruoli di supporto che potranno gestirli e della categoria in cui aprirli."
  },
  {
    question: "Nebula offre un sistema di log per la sicurezza?",
    answer: "Assolutamente sì. Con il modulo delle configurazioni puoi attivare i log dettagliati. Nebula registrerà mod-log (ban, kick, mute), cancellazioni di messaggi, modifiche di ruoli e persino transcripts integrali dei ticket chiusi direttamente nel tuo server."
  },
  {
    question: "Il bot riceve aggiornamenti frequenti?",
    answer: "Sì, il team di Nebula lavora costantemente per introdurre nuove funzionalità, ottimizzazioni della velocità e aggiornamenti per garantire la massima conformità alle nuove linee guida di Discord."
  }
];

export const STATS_DATA = {
  servers: "1,240+",
  users: "94,000+",
  ping: "~12ms",
  uptime: "99.99%",
  ticketsSaved: "450,000+"
};

export const COMMANDS_DATA: Command[] = [
  // TICKETS
  {
    name: "/ticket setup",
    description: "Inizia la configurazione interattiva del pannello ticket con pulsanti personalizzati.",
    usage: "/ticket setup [canale] [ruolo_supporto] [categoria_ticket]",
    example: "/ticket setup #ticket @Staff 🎫 TICKET-ARCHIVIO",
    category: "tickets",
    permissions: "Administrator"
  },
  {
    name: "/ticket add",
    description: "Aggiunge un utente specifico al ticket attualmente aperto.",
    usage: "/ticket add [utente]",
    example: "/ticket add @MarioRossi",
    category: "tickets",
    permissions: "Manage Threads / Staff"
  },
  {
    name: "/ticket remove",
    description: "Rimuove un utente specifico dal ticket corrente.",
    usage: "/ticket remove [utente]",
    example: "/ticket remove @UserScomodo",
    category: "tickets",
    permissions: "Manage Threads / Staff"
  },
  {
    name: "/ticket close",
    description: "Chiude il ticket corrente, salva una trascrizione (transcript) e notifica l'utente.",
    usage: "/ticket close [motivo_opzionale]",
    example: "/ticket close Assistenza completata con successo",
    category: "tickets",
    permissions: "Manage Threads / Staff"
  },
  {
    name: "/ticket claim",
    description: "Assegna la gestione del ticket corrente al membro dello staff che esegue il comando.",
    usage: "/ticket claim",
    example: "/ticket claim",
    category: "tickets",
    permissions: "Staff Only"
  },

  // SECURITY
  {
    name: "/security antilink",
    description: "Abilita o disabilita il filtro antilink automatico per prevenire inviti Discord o links esterni sospetti.",
    usage: "/security antilink [stato: true/false] [eccezioni_ruolo: opzionale]",
    example: "/security antilink true @VIP-Gold",
    category: "security",
    permissions: "Manage Server"
  },
  {
    name: "/security antispam",
    description: "Attiva la rilevazione automatica dell'invio compulsivo di messaggi o menzioni multiple.",
    usage: "/security antispam [stato: true/false] [soglia_messaggi]",
    example: "/security antispam true 5",
    category: "security",
    permissions: "Manage Server"
  },
  {
    name: "/security verify",
    description: "Configura un sistema di captcha o di reazione per consentire l'accesso al server ai soli umani.",
    usage: "/security verify setup [canale] [ruolo_verificato]",
    example: "/security verify setup #verifica @Verificato",
    category: "security",
    permissions: "Administrator"
  },
  {
    name: "/ban",
    description: "Sospende permanentemente un utente dal server con salvataggio log.",
    usage: "/ban [utente] [motivo] [cancella_messaggi_giorni]",
    example: "/ban @Troll Raid spammer 7",
    category: "security",
    permissions: "Ban Members"
  },
  {
    name: "/mute",
    description: "Mette in muto temporaneo un utente via Discord Timeouts.",
    usage: "/mute [utente] [durata: 15m/1h/1d] [motivo]",
    example: "/mute @Spammer 1h linguaggio volgare",
    category: "security",
    permissions: "Moderate Members"
  },

  // CONFIG
  {
    name: "/config prefix",
    description: "Consente di impostare un prefisso alternativo per i comandi classici, anche se Nebula supporta nativamente gli Slash Commands interattivi.",
    usage: "/config prefix [nuovo_prefisso]",
    example: "/config prefix n!",
    category: "config",
    permissions: "Manage Server"
  },
  {
    name: "/config logs",
    description: "Invia notifiche automatiche degli eventi di sicurezza su un canale log dedicato.",
    usage: "/config logs [canale] [filtro: all/mod/messages/joins]",
    example: "/config logs #mod-logs all",
    category: "config",
    permissions: "Manage Server"
  },
  {
    name: "/config welcome",
    description: "Configura un messaggio di benvenuto con card grafica opzionale o embed interattivo per i nuovi arrivati.",
    usage: "/config welcome setup [canale] [messaggio]",
    example: "/config welcome setup #benvenuto Benvenuto {user} nel nostro server stellare!",
    category: "config",
    permissions: "Manage Server"
  },

  // UTILITY
  {
    name: "/ping",
    description: "Mostra la velocità di risposta del bot e la latenza delle API di Discord.",
    usage: "/ping",
    example: "/ping",
    category: "util"
  },
  {
    name: "/serverinfo",
    description: "Visualizza statistiche avanzate, dettagli e informazioni generali sul server corrente.",
    usage: "/serverinfo",
    example: "/serverinfo",
    category: "util"
  }
];
