import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PremiumBanner from "./components/PremiumBanner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import CookieConsent from "./components/CookieConsent";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const inviteLink = "https://discord.com/oauth2/authorize?client_id=1492792025886625882&permissions=8&integration_type=0&scope=bot";
  const supportLink = "https://discord.gg/wjtJdsRhcg";

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen key="loader" onFinished={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            id="nebula-landing-app"
            className="relative min-h-screen bg-[#030305] text-slate-300 selection:bg-indigo-600 selection:text-white overflow-x-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Dynamic Cosmic Backdrop / Ambient Mesh Gradients */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
              <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[120px]"></div>
              <div className="absolute bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
              <div className="absolute top-[20%] left-[30%] w-[400px] h-[400px] bg-indigo-505/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Navigation bar */}
            <Navbar inviteLink={inviteLink} supportLink={supportLink} />

            {/* Sections of page */}
            <Hero inviteLink={inviteLink} supportLink={supportLink} />
            
            <Features />
            
            <PremiumBanner inviteLink={inviteLink} supportLink={supportLink} />
            
            <FAQ />

            {/* Page footer */}
            <Footer inviteLink={inviteLink} supportLink={supportLink} />

            {/* Cookie Approval Banner */}
            <CookieConsent />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
