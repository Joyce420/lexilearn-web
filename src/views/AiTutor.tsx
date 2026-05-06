import React, { useState, useRef, useEffect } from "react";
import { 
  Send, 
  Mic, 
  Sparkles, 
  RotateCcw, 
  MoreHorizontal,
  ChevronLeft,
  BrainCircuit,
  Info
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import ReactMarkdown from "react-markdown";
import { cn } from "../lib/utils";

interface Message {
  id: string;
  role: 'user' | 'bot';
  content: string;
  timestamp: Date;
  feedback?: string;
}

export function AiTutor() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'bot',
      content: "Bonjour Alex! 我是你的 AI 导师 LexiBot。准备好练习法语了吗？今天的重点教案是 **城市导航**。你会怎么询问最近的地铁站？",
      timestamp: new Date(),
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
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

    // Simulate AI Response
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: "非常出色！你可以说：'Où est la station de métro la plus proche?'。 \n\n**语法提示：** 记住 'station' 是阴性名词，所以我们使用 'la'。你想再尝试一个短语吗？",
        timestamp: new Date(),
        feedback: "语法准确度: 100% | 表达自然度: 85%"
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="h-[calc(100vh-10rem)] flex flex-col gap-6">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-neon-cyan p-0.5 bg-void">
            <div className="w-full h-full rounded-full bg-gradient-to-tr from-neon-cyan to-neon-purple flex items-center justify-center">
              <BrainCircuit className="text-white w-6 h-6" />
            </div>
          </div>
          <div>
            <h2 className="text-xl font-display font-bold">LexiBot <span className="text-xs font-normal text-neon-cyan border border-neon-cyan/30 px-1.5 py-0.5 rounded ml-2 uppercase tracking-tighter">AI 导师</span></h2>
            <p className="text-sm text-slate-500">法语语言专家 • 在线</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-xl hover:bg-white/5 transition-colors text-slate-400">
            <RotateCcw className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-xl hover:bg-white/5 transition-colors text-slate-400">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex-1 glass-card border-neon-cyan/10 flex flex-col min-h-0">
        {/* Chat Area */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth"
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
                  "max-w-[80%] flex flex-col gap-2",
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
                    {msg.role === 'bot' && msg.feedback && (
                      <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 text-[10px] text-neon-cyan font-mono uppercase tracking-widest">
                        <Sparkles className="w-3 h-3" />
                        分析：{msg.feedback}
                      </div>
                    )}
                  </div>
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

        {/* Action Area */}
        <div className="p-6 bg-void/50 border-t border-white/5">
          <div className="flex items-center gap-4">
            <div className="flex-1 relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="用法语输入你的回复..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-neon-cyan transition-colors"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-slate-500">
                <span className="text-[10px] items-center gap-1 hidden md:flex border border-white/10 px-1.5 py-0.5 rounded">
                  <span className="text-xs">⏎</span> 发送
                </span>
              </div>
            </div>
            <button className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-colors">
              <Mic className="w-6 h-6" />
            </button>
            <button 
              onClick={handleSend}
              className="p-3 rounded-xl bg-neon-cyan text-void hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all active:scale-95"
            >
              <Send className="w-6 h-6" />
            </button>
          </div>
          <div className="mt-4 flex items-center gap-6 text-[10px] uppercase font-mono tracking-widest text-slate-600">
            <div className="flex items-center gap-1.5">
              <Info className="w-3 h-3 text-neon-cyan" />
              当前重点：对话流利度
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-neon-purple shadow-[0_0_5px_rgba(176,38,255,0.5)]" />
              纠错模式：已开启
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
