import React from "react";
import { 
  Zap, 
  Target, 
  Flame, 
  Clock, 
  ArrowRight,
  BookOpen,
  Mic,
  Play,
  CheckCircle2,
  TrendingUp,
  AlertCircle,
  RefreshCw,
  Star,
  ChevronRight,
  Volume2,
  GraduationCap
} from "lucide-react";
import { motion } from "motion/react";
import { 
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const activityData = [
  { name: '周一', xp: 400 },
  { name: '周二', xp: 300 },
  { name: '周三', xp: 600 },
  { name: '周四', xp: 800 },
  { name: '周五', xp: 500 },
  { name: '周六', xp: 900 },
  { name: '周日', xp: 1200 },
];

const todayTasks = [
  { id: 1, type: "新词学习", title: "学习 20 个新单词", progress: 15, total: 20, color: "neon-cyan" },
  { id: 2, type: "复习巩固", title: "复习 45 个已学单词", progress: 32, total: 45, color: "neon-purple" },
  { id: 3, type: "错词巩固", title: "巩固 12 个错词", progress: 8, total: 12, color: "orange-500" },
];

const recommendedExercises = [
  { id: 1, icon: Mic, title: "口语对话练习", desc: "与 AI 导师进行情景对话", duration: "10分钟", color: "neon-cyan" },
  { id: 2, icon: BookOpen, title: "阅读理解", desc: "一篇法语短文阅读练习", duration: "5分钟", color: "neon-purple" },
  { id: 3, icon: Volume2, title: "听力训练", desc: "日常对话听力理解", duration: "8分钟", color: "emerald-500" },
];

const recentRecords = [
  { id: 1, word: "ephemeral", meaning: "短暂的", time: "30分钟前", status: "已掌握" },
  { id: 2, word: "ubiquitous", meaning: "无处不在的", time: "1小时前", status: "已掌握" },
  { id: 3, word: "meticulous", meaning: "一丝不苟的", time: "2小时前", status: "学习中" },
  { id: 4, word: "eloquent", meaning: "雄辩的", time: "3小时前", status: "错词" },
];

const weeklyStats = {
  totalWords: 156,
  totalMinutes: 320,
  streak: 12,
  accuracy: 87,
};

export function Dashboard() {
  return (
    <div className="space-y-6 pb-10">
      {/* Header - Learning Focused */}
      <header className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-4xl font-display font-bold"
          >
            学习中心
          </motion.h1>
          <p className="text-slate-400 mt-2">今日目标：学习 20 个单词，复习 45 个单词</p>
        </div>
        
        {/* Quick Stats Bar */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="glass-card px-4 py-2.5 flex items-center gap-2.5">
            <Flame className="w-4 h-4 text-orange-500" />
            <div className="leading-tight">
              <p className="text-lg font-bold font-display">{weeklyStats.streak}</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-500">连续天数</p>
            </div>
          </div>
          <div className="glass-card px-4 py-2.5 flex items-center gap-2.5">
            <Zap className="w-4 h-4 text-neon-cyan" />
            <div className="leading-tight">
              <p className="text-lg font-bold font-display">{weeklyStats.totalWords}</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-500">本周单词</p>
            </div>
          </div>
          <div className="glass-card px-4 py-2.5 flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-neon-purple" />
            <div className="leading-tight">
              <p className="text-lg font-bold font-display">{weeklyStats.totalMinutes}</p>
              <p className="text-[9px] uppercase tracking-wider text-slate-500">学习分钟</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Learning Entry - Prominent */}
      <section className="glass-card p-6 bg-gradient-to-r from-neon-cyan/10 via-void to-neon-purple/10 border-neon-cyan/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="w-5 h-5 text-neon-cyan" />
              <span className="text-sm text-slate-400">今日学习进度</span>
            </div>
            <h2 className="text-2xl font-display font-bold mb-1">继续你的法语之旅</h2>
            <p className="text-slate-400 text-sm">已完成今日学习任务的 68%</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="px-6 py-3 rounded-xl bg-neon-cyan text-void font-medium hover:shadow-[0_0_20px_rgba(0,245,255,0.3)] transition-all flex items-center justify-center gap-2">
              <Play className="w-5 h-5" />
              开始学习
            </button>
            <button className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 transition-all flex items-center justify-center gap-2">
              <RefreshCw className="w-5 h-5" />
              复习模式
            </button>
          </div>
        </div>
        {/* Progress Bar */}
        <div className="mt-4">
          <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full w-[68%] bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" />
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Learning Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Today's Tasks */}
          <section className="glass-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-display font-semibold flex items-center gap-2">
                <Target className="w-4 h-4 text-neon-cyan" />
                今日学习任务
              </h3>
              <span className="text-xs text-slate-500">3/3 任务</span>
            </div>
            <div className="space-y-3">
              {todayTasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/8 hover:border-white/15 transition-all cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-${task.color}/10`}>
                        {task.id === 1 && <BookOpen className={`w-4 h-4 text-${task.color}`} />}
                        {task.id === 2 && <RefreshCw className={`w-4 h-4 text-${task.color}`} />}
                        {task.id === 3 && <AlertCircle className={`w-4 h-4 text-${task.color}`} />}
                      </div>
                      <div>
                        <h4 className="font-medium text-white text-sm">{task.title}</h4>
                        <p className="text-xs text-slate-500">{task.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-sm font-bold text-${task.color}`}>{task.progress}/{task.total}</span>
                      <button className="p-1.5 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                        <ArrowRight className="w-4 h-4 text-slate-400" />
                      </button>
                    </div>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-${task.color} rounded-full`}
                      style={{ width: `${(task.progress / task.total) * 100}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Recommended Exercises */}
          <section className="glass-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-display font-semibold flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                推荐练习
              </h3>
              <button className="text-xs text-neon-cyan hover:text-neon-cyan/80 transition-colors">查看全部</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {recommendedExercises.map((exercise, index) => (
                <motion.button
                  key={exercise.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-4 rounded-xl bg-white/5 border border-white/8 hover:border-white/15 transition-all text-left group"
                >
                  <div className={`w-10 h-10 rounded-xl bg-${exercise.color}/10 flex items-center justify-center mb-3`}>
                    <exercise.icon className={`w-5 h-5 text-${exercise.color}`} />
                  </div>
                  <h4 className="font-medium text-white text-sm mb-1 group-hover:text-neon-cyan transition-colors">{exercise.title}</h4>
                  <p className="text-xs text-slate-500 mb-2">{exercise.desc}</p>
                  <span className="text-[10px] text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {exercise.duration}
                  </span>
                </motion.button>
              ))}
            </div>
          </section>

          {/* Weekly Progress Chart - Compact */}
          <section className="glass-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-display font-semibold flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-neon-cyan" />
                本周学习趋势
              </h3>
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <ArrowRight className="w-3 h-3" />
                增长 12%
              </div>
            </div>
            <div className="h-[140px] w-full">
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
                  <Area type="monotone" dataKey="xp" stroke="#00f5ff" strokeWidth={2} fillOpacity={1} fill="url(#colorXp)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>
        </div>

        {/* Right Sidebar - Compact */}
        <div className="space-y-6">
          {/* Recent Learning Records */}
          <section className="glass-card p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-display font-semibold flex items-center gap-2">
                <Clock className="w-4 h-4 text-neon-purple" />
                最近学习
              </h3>
              <button className="text-xs text-neon-cyan hover:text-neon-cyan/80 transition-colors">查看全部</button>
            </div>
            <div className="space-y-2">
              {recentRecords.map((record, index) => (
                <div
                  key={record.id}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-neon-cyan" />
                    </div>
                    <div>
                      <h4 className="font-medium text-white text-sm">{record.word}</h4>
                      <p className="text-[10px] text-slate-500">{record.meaning}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                    record.status === '已掌握' ? 'bg-emerald-500/10 text-emerald-400' :
                    record.status === '学习中' ? 'bg-neon-purple/10 text-neon-purple' :
                    'bg-orange-500/10 text-orange-400'
                  }`}>
                    {record.status}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Learning Stats */}
          <section className="glass-card p-5">
            <h3 className="text-base font-display font-semibold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              学习成果
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-slate-400">正确率</span>
                  <span className="text-sm font-bold text-emerald-500">{weeklyStats.accuracy}%</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[87%] bg-emerald-500 rounded-full" />
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">总词汇量</span>
                  <span className="text-sm font-bold text-white">1,560</span>
                </div>
              </div>
              <div className="p-3 rounded-xl bg-white/5">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-400">已掌握</span>
                  <span className="text-sm font-bold text-neon-cyan">892</span>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Actions */}
          <section className="glass-card p-5">
            <h3 className="text-base font-display font-semibold mb-4">快捷入口</h3>
            <div className="space-y-2">
              <button className="w-full p-3 rounded-xl bg-white/5 border border-white/8 hover:border-neon-cyan/30 transition-all text-left flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <Mic className="w-4 h-4 text-neon-cyan" />
                  <span className="text-sm text-white">AI 口语陪练</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-neon-cyan transition-colors" />
              </button>
              <button className="w-full p-3 rounded-xl bg-white/5 border border-white/8 hover:border-neon-purple/30 transition-all text-left flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-neon-purple" />
                  <span className="text-sm text-white">词汇实验室</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-neon-purple transition-colors" />
              </button>
              <button className="w-full p-3 rounded-xl bg-white/5 border border-white/8 hover:border-orange-500/30 transition-all text-left flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-sm text-white">错词本</span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-orange-500 transition-colors" />
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
