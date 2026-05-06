import React from "react";
import { 
  Award, 
  Trophy, 
  Star, 
  Flame, 
  Zap,
  Clock,
  BookOpen,
  Target,
  CheckCircle2,
  Medal,
  Crown,
  Sparkles,
  TrendingUp,
  Calendar,
  ChevronRight,
  Edit3,
  User
} from "lucide-react";
import { motion } from "motion/react";
import { 
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const badges = [
  { id: 1, name: '初露锋芒', desc: '完成首个课程', icon: Star, color: 'neon-cyan', unlocked: true, date: '2024-01-15' },
  { id: 2, name: '连续7天', desc: '连续学习7天', icon: Flame, color: 'orange-500', unlocked: true, date: '2024-01-22' },
  { id: 3, name: '词汇达人', desc: '掌握100个单词', icon: BookOpen, color: 'neon-purple', unlocked: true, date: '2024-02-01' },
  { id: 4, name: '口语新星', desc: '完成10次口语练习', icon: Target, color: 'emerald-500', unlocked: true, date: '2024-02-15' },
  { id: 5, name: '语法专家', desc: '语法正确率超过90%', icon: Award, color: 'yellow-500', unlocked: false, progress: 85 },
  { id: 6, name: '听力大师', desc: '完成50次听力训练', icon: Trophy, color: 'pink-500', unlocked: false, progress: 68 },
  { id: 7, name: '学霸勋章', desc: '单日学习超过2小时', icon: Crown, color: 'red-500', unlocked: false, progress: 45 },
  { id: 8, name: '终身学习', desc: '累计学习100小时', icon: Clock, color: 'blue-500', unlocked: false, progress: 72 },
];

const completedCourses = [
  { id: 1, name: '法语入门基础', progress: 100, totalLessons: 24, completedLessons: 24, rating: 4.8 },
  { id: 2, name: '日常口语100句', progress: 100, totalLessons: 20, completedLessons: 20, rating: 4.9 },
  { id: 3, name: '词汇实验室：科技', progress: 75, totalLessons: 16, completedLessons: 12, rating: 4.6 },
  { id: 4, name: '语法结构精讲', progress: 45, totalLessons: 30, completedLessons: 14, rating: 4.7 },
];

const growthData = [
  { month: '1月', level: 1, xp: 0 },
  { month: '2月', level: 5, xp: 1250 },
  { month: '3月', level: 12, xp: 3200 },
  { month: '4月', level: 18, xp: 4850 },
  { month: '5月', level: 24, xp: 6200 },
];

const achievements = [
  { label: '学习天数', value: 128, icon: Calendar },
  { label: '完成课程', value: 2, icon: CheckCircle2 },
  { label: '获得徽章', value: 4, icon: Medal },
  { label: '累计XP', value: 6200, icon: Zap },
];

export function Achievements() {
  return (
    <div className="space-y-12 pb-16">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight"
          >
            学习档案
          </motion.h1>
          <p className="text-slate-400 mt-4 text-lg max-w-md">记录你的学习旅程与成就，见证每一步成长</p>
        </div>
      </header>

      {/* Profile Card */}
      <section className="glass-card p-6 md:p-10">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-10">
          {/* Avatar */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative group"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 p-[3px]">
              <div className="w-full h-full rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 flex items-center justify-center border-2 border-white/10">
                  <User className="w-10 h-10 md:w-12 md:h-12 text-white/90" />
                </div>
              </div>
            </div>
            {/* Level Badge */}
            <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center border-4 border-void shadow-lg shadow-orange-500/20">
              <span className="text-xs font-bold text-white text-center leading-tight">LVL<br/>24</span>
            </div>
            {/* Edit Avatar */}
            <button className="absolute top-2 right-2 p-2 rounded-full bg-void/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all hover:bg-void">
              <Edit3 className="w-4 h-4 text-slate-300" />
            </button>
          </motion.div>

          {/* User Info - Redesigned */}
          <div className="flex-1 w-full space-y-6">
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-white">Alex Chen</h2>
                <p className="text-slate-400 mt-1.5">进阶学习者</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30">
                  <Flame className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-medium text-orange-400">连续 12 天</span>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {achievements.map((item, index) => (
                <div key={index} className="p-5 rounded-xl bg-white/5 border border-white/8 hover:border-neon-cyan/15 transition-all hover:bg-white/8">
                  <div className="flex items-center justify-between mb-2">
                    <item.icon className="w-4 h-4 text-neon-cyan" />
                    <span className="text-xs text-slate-500 uppercase tracking-wider">{item.label}</span>
                  </div>
                  <p className="text-2xl md:text-3xl font-bold font-display text-white">
                    {typeof item.value === 'number' && item.value >= 1000 
                      ? item.value.toLocaleString() 
                      : item.value
                    }
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="xl:col-span-2 space-y-8">
          {/* Growth Chart */}
          <section className="glass-card p-8">
            <h3 className="text-lg font-display font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-neon-cyan" />
              成长轨迹
            </h3>
            <div className="h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={growthData}>
                  <defs>
                    <linearGradient id="colorXp" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f5ff" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#00f5ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f0f19', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      borderRadius: '8px' 
                    }}
                    itemStyle={{ color: '#00f5ff' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="xp" 
                    stroke="#00f5ff" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorXp)"
                    name="学习积分"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Completed Courses */}
          <section className="glass-card p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-display font-semibold flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-neon-purple" />
                课程进度
              </h3>
              <button className="text-sm text-neon-cyan hover:underline flex items-center gap-1">
                查看全部
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {completedCourses.map((course) => (
                <div 
                  key={course.id}
                  className="p-5 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/30 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-white">{course.name}</h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {course.completedLessons}/{course.totalLessons} 课时
                      </p>
                    </div>
                    {course.progress === 100 && (
                      <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                        <span className="text-xs text-emerald-400 font-medium">已完成</span>
                      </div>
                    )}
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${
                        course.progress === 100 
                          ? 'bg-emerald-500' 
                          : 'bg-gradient-to-r from-neon-cyan to-neon-purple'
                      }`}
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-slate-500">完成度 {course.progress}%</span>
                    <button className="text-xs text-neon-cyan hover:underline">
                      {course.progress === 100 ? '复习' : '继续学习'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column */}
        <div className="space-y-8">
          {/* Badge Wall - Improved */}
          <section className="glass-card p-8">
            <h3 className="text-lg font-display font-semibold mb-6 flex items-center gap-2">
              <Medal className="w-5 h-5 text-neon-cyan" />
              徽章墙
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge) => (
                <motion.div
                  key={badge.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: badge.id * 0.05 }}
                  className={`p-4 rounded-xl border transition-all hover:-translate-y-0.5 ${
                    badge.unlocked 
                      ? 'bg-white/8 border-white/12 hover:border-neon-cyan/30 hover:bg-white/10' 
                      : 'bg-white/6 border-white/10 hover:border-white/20 hover:bg-white/8'
                  }`}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl flex items-center justify-center ${
                    badge.unlocked 
                      ? 'bg-gradient-to-tr from-neon-cyan/25 to-neon-purple/25' 
                      : 'bg-white/12 border border-white/12'
                  }`}>
                    <badge.icon 
                      className={`w-6 h-6 ${
                        badge.unlocked ? `text-${badge.color}` : 'text-slate-400'
                      }`}
                    />
                  </div>
                  <p className={`text-sm font-semibold text-center ${
                    badge.unlocked ? 'text-white' : 'text-slate-300'
                  }`}>
                    {badge.name}
                  </p>
                  <p className="text-xs text-slate-500 text-center mt-1">{badge.desc}</p>
                  {badge.unlocked && badge.date && (
                    <p className="text-[10px] text-slate-600 text-center mt-2">{badge.date}</p>
                  )}
                  {!badge.unlocked && badge.progress !== undefined && (
                    <div className="mt-3">
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-slate-500/60 rounded-full"
                          style={{ width: `${badge.progress}%` }}
                        />
                      </div>
                      <p className="text-[10px] text-slate-500 text-center mt-1">
                        进度 {badge.progress}%
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </section>

          {/* Achievement Summary */}
          <section className="glass-card p-8">
            <h3 className="text-lg font-display font-semibold mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-neon-purple" />
              成就概览
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-neon-cyan/10 flex items-center justify-center">
                    <Medal className="w-5 h-5 text-neon-cyan" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-300">已解锁徽章</p>
                    <p className="text-xs text-slate-500">完成任务获取更多</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-neon-cyan">4/8</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <h4 className="text-sm font-semibold text-white mb-4">下一个目标</h4>
              <div className="p-4 rounded-xl bg-gradient-to-r from-yellow-500/15 to-orange-500/10 border border-yellow-500/25">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-yellow-500/20 flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">语法专家</p>
                    <p className="text-xs text-slate-400">语法正确率超过90%</p>
                  </div>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[85%] bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs text-slate-500">当前进度</span>
                  <span className="text-xs font-semibold text-yellow-500">85%</span>
                </div>
              </div>
            </div>
          </section>

          {/* Learning Streak */}
          <section className="glass-card p-8">
            <h3 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
              <Flame className="w-5 h-5 text-orange-500" />
              学习打卡
            </h3>
            <div className="grid grid-cols-7 gap-1.5">
              {Array.from({ length: 28 }, (_, i) => {
                const active = i >= 14 && i < 26;
                const intensity = active ? Math.floor(Math.random() * 3) + 1 : 0;
                return (
                  <div 
                    key={i}
                    className={`aspect-square rounded-md flex items-center justify-center text-[8px] ${
                      active 
                        ? intensity === 1 
                          ? 'bg-neon-cyan/30 text-neon-cyan/60' 
                          : intensity === 2
                          ? 'bg-neon-cyan/50 text-neon-cyan/80'
                          : 'bg-neon-cyan text-void'
                        : 'bg-white/5 text-slate-600'
                    }`}
                  >
                    {i + 1}
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between mt-4 text-xs text-slate-500">
              <span>过去28天</span>
              <span className="text-orange-500 font-medium">12天活跃</span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}