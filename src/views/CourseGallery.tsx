import React from "react";
import { 
  Dna, 
  Search, 
  Play, 
  Clock, 
  Star,
  Layers,
  ChevronRight,
  Filter
} from "lucide-react";
import { motion } from "motion/react";

const labs = [
  {
    id: 1,
    title: "量子词汇",
    category: "技术领域",
    words: 156,
    duration: "45m",
    level: "高级",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=300&fit=crop",
    color: "neon-cyan"
  },
  {
    id: 2,
    title: "神经语法结构",
    category: "语法专项",
    words: 84,
    duration: "30m",
    level: "中级",
    image: "https://images.unsplash.com/photo-1558486012-817176f84c6d?w=400&h=300&fit=crop",
    color: "neon-purple"
  },
  {
    id: 3,
    title: "声学共振",
    category: "听力强化",
    words: 42,
    duration: "15m",
    level: "初级",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=300&fit=crop",
    color: "neon-cyan"
  },
  {
    id: 4,
    title: "习惯用语注入",
    category: "文化沉浸",
    words: 210,
    duration: "60m",
    level: "专家",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop",
    color: "neon-purple"
  }
];

export function CourseGallery() {
  return (
    <div className="space-y-8 pb-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-display font-bold">词汇实验室 <span className="text-slate-500 font-normal">/ 全部课程</span></h2>
          <p className="text-slate-400 mt-1">正在连接语言训练模块...</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="搜索课件..."
              className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-neon-cyan/50 w-64"
            />
          </div>
          <button className="p-2.5 rounded-xl border border-white/10 hover:bg-white/5 transition-colors">
            <Filter className="w-5 h-5 text-slate-400" />
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {labs.map((lab, index) => (
          <motion.div
            key={lab.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group glass-card border-none bg-glass-dark relative flex flex-col h-full"
          >
            {/* Holographic Overlays */}
            <div className={`absolute top-0 left-0 w-full h-1 bg-${lab.color}`} />
            
            <div className="relative h-44 overflow-hidden">
              <img 
                src={lab.image} 
                alt={lab.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent" />
              <div className={`absolute top-4 left-4 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-widest bg-void/80 border border-${lab.color}/50 text-${lab.color}`}>
                {lab.level}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
              <div className="mb-4">
                <span className="text-[10px] uppercase font-mono tracking-widest text-slate-500">{lab.category}</span>
                <h3 className="text-xl font-bold mt-1 group-hover:text-neon-cyan transition-colors">{lab.title}</h3>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-slate-400 font-mono mb-6">
                <div className="flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  {lab.words} 词项
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {lab.duration}
                </div>
              </div>

              <button className={`mt-auto w-full py-3 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center gap-3 font-semibold transition-all group-hover:bg-${lab.color} group-hover:text-void group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]`}>
                <Play className="w-4 h-4 fill-current" />
                启动实验室
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <section className="glass-card p-1 items-center bg-gradient-to-r from-neon-purple/20 to-neon-cyan/20 border-white/5 mt-10">
        <div className="glass-card bg-void/50 p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="p-5 rounded-2xl bg-neon-cyan/10 border border-neon-cyan/20 animate-pulse">
            <Dna className="w-12 h-12 text-neon-cyan" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-2xl font-display font-bold">语言 DNA 重构</h3>
            <p className="text-slate-400 mt-2">根据你最近的口语错误和兴趣偏好，一键生成定制训练模块。</p>
          </div>
          <button className="px-8 py-4 rounded-xl bg-neon-cyan text-void font-bold shadow-[0_0_25px_rgba(0,245,255,0.4)] hover:shadow-[0_0_40px_rgba(0,245,255,0.6)] transition-all active:scale-95 whitespace-nowrap">
            合成实验室
          </button>
        </div>
      </section>
    </div>
  );
}
