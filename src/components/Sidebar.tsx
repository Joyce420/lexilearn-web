import React from "react";
import { 
  LayoutDashboard, 
  MessageSquare, 
  BookOpen, 
  Trophy, 
  BarChart3, 
  User, 
  Settings,
  Languages
} from "lucide-react";
import { motion } from "motion/react";
import { cn } from "../lib/utils";

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
}

const navItems = [
  { id: "dashboard", icon: LayoutDashboard, label: "控制面板" },
  { id: "aitutor", icon: MessageSquare, label: "AI 导师" },
  { id: "courses", icon: BookOpen, label: "词汇实验室" },
  { id: "reports", icon: BarChart3, label: "智能报告" },
  { id: "achievements", icon: Trophy, label: "学生护照" },
];

export function Sidebar({ activeView, onViewChange }: SidebarProps) {
  return (
    <motion.aside 
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="fixed left-6 top-6 bottom-6 w-20 lg:w-64 glass-card p-4 flex flex-col z-50 border-white/5"
    >
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple flex items-center justify-center shadow-lg shadow-neon-cyan/20">
          <Languages className="text-white w-6 h-6" />
        </div>
        <span className="text-xl font-display font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 hidden lg:block">
          LEXILEARN
        </span>
      </div>

      <nav className="flex-1 space-y-2">
        {navItems.map((item) => {
          const isActive = activeView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={cn(
                "w-full flex items-center gap-4 p-3 rounded-xl transition-all duration-300 group relative overflow-hidden",
                isActive 
                  ? "bg-white/10 text-neon-cyan shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]" 
                  : "text-slate-400 hover:text-white hover:bg-white/5"
              )}
            >
              {isActive && (
                <motion.div 
                  layoutId="active-pill"
                  className="absolute left-0 top-0 bottom-0 w-1 bg-neon-cyan"
                />
              )}
              <item.icon className={cn(
                "w-6 h-6 shrink-0 transition-transform duration-300 group-hover:scale-110",
                isActive && "neon-text-cyan"
              )} />
              <span className="font-medium hidden lg:block tracking-wide">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="mt-auto space-y-2 pt-4 border-t border-white/5">
        <button className="w-full flex items-center gap-4 p-3 rounded-xl text-slate-400 hover:text-white transition-colors group">
          <Settings className="w-6 h-6 group-hover:rotate-45 transition-transform duration-500" />
          <span className="font-medium hidden lg:block">设置</span>
        </button>
        <div className="p-3 glass-card bg-white/5 border-white/5 mt-4 hidden lg:block">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-white/10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&auto=format&fit=crop" 
                alt="User" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Alex Chen</p>
              <p className="text-xs text-slate-500 truncate">24级 语言探索者</p>
            </div>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}
