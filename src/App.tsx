import React, { useState } from "react";
import { Sidebar } from "./components/Sidebar";
import { Dashboard } from "./views/Dashboard";
import { AiTutor } from "./views/AiTutor";
import { CourseGallery } from "./views/CourseGallery";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bell, 
  Search, 
  Command,
  HelpCircle
} from "lucide-react";

export default function App() {
  const [activeView, setActiveView] = useState("dashboard");

  const renderView = () => {
    switch (activeView) {
      case "dashboard": return <Dashboard />;
      case "aitutor": return <AiTutor />;
      case "courses": return <CourseGallery />;
      case "reports": return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <div className="w-20 h-20 rounded-full bg-neon-purple/20 flex items-center justify-center mb-6 border border-neon-purple/30">
            <Command className="w-10 h-10 text-neon-purple" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-2 text-white">智能分析加载中</h2>
          <p className="text-slate-500 max-w-sm">正在同步您的认知增长图谱。该模块将在您下次会话后可用。</p>
        </div>
      );
      case "achievements": return (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          <div className="w-20 h-20 rounded-full bg-neon-cyan/20 flex items-center justify-center mb-6 border border-neon-cyan/30">
            <HelpCircle className="w-10 h-10 text-neon-cyan" />
          </div>
          <h2 className="text-3xl font-display font-bold mb-2 text-white">探索者护照</h2>
          <p className="text-slate-500 max-w-sm">您的数字成就正在生成中，将永久记录在您的学习链路里。</p>
        </div>
      );
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
