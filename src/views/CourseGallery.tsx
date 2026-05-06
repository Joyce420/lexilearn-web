import React, { useState } from "react";
import { 
  Dna, 
  Search, 
  Play, 
  Pause,
  Clock, 
  Volume2,
  Star,
  Layers,
  ChevronRight,
  Filter,
  Target,
  BookOpen,
  RefreshCw,
  AlertCircle,
  Calendar,
  Flame,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Mic,
  Eye,
  Edit3,
  X,
  Zap
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const todayWords = [
  { id: 1, word: "ephemeral", phonetic: "/ɪˈfemərəl/", meaning: "短暂的，转瞬即逝的", example: "Fame is ephemeral.", status: "new" },
  { id: 2, word: "ubiquitous", phonetic: "/juːˈbɪkwɪtəs/", meaning: "无处不在的", example: "Smartphones are ubiquitous.", status: "learning" },
  { id: 3, word: "meticulous", phonetic: "/məˈtɪkjʊləs/", meaning: "一丝不苟的", example: "She is meticulous about details.", status: "new" },
  { id: 4, word: "eloquent", phonetic: "/ˈeləkwənt/", meaning: "雄辩的，有说服力的", example: "He gave an eloquent speech.", status: "learning" },
];

const reviewPlan = [
  { id: 1, type: "今日新词", count: 20, progress: 15, color: "neon-cyan" },
  { id: 2, type: "待复习", count: 45, progress: 12, color: "neon-purple" },
  { id: 3, type: "错词巩固", count: 12, progress: 8, color: "orange-500" },
];

const recentRecords = [
  { id: 1, word: "serendipity", time: "10分钟前", status: "已掌握" },
  { id: 2, word: "quintessential", time: "25分钟前", status: "待复习" },
  { id: 3, word: "perseverance", time: "1小时前", status: "已掌握" },
  { id: 4, word: "resilience", time: "2小时前", status: "错词" },
  { id: 5, word: "ubiquitous", time: "3小时前", status: "学习中" },
];

const masteryStats = {
  total: 1560,
  mastered: 892,
  learning: 428,
  weak: 240,
};

type ViewMode = 'list' | 'learn';

export function CourseGallery() {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [learnedWords, setLearnedWords] = useState<number[]>([]);

  const currentWord = todayWords[currentWordIndex];

  const handleNextWord = () => {
    if (currentWordIndex < todayWords.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  const handlePrevWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
    }
  };

  const handleMarkLearned = () => {
    if (!learnedWords.includes(currentWord.id)) {
      setLearnedWords([...learnedWords, currentWord.id]);
    }
    handleNextWord();
  };

  const handleStartReview = () => {
    setViewMode('learn');
    setCurrentWordIndex(0);
    setIsPlaying(true);
  };

  return (
    <div className="space-y-6">
      {/* Header - Compact */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-display font-bold">词汇学习</h2>
          <p className="text-sm text-slate-400 mt-1">掌握单词，轻松表达</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="搜索单词..."
              className="bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-neon-cyan/50 w-56"
            />
          </div>
          <button className="p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4 text-slate-400" />
          </button>
        </div>
      </header>

      {/* Stats Overview - Compact */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="glass-card p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-neon-cyan/10">
              <BookOpen className="w-4 h-4 text-neon-cyan" />
            </div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">总词汇量</span>
          </div>
          <p className="text-xl font-bold font-display">{masteryStats.total.toLocaleString()}</p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-emerald-500/10">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">已掌握</span>
          </div>
          <p className="text-xl font-bold font-display text-emerald-500">{masteryStats.mastered}</p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-neon-purple/10">
              <TrendingUp className="w-4 h-4 text-neon-purple" />
            </div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">学习中</span>
          </div>
          <p className="text-xl font-bold font-display text-neon-purple">{masteryStats.learning}</p>
        </motion.div>

        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-4"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="p-1.5 rounded-lg bg-orange-500/10">
              <AlertCircle className="w-4 h-4 text-orange-500" />
            </div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider">需复习</span>
          </div>
          <p className="text-xl font-bold font-display text-orange-500">{masteryStats.weak}</p>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Left Column - Main Content */}
        <div className="xl:col-span-2 space-y-6">
          {/* Learning Mode Toggle - Prominent */}
          <section className="glass-card p-2 bg-gradient-to-r from-neon-cyan/20 to-neon-purple/20 border-white/5">
            <div className="glass-card bg-void/50 p-2 flex rounded-lg">
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  viewMode === 'list' 
                    ? 'bg-neon-cyan text-void shadow-lg' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                单词列表
              </button>
              <button
                onClick={handleStartReview}
                className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                  viewMode === 'learn' 
                    ? 'bg-neon-cyan text-void shadow-lg' 
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <Zap className="w-4 h-4" />
                学习模式
              </button>
            </div>
          </section>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            {viewMode === 'list' ? (
              <motion.div 
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Today's Words - List View */}
                <section className="glass-card p-5">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="text-base font-display font-semibold flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-neon-cyan" />
                      今日单词
                      <span className="text-xs text-slate-500 font-normal ml-2">{learnedWords.length}/{todayWords.length} 已学习</span>
                    </h3>
                    <button 
                      onClick={handleStartReview}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-sm font-medium hover:bg-neon-cyan/20 transition-colors"
                    >
                      <Play className="w-4 h-4" />
                      开始学习
                    </button>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {todayWords.map((word, index) => (
                      <motion.div
                        key={word.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`p-4 rounded-xl border transition-all ${
                          learnedWords.includes(word.id) 
                            ? 'bg-emerald-500/5 border-emerald-500/20' 
                            : 'bg-white/5 border-white/8 hover:border-neon-cyan/20'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1.5">
                              <h4 className={`text-base font-bold ${learnedWords.includes(word.id) ? 'text-emerald-400' : 'text-white'}`}>
                                {word.word}
                              </h4>
                              <button className="p-1 rounded-lg hover:bg-white/10 transition-colors">
                                <Volume2 className="w-3.5 h-3.5 text-slate-400" />
                              </button>
                              <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                                word.status === 'new' ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-neon-purple/10 text-neon-purple'
                              }`}>
                                {word.status === 'new' ? '新词' : '复习'}
                              </span>
                            </div>
                            <p className="text-xs text-slate-500 mb-1">{word.phonetic}</p>
                            <p className="text-sm text-slate-300">{word.meaning}</p>
                            <p className="text-xs text-slate-500 mt-1.5 italic">"{word.example}"</p>
                          </div>
                          {learnedWords.includes(word.id) && (
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Review Plan - Compact */}
                <section className="glass-card p-5">
                  <h3 className="text-base font-display font-semibold mb-4 flex items-center gap-2">
                    <RefreshCw className="w-4 h-4 text-neon-purple" />
                    复习计划
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {reviewPlan.map((plan) => (
                      <motion.div
                        key={plan.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-white/5 border border-white/8 hover:border-white/15 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-white text-sm">{plan.type}</h4>
                          <span className={`text-sm font-bold text-${plan.color}`}>{plan.progress}/{plan.count}</span>
                        </div>
                        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-${plan.color} rounded-full transition-all duration-500`}
                            style={{ width: `${(plan.progress / plan.count) * 100}%` }}
                          />
                        </div>
                        <button className={`mt-3 w-full py-2 rounded-lg border border-${plan.color}/30 text-${plan.color} text-xs font-medium hover:bg-${plan.color}/10 transition-colors`}>
                          开始复习
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </section>

                {/* Recent Learning Records - Compact */}
                <section className="glass-card p-5">
                  <h3 className="text-base font-display font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-neon-cyan" />
                    最近学习记录
                  </h3>
                  <div className="space-y-2">
                    {recentRecords.map((record, index) => (
                      <motion.div
                        key={record.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                            <BookOpen className="w-4 h-4 text-neon-cyan" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white text-sm">{record.word}</h4>
                            <p className="text-[10px] text-slate-500">{record.time}</p>
                          </div>
                        </div>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full ${
                          record.status === '已掌握' ? 'bg-emerald-500/10 text-emerald-400' :
                          record.status === '待复习' ? 'bg-neon-purple/10 text-neon-purple' :
                          record.status === '错词' ? 'bg-orange-500/10 text-orange-400' :
                          'bg-neon-cyan/10 text-neon-cyan'
                        }`}>
                          {record.status}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </motion.div>
            ) : (
              <motion.div 
                key="learn"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                {/* Learning Progress Bar */}
                <div className="glass-card p-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-slate-400">学习进度</span>
                    <span className="text-sm font-medium text-neon-cyan">{currentWordIndex + 1} / {todayWords.length}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentWordIndex + 1) / todayWords.length) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Word Card - Learning Mode */}
                <section className="glass-card p-6">
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs px-3 py-1 rounded-full ${
                      currentWord.status === 'new' ? 'bg-neon-cyan/10 text-neon-cyan' : 'bg-neon-purple/10 text-neon-purple'
                    }`}>
                      {currentWord.status === 'new' ? '新词学习' : '复习巩固'}
                    </span>
                    <button 
                      onClick={() => setViewMode('list')}
                      className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <X className="w-4 h-4 text-slate-400" />
                    </button>
                  </div>

                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <h3 className="text-3xl md:text-4xl font-bold text-white">{currentWord.word}</h3>
                      <button className="p-2.5 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 hover:bg-neon-cyan/20 transition-colors">
                        <Volume2 className="w-5 h-5 text-neon-cyan" />
                      </button>
                    </div>
                    <p className="text-lg text-slate-400 mb-4">{currentWord.phonetic}</p>
                    
                    <div className="p-5 rounded-xl bg-white/5 border border-white/10 mb-4">
                      <p className="text-base text-slate-200 mb-3">{currentWord.meaning}</p>
                      <div className="flex items-start gap-2 text-left">
                        <Edit3 className="w-3.5 h-3.5 text-neon-purple mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-slate-400 italic">"{currentWord.example}"</p>
                      </div>
                    </div>

                    {/* Example Translation */}
                    <div className="p-3 rounded-xl bg-neon-cyan/5 border border-neon-cyan/10 text-left">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Eye className="w-3.5 h-3.5 text-neon-cyan" />
                        <span className="text-xs text-neon-cyan font-medium">中文释义</span>
                      </div>
                      <p className="text-sm text-slate-300">名声是短暂的。</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-center gap-3">
                    <button
                      onClick={handlePrevWord}
                      disabled={currentWordIndex === 0}
                      className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm"
                    >
                      上一个
                    </button>
                    <button
                      onClick={handleMarkLearned}
                      className="px-6 py-2.5 rounded-xl bg-emerald-500 text-white font-medium hover:bg-emerald-400 transition-colors flex items-center gap-2 text-sm"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      {currentWordIndex === todayWords.length - 1 ? '完成学习' : '已掌握，下一个'}
                    </button>
                    <button
                      onClick={handleNextWord}
                      disabled={currentWordIndex === todayWords.length - 1}
                      className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm"
                    >
                      跳过
                    </button>
                  </div>
                </section>

                {/* Learning Tips - Compact */}
                <section className="glass-card p-5">
                  <h3 className="text-base font-display font-semibold mb-4 flex items-center gap-2">
                    <Target className="w-4 h-4 text-neon-cyan" />
                    学习技巧
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <div className="p-3 rounded-xl bg-white/5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Mic className="w-3.5 h-3.5 text-neon-cyan" />
                        <span className="font-medium text-white text-sm">跟读练习</span>
                      </div>
                      <p className="text-xs text-slate-400">点击发音按钮，尝试跟读例句</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Layers className="w-3.5 h-3.5 text-neon-purple" />
                        <span className="font-medium text-white text-sm">词根记忆</span>
                      </div>
                      <p className="text-xs text-slate-400">ephemeral = e(外) + phem(说) + al</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <Star className="w-3.5 h-3.5 text-yellow-500" />
                        <span className="font-medium text-white text-sm">联想记忆</span>
                      </div>
                      <p className="text-xs text-slate-400">ephemeral → 蜉蝣，朝生暮死</p>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Sidebar - Compact */}
        <div className="space-y-6">
          {/* Learning Goal - Compact */}
          <section className="glass-card p-5">
            <h3 className="text-base font-display font-semibold mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-neon-cyan" />
              学习目标
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10 border border-neon-cyan/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-300">本月目标</span>
                  <span className="text-base font-bold text-neon-cyan">500</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-[68%] bg-gradient-to-r from-neon-cyan to-neon-purple rounded-full" />
                </div>
                <div className="flex items-center justify-between mt-1.5">
                  <span className="text-[10px] text-slate-500">已学习 340 词</span>
                  <span className="text-[10px] font-semibold text-neon-cyan">进度 68%</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/5">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-slate-300">连续打卡</span>
                  <div className="flex items-center gap-1">
                    <Flame className="w-3.5 h-3.5 text-orange-500" />
                    <span className="text-base font-bold text-orange-500">12</span>
                  </div>
                </div>
                <p className="text-[10px] text-slate-500">保持每日学习习惯</p>
              </div>
            </div>
          </section>

          {/* Weak Words Entry - Prominent */}
          <section className="glass-card p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-display font-semibold flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-orange-500" />
                错词本
              </h3>
              <span className="text-sm text-orange-500">{masteryStats.weak} 词</span>
            </div>
            <div className="p-4 rounded-xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 text-center">
              <AlertCircle className="w-10 h-10 text-orange-500 mx-auto mb-2" />
              <h4 className="font-semibold text-white text-sm mb-1">需要加强复习</h4>
              <p className="text-xs text-slate-400 mb-3">及时巩固错词，提升记忆效果</p>
              <button className="w-full py-2.5 rounded-xl bg-orange-500/20 border border-orange-500/40 text-orange-500 font-medium hover:bg-orange-500/30 transition-colors flex items-center justify-center gap-2 text-sm">
                查看错词本
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </section>

          {/* Labs Cards - Compact */}
          <section className="glass-card p-5">
            <h3 className="text-base font-display font-semibold mb-4 flex items-center gap-2">
              <Dna className="w-4 h-4 text-neon-cyan" />
              词汇实验室
            </h3>
            <div className="space-y-2">
              <button className="w-full p-3 rounded-xl bg-white/5 border border-white/8 hover:border-neon-cyan/20 transition-all text-left group">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white text-sm group-hover:text-neon-cyan transition-colors">量子词汇</h4>
                    <p className="text-[10px] text-slate-500">156 词项</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-neon-cyan transition-colors" />
                </div>
              </button>
              <button className="w-full p-3 rounded-xl bg-white/5 border border-white/8 hover:border-neon-purple/20 transition-all text-left group">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white text-sm group-hover:text-neon-purple transition-colors">神经语法结构</h4>
                    <p className="text-[10px] text-slate-500">84 词项</p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-neon-purple transition-colors" />
                </div>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
