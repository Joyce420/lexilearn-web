import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./views/Dashboard";
import { AiTutor } from "./views/AiTutor";
import { CourseGallery } from "./views/CourseGallery";
import { Reports } from "./views/Reports";
import { Achievements } from "./views/Achievements";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bell, 
  Search
} from "lucide-react";

export default function App() {
  const [activeView, setActiveView] = useState("dashboard");

  const renderView = () => {
    switch (activeView) {
      case "dashboard": return <Dashboard />;
      case "aitutor": return <AiTutor />;
      case "courses": return <CourseGallery />;
      case "reports": return <Reports />;
      case "achievements": return <Achievements />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-void flex selection:bg-neon-cyan selection:text-void">
      <Sidebar activeView={activeView} onViewChange={setActiveView} />
      
      <main className="flex-1 lg:ml-72 p-6 lg:p-10 relative">
        {/* Top Floating Bar */}
        <div className="flex items-center justify-between mb-10">
          <div className="relative group hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-hover:text-neon-cyan transition-colors" />
            <input 
              type="text" 
              placeholder="搜索神经元..."
              className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-neon-cyan/50 text-white w-64 transition-all focus:w-80"
            />
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <button className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:border-neon-cyan/30 text-slate-400 hover:text-neon-cyan transition-all relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-neon-cyan rounded-full border-2 border-void" />
            </button>
            <div className="h-8 w-px bg-white/10 mx-2" />
            <div className="flex items-center gap-3 glass-card bg-white/5 border-white/5 pl-2 pr-4 py-1.5 rounded-full">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-neon-cyan to-neon-purple p-[1px]">
                <div className="w-full h-full rounded-full bg-void flex items-center justify-center text-[10px] font-bold text-white uppercase">
                  AC
                </div>
              </div>
              <span className="text-xs font-bold font-mono tracking-tighter text-white">LVL 24</span>
            </div>
          </div>
        </div>

        {/* View Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeView}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {renderView()}
          </motion.div>
        </AnimatePresence>

        {/* Background Decorative Elements */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-neon-purple/5 blur-[120px] -z-10 pointer-events-none" />
        <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-neon-cyan/5 blur-[120px] -z-10 pointer-events-none" />
      </main>
    </div>
  );
}