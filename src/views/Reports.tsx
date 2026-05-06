import React from "react";
import { 
  Clock, 
  BookOpen, 
  Mic2, 
  Headphones, 
  PenTool,
  BookText,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  Lightbulb,
  Calendar,
  Target,
  Zap
} from "lucide-react";
import { motion } from "motion/react";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";

const weeklyData = [
  { day: '周一', minutes: 45, words: 12 },
  { day: '周二', minutes: 60, words: 18 },
  { day: '周三', minutes: 30, words: 8 },
  { day: '周四', minutes: 75, words: 22 },
  { day: '周五', minutes: 50, words: 15 },
  { day: '周六', minutes: 90, words: 28 },
  { day: '周日', minutes: 65, words: 20 },
];

const skillDistribution = [
  { name: '词汇', value: 35, color: '#00f5ff' },
  { name: '语法', value: 25, color: '#b026ff' },
  { name: '听力', value: 20, color: '#f59e0b' },
  { name: '口语', value: 15, color: '#10b981' },
  { name: '阅读', value: 5, color: '#ec4899' },
];

const weakPoints = [
  { skill: '虚拟语气', type: '语法', score: 42, trend: 'down' },
  { skill: '连读技巧', type: '听力', score: 38, trend: 'down' },
  { skill: '不规则动词', type: '词汇', score: 55, trend: 'down' },
];

const suggestions = [
  { icon: BookOpen, title: '强化虚拟语气练习', desc: '每天完成5道虚拟语气专项练习', priority: 'high' },
  { icon: Headphones, title: '听力连读训练', desc: '使用慢速音频材料反复跟读', priority: 'high' },
  { icon: PenTool, title: '写作输出计划', desc: '每周完成2篇150词短文', priority: 'medium' },
];

const monthlyProgress = [
  { month: '1月', vocabulary: 120, grammar: 98, listening: 86, speaking: 99, reading: 85 },
  { month: '2月', vocabulary: 145, grammar: 105, listening: 92, speaking: 102, reading: 90 },
  { month: '3月', vocabulary: 168, grammar: 112, listening: 88, speaking: 108, reading: 95 },
  { month: '4月', vocabulary: 185, grammar: 118, listening: 95, speaking: 115, reading: 102 },
];

export function Reports() {
  const totalMinutes = weeklyData.reduce((sum, d) => sum + d.minutes, 0);
  const totalWords = weeklyData.reduce((sum, d) => sum + d.words, 0);
  const avgDaily = Math.round(totalMinutes / 7);

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-display font-bold tracking-tight"
          >
            学习报告
          </motion.h1>
          <p className="text-slate-400 mt-2 text-lg">追踪你的学习进度与成果</p>
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <Calendar className="w-4 h-4" />
          <span>报告周期：2024年1月 - 4月</span>
        </div>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-neon-cyan/10">
              <Clock className="w-5 h-5 text-neon-cyan" />
            </div>
            <span className="text-xs text-slate-500 uppercase tracking-widest">总学习时长</span>
          </div>
          <p className="text-3xl font-bold font-display">{totalMinutes}</p>
          <p className="text-sm text-slate-400">分钟 / 本周</p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-neon-purple/10">
              <BookOpen className="w-5 h-5 text-neon-purple" />
            </div>
            <span className="text-xs text-slate-500 uppercase tracking-widest">掌握单词</span>
          </div>
          <p className="text-3xl font-bold font-display">{totalWords + 286}</p>
          <p className="text-sm text-slate-400">词 / 本周新增</p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-orange-500/10">
              <Zap className="w-5 h-5 text-orange-500" />
            </div>
            <span className="text-xs text-slate-500 uppercase tracking-widest">连续打卡</span>
          </div>
          <p className="text-3xl font-bold font-display">12</p>
          <p className="text-sm text-slate-400">天 / 当前 streak</p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-5"
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="p-2 rounded-lg bg-emerald-500/10">
              <Target className="w-5 h-5 text-emerald-500" />
            </div>
            <span className="text-xs text-slate-500 uppercase tracking-widest">日均学习</span>
          </div>
          <p className="text-3xl font-bold font-display">{avgDaily}</p>
          <p className="text-sm text-slate-400">分钟 / 每天</p>
        </motion.div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Charts */}
        <div className="lg:col-span-2 space-y-8">
          {/* Weekly Activity */}
          <section className="glass-card p-6">
            <h3 className="text-lg font-display font-semibold mb-6 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-neon-cyan" />
              本周学习趋势
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="day" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f0f19', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      borderRadius: '8px' 
                    }}
                    itemStyle={{ color: '#00f5ff' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="minutes" 
                    stroke="#00f5ff" 
                    strokeWidth={3}
                    dot={{ fill: '#00f5ff', strokeWidth: 2 }}
                    name="分钟"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="words" 
                    stroke="#b026ff" 
                    strokeWidth={3}
                    dot={{ fill: '#b026ff', strokeWidth: 2 }}
                    name="单词数"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Monthly Progress by Skill */}
          <section className="glass-card p-6">
            <h3 className="text-lg font-display font-semibold mb-6 flex items-center gap-2">
              <BarChart className="w-5 h-5 text-neon-purple" />
              技能月度进展
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyProgress}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                  <XAxis dataKey="month" stroke="#64748b" fontSize={12} />
                  <YAxis stroke="#64748b" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f0f19', 
                      border: '1px solid rgba(255,255,255,0.1)', 
                      borderRadius: '8px' 
                    }}
                  />
                  <Bar dataKey="vocabulary" fill="#00f5ff" radius={[4, 4, 0, 0]} name="词汇" />
                  <Bar dataKey="grammar" fill="#b026ff" radius={[4, 4, 0, 0]} name="语法" />
                  <Bar dataKey="listening" fill="#f59e0b" radius={[4, 4, 0, 0]} name="听力" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </section>

          {/* Skill Distribution */}
          <section className="glass-card p-6">
            <h3 className="text-lg font-display font-semibold mb-6 flex items-center gap-2">
              <BookText className="w-5 h-5 text-neon-cyan" />
              能力分布
            </h3>
            <div className="flex items-center gap-8">
              <div className="w-[180px] h-[180px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={skillDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {skillDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: '#0f0f19', 
                        border: '1px solid rgba(255,255,255,0.1)', 
                        borderRadius: '8px' 
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-3">
                {skillDistribution.map((item) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-slate-300">{item.name}</span>
                    </div>
                    <span className="text-sm font-bold text-white">{item.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-8">
          {/* Skill Breakdown */}
          <section className="glass-card p-6">
            <h3 className="text-lg font-display font-semibold mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-neon-cyan" />
              听说读写表现
            </h3>
            <div className="space-y-5">
              {[
                { name: '词汇', icon: BookOpen, score: 92, color: 'neon-cyan' },
                { name: '语法', icon: PenTool, score: 85, color: 'neon-purple' },
                { name: '听力', icon: Headphones, score: 78, color: 'orange-500' },
                { name: '口语', icon: Mic2, score: 88, color: 'emerald-500' },
                { name: '阅读', icon: BookText, score: 82, color: 'pink-500' },
              ].map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <skill.icon className={`w-4 h-4 text-${skill.color}`} />
                      <span className="text-sm text-slate-300">{skill.name}</span>
                    </div>
                    <span className="text-sm font-bold text-white">{skill.score}%</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-${skill.color} rounded-full`}
                      style={{ 
                        width: `${skill.score}%`,
                        boxShadow: `0 0 10px var(--tw-shadow-color, rgba(0,245,255,0.5))`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Weak Points */}
          <section className="glass-card p-6">
            <h3 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-orange-500" />
              弱项分析
            </h3>
            <div className="space-y-4">
              {weakPoints.map((point, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl bg-white/5 border border-white/10"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="font-semibold text-white">{point.skill}</p>
                      <p className="text-xs text-slate-500">{point.type}</p>
                    </div>
                    <div className={`flex items-center gap-1 text-xs ${point.trend === 'down' ? 'text-orange-500' : 'text-emerald-500'}`}>
                      {point.trend === 'down' ? (
                        <TrendingDown className="w-3 h-3" />
                      ) : (
                        <TrendingUp className="w-3 h-3" />
                      )}
                      {point.score}%
                    </div>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-orange-500 rounded-full"
                      style={{ width: `${point.score}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Learning Suggestions */}
          <section className="glass-card p-6">
            <h3 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-500" />
              学习建议
            </h3>
            <div className="space-y-4">
              {suggestions.map((suggestion, index) => (
                <div 
                  key={index}
                  className="flex gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/30 transition-colors"
                >
                  <div className={`p-2 rounded-lg ${
                    suggestion.priority === 'high' ? 'bg-orange-500/10' : 'bg-neon-cyan/10'
                  }`}>
                    <suggestion.icon className={`w-4 h-4 ${
                      suggestion.priority === 'high' ? 'text-orange-500' : 'text-neon-cyan'
                    }`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{suggestion.title}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{suggestion.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}