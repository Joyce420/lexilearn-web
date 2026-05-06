import React from "react";
import { 
  Zap, 
  Target, 
  Flame, 
  Clock, 
  ArrowUpRight,
  BookOpen,
  Mic2,
  Gamepad2
} from "lucide-react";
import { motion } from "motion/react";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";
import { cn } from "../lib/utils";

const skillData = [
  { subject: '词汇', A: 120, fullMark: 150 },
  { subject: '语法', A: 98, fullMark: 150 },
  { subject: '听力', A: 86, fullMark: 150 },
  { subject: '口语', A: 99, fullMark: 150 },
  { subject: '阅读', A: 85, fullMark: 150 },
];

const activityData = [
  { name: '周一', xp: 400 },
  { name: '周二', xp: 300 },
  { name: '周三', xp: 600 },
  { name: '周四', xp: 800 },
  { name: '周五', xp: 500 },
  { name: '周六', xp: 900 },
  { name: '周日', xp: 1200 },
];

export function Dashboard() {
  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight"
          >
            欢迎回来，<span className="neon-text-cyan">Alex</span>。
          </motion.h1>
          <p className="text-slate-400 mt-2 text-lg">系统状态：流利度神经元优化中。</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="glass-card px-6 py-3 flex items-center gap-3 border-neon-cyan/20">
            <Flame className="w-5 h-5 text-orange-500 fill-orange-500 animate-pulse" />
            <div className="leading-tight">
              <p className="text-2xl font-bold font-display">12</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">连续打卡</p>
            </div>
          </div>
          <div className="glass-card px-6 py-3 flex items-center gap-3 border-neon-purple/20">
            <Zap className="w-5 h-5 text-neon-purple animate-bounce" />
            <div className="leading-tight">
              <p className="text-2xl font-bold font-display">2,450</p>
              <p className="text-[10px] uppercase tracking-widest text-slate-500">词汇积分</p>
            </div>
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Stats Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Progress Chart */}
          <section className="glass-card p-6 min-h-[300px] flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-display font-semibold flex items-center gap-2">
                <Target className="w-5 h-5 text-neon-cyan" />
                流利度增长速率
              </h3>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                <ArrowUpRight className="w-3 h-3" />
                环比上周增长 12%
              </div>
            </div>
            <div className="flex-1 w-full h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={activityData}>
                  <defs>
                    <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f5ff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00f5ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f0f19', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                    itemStyle={{ color: '#00f5ff' }}
                  />
                  <Area type="monotone" dataKey="xp" stroke="#00f5ff" strokeWidth={3} fillOpacity={1} fill="url(#colorXp)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Daily Tasks */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="glass-card p-5 group hover:border-neon-cyan/50 transition-colors cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-neon-cyan/10 text-neon-cyan mb-4">
                  <Mic2 className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 uppercase tracking-widest">优先级</p>
                  <p className="text-sm font-bold text-neon-cyan">极高</p>
                </div>
              </div>
              <h4 className="text-lg font-bold">口音校准</h4>
              <p className="text-sm text-slate-400 mb-6">与 LexiBot 进行 5 分钟的法语口语练习。</p>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-2/3 bg-neon-cyan shadow-[0_0_10px_rgba(0,245,255,0.5)]" />
              </div>
            </div>

            <div className="glass-card p-5 group hover:border-neon-purple/50 transition-colors cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="p-3 rounded-xl bg-neon-purple/10 text-neon-purple mb-4">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <p className="text-xs text-slate-500 uppercase tracking-widest">优先级</p>
                  <p className="text-sm font-bold text-neon-purple">中等</p>
                </div>
              </div>
              <h4 className="text-lg font-bold">词汇实验室：奥德赛</h4>
              <p className="text-sm text-slate-400 mb-6">掌握 20 个目标领域的专业词汇。</p>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full w-1/4 bg-neon-purple shadow-[0_0_10px_rgba(176,38,255,0.5)]" />
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar Column */}
        <div className="space-y-8">
          {/* Skill Radar */}
          <section className="glass-card p-6 flex flex-col items-center">
            <h3 className="w-full text-lg font-display font-semibold mb-2">技能指纹</h3>
            <div className="w-full h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                  <PolarGrid stroke="rgba(255,255,255,0.1)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#94a3b8', fontSize: 10 }} />
                  <Radar
                    name="能力"
                    dataKey="A"
                    stroke="#00f5ff"
                    strokeWidth={2}
                    fill="#00f5ff"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="glass-card p-6 space-y-6">
            <h3 className="text-lg font-display font-semibold">进化指标</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-cyan shadow-[0_0_5px_rgba(0,245,255,1)]" />
                  <span className="text-sm text-slate-300">口语自信度</span>
                </div>
                <span className="text-sm font-bold">82%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_5px_rgba(176,38,255,1)]" />
                  <span className="text-sm text-slate-300">听力深度</span>
                </div>
                <span className="text-sm font-bold">64%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-white/20" />
                  <span className="text-sm text-slate-300">语法准确率</span>
                </div>
                <span className="text-sm font-bold">91%</span>
              </div>
            </div>
          </section>

          {/* Gamified Banner */}
          <div className="relative group overflow-hidden rounded-2xl h-48">
            <img 
              src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&h=400&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
              alt="Retro Tech"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 text-neon-cyan mb-1 font-mono text-[10px] tracking-tighter uppercase">
                <Gamepad2 className="w-3 h-3" />
                锦标赛进行中
              </div>
              <h4 className="text-lg font-bold text-white">神经元对决 #42</h4>
              <p className="text-xs text-white/60">与其他探索者进行实时的词汇竞速对决。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
