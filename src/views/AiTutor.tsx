import React, { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Mic, 
  Sparkles, 
  RotateCcw, 
  MoreHorizontal,
  ChevronLeft,
  BrainCircuit,
  Info,
  Lightbulb,
  MessageSquare,
  AlertTriangle,
  CheckCircle,
  XCircle,
  ThumbsUp,
  Volume2,
  RefreshCw,
  BookOpen,
  Coffee,
  ShoppingCart,
  MapPin,
  Phone,
  Users,
  Play,
  MessageCircle,
  Target
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from "react-markdown";
import { cn } from "../lib/utils";

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
  feedback?: {
    accuracy?: number;
    fluency?: number;
    suggestions?: string[];
  };
  corrections?: {
    original: string;
    corrected: string;
    explanation: string;
  }[];
}

const recommendedTopics = [
  { id: 1, icon: Coffee, title: "咖啡馆点单", desc: "学习如何点咖啡和表达口味偏好", color: "neon-cyan" },
  { id: 2, icon: ShoppingCart, title: "购物交流", desc: "询问价格、大小、退换货", color: "neon-purple" },
  { id: 3, icon: MapPin, title: "问路导航", desc: "向路人询问方向和位置", color: "emerald-500" },
  { id: 4, icon: Phone, title: "电话礼仪", desc: "接打电话的常用表达", color: "orange-500" },
];

const commonPhrases = [
  { id: 1, phrase: "请问...?", formal: "Excuse me, could you tell me...?", category: "礼貌询问", icon: MessageCircle },
  { id: 2, phrase: "我想预定...", formal: "I'd like to make a reservation for...", category: "预约", icon: Target },
  { id: 3, phrase: "这个多少钱?", formal: "How much does this cost?", category: "购物", icon: ShoppingCart },
  { id: 4, phrase: "请问在哪里?", formal: "Where is the...?", category: "问路", icon: MapPin },
];

const learningTips = [
  { icon: Lightbulb, text: "使用完整的句子比单词更有效" },
  { icon: RefreshCw, text: "犯错是学习的一部分，不要害怕" },
  { icon: Volume2, text: "尝试跟读发音，提升听力理解" },
];

export function AiTutor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      content: "Bonjour Alex! 我是你的 AI 导师 LexiBot。\n\n准备好练习法语了吗？选择一个话题开始对话，或者直接用法语和我交流！",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setSelectedTopic(null);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: "非常棒！你的表达很自然。\n\n**语法提示：** 记住 'station' 是阴性名词，所以我们使用 'la'。\n\n你想继续这个话题的对话，还是换一个场景练习？",
        timestamp: new Date(),
        feedback: {
          accuracy: 92,
          fluency: 85,
          suggestions: ["尝试使用更复杂的时态", "注意名词的阴阳性"]
        },
        corrections: []
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleTopicSelect = (topicId: number) => {
    setSelectedTopic(topicId);
    const topic = recommendedTopics.find(t => t.id === topicId);
    
    const topicMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: `我想练习: ${topic?.title}`,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, topicMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: `好的！让我们来练习 **${topic?.title}**。\n\n${topic?.desc}\n\n请用法语表达：你想点一杯咖啡。`,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handlePhraseInsert = (phrase: string) => {
    setInput(phrase);
  };

  const handleStartPractice = () => {
    const startMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: "开始练习",
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, startMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: "太好了！让我们开始今天的练习。\n\n**当前场景：日常对话**\n\n你可以：\n- 选择一个推荐话题\n- 使用常用表达\n- 或者直接用法语和我对话\n\n我会实时纠正你的表达，给出改进建议。准备好了吗？",
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col gap-4">
      {/* Header - Simplified */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-neon-cyan p-0.5 bg-void">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-neon-cyan to-neon-purple flex items-center justify-center">
              <BrainCircuit className="text-white w-5 h-5" />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-display font-bold">AI 口语陪练 <span className="text-[10px] font-normal text-neon-cyan border border-neon-cyan/30 px-1 py-0.5 rounded ml-2 uppercase tracking-tighter">实时对话</span></h2>
            <p className="text-xs text-slate-500">法语学习助手 • 在线</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-white/5 transition-colors text-slate-400">
            <RotateCcw className="w-4 h-4" />
          </button>
          <button className="p-2 rounded-lg hover:bg-white/5 transition-colors text-slate-400">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </header>

      {/* Start Practice Button - Prominent */}
      <AnimatePresence>
        {!selectedTopic && messages.length <= 1 && (
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={handleStartPractice}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-purple text-void font-bold text-lg shadow-lg shadow-neon-cyan/20 hover:shadow-neon-cyan/30 transition-all active:scale-95 flex items-center justify-center gap-3"
          >
            <Play className="w-6 h-6" />
            开始练习
          </motion.button>
        )}
      </AnimatePresence>

      {/* Topics & Phrases - Compact */}
      <AnimatePresence>
        {!selectedTopic && messages.length <= 1 && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-3"
          >
            {/* Recommended Topics */}
            <section className="glass-card p-4">
              <h3 className="text-xs font-semibold text-slate-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                <MessageSquare className="w-3 h-3 text-neon-cyan" />
                推荐话题
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {recommendedTopics.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleTopicSelect(topic.id)}
                    className={`p-3 rounded-xl bg-white/5 border border-white/8 hover:border-${topic.color}/30 transition-all text-left group hover:bg-white/5`}
                  >
                    <topic.icon className={`w-4 h-4 text-${topic.color} mb-1.5`} />
                    <h4 className="font-medium text-white text-sm group-hover:text-neon-cyan transition-colors">{topic.title}</h4>
                    <p className="text-[10px] text-slate-500 mt-0.5 leading-tight">{topic.desc}</p>
                  </button>
                ))}
              </div>
            </section>

            {/* Common Phrases */}
            <section className="glass-card p-4">
              <h3 className="text-xs font-semibold text-slate-400 mb-3 flex items-center gap-2 uppercase tracking-wider">
                <BookOpen className="w-3 h-3 text-neon-purple" />
                常用表达
              </h3>
              <div className="grid grid-cols-1 gap-2 max-h-[140px] overflow-y-auto">
                {commonPhrases.map((phrase) => (
                  <button
                    key={phrase.id}
                    onClick={() => handlePhraseInsert(phrase.formal)}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 transition-all text-left group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-1.5">
                        <phrase.icon className="w-3 h-3 text-neon-purple" />
                        <span className="text-[10px] text-slate-500 font-mono">{phrase.phrase}</span>
                      </div>
                      <span className="text-[9px] text-neon-purple bg-neon-purple/10 px-1.5 py-0.5 rounded">{phrase.category}</span>
                    </div>
                    <p className="text-xs text-slate-300 group-hover:text-white transition-colors leading-tight">{phrase.formal}</p>
                  </button>
                ))}
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Learning Tips - Compact */}
      <section className="glass-card p-3 bg-gradient-to-r from-neon-cyan/5 to-transparent border-l-4 border-neon-cyan">
        <div className="flex items-center gap-3">
          <Lightbulb className="w-4 h-4 text-neon-cyan flex-shrink-0" />
          <div className="flex-1">
            <p className="text-xs text-slate-300">学习技巧</p>
            <div className="flex flex-wrap gap-3 mt-1.5">
              {learningTips.map((tip, index) => (
                <div key={index} className="flex items-center gap-1.5 text-[10px] text-slate-400">
                  <tip.icon className="w-2.5 h-2.5 text-neon-cyan" />
                  <span>{tip.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chat Area - Expanded */}
      <div className="flex-1 glass-card border-neon-cyan/10 flex flex-col min-h-0">
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-5 space-y-5 scroll-smooth"
        >
          <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                className={cn(
                  "flex font-sans",
                  msg.role === 'user' ? "justify-end" : "justify-start"
                )}
              >
                <div className={cn(
                  "max-w-[85%] flex flex-col gap-2",
                  msg.role === 'user' ? "items-end" : "items-start"
                )}>
                  <div className={cn(
                    "p-4 rounded-2xl relative",
                    msg.role === 'user' 
                      ? "bg-neon-cyan text-void font-medium" 
                      : "bg-white/5 border border-white/10 text-slate-200"
                  )}>
                    <div className="markdown-body text-sm leading-relaxed">
                      <ReactMarkdown>{msg.content}</ReactMarkdown>
                    </div>
                  </div>

                  {/* Feedback Section - Teacher Style */}
                  {msg.role === 'bot' && msg.feedback && (
                    <div className="w-full p-4 rounded-xl bg-white/5 border border-white/8 mt-2">
                      <div className="flex items-center gap-2 mb-3">
                        <Sparkles className="w-4 h-4 text-neon-cyan" />
                        <h4 className="text-sm font-semibold text-white">老师点评</h4>
                      </div>
                      <div className="grid grid-cols-2 gap-3 mb-4">
                        <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-slate-400">准确度</span>
                            <CheckCircle className="w-3 h-3 text-emerald-500" />
                          </div>
                          <p className="text-2xl font-bold text-emerald-500">{msg.feedback.accuracy}%</p>
                        </div>
                        <div className="p-3 rounded-lg bg-neon-purple/10 border border-neon-purple/20">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-slate-400">流利度</span>
                            <ThumbsUp className="w-3 h-3 text-neon-purple" />
                          </div>
                          <p className="text-2xl font-bold text-neon-purple">{msg.feedback.fluency}%</p>
                        </div>
                      </div>
                      {msg.feedback.suggestions && msg.feedback.suggestions.length > 0 && (
                        <div>
                          <h5 className="text-xs text-slate-400 mb-2 flex items-center gap-1">
                            <Lightbulb className="w-3 h-3 text-yellow-500" />
                            改进建议
                          </h5>
                          <ul className="space-y-1.5">
                            {msg.feedback.suggestions.map((suggestion, index) => (
                              <li key={index} className="text-xs text-slate-300 flex items-start gap-2">
                                <ChevronLeft className="w-3 h-3 text-neon-cyan mt-0.5 flex-shrink-0" />
                                {suggestion}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Corrections Section - Teacher Style */}
                  {msg.role === 'bot' && msg.corrections && msg.corrections.length > 0 && (
                    <div className="w-full p-4 rounded-xl bg-orange-500/5 border border-orange-500/20 mt-2">
                      <div className="flex items-center gap-2 mb-3">
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                        <h4 className="text-sm font-semibold text-white">错误纠正</h4>
                      </div>
                      <div className="space-y-3">
                        {msg.corrections.map((correction, index) => (
                          <div key={index} className="p-3 rounded-lg bg-white/5">
                            <div className="flex items-center gap-2 mb-2">
                              <XCircle className="w-4 h-4 text-red-400" />
                              <span className="text-sm text-slate-400 line-through">{correction.original}</span>
                            </div>
                            <div className="flex items-center gap-2 mb-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              <span className="text-sm text-white">{correction.corrected}</span>
                            </div>
                            <p className="text-xs text-slate-500 pl-8">{correction.explanation}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <span className="text-[10px] text-slate-600 font-mono">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex gap-1">
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-neon-cyan" />
              </div>
            </div>
          )}
        </div>

        {/* Action Area - Expanded */}
        <div className="p-5 bg-void/50 border-t border-white/5">
          {/* Quick Phrases */}
          <div className="mb-4 flex flex-wrap gap-2">
            {commonPhrases.slice(0, 4).map((phrase) => (
              <button
                key={phrase.id}
                onClick={() => handlePhraseInsert(phrase.formal)}
                className="px-3 py-2 rounded-lg bg-white/5 border border-white/8 text-xs text-slate-400 hover:text-white hover:border-neon-cyan/30 transition-colors flex items-center gap-1.5"
              >
                <phrase.icon className="w-3 h-3" />
                {phrase.phrase}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="用法语输入你的回复，或选择常用表达..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-neon-cyan transition-colors text-sm"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-500">
                <span className="text-[10px] items-center gap-1 hidden md: flex border border-white/10 px-1.5 py-0.5 rounded">
                  <span className="text-xs">⏎</span> 发送
                </span>
              </div>
            </div>
            <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors">
              <Mic className="w-5 h-5" />
            </button>
            <button 
              onClick={handleSend}
              className="p-3 rounded-xl bg-neon-cyan text-void hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all active:scale-95"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          {/* Status Bar */}
          <div className="mt-3 flex items-center justify-between text-[10px] uppercase font-mono tracking-widest text-slate-600">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <Info className="w-3 h-3 text-neon-cyan" />
                <span>纠错模式：已开启</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
                <span>语法检查：正常</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Users className="w-3 h-3 text-neon-purple" />
              <span>练习场景：日常对话</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
