"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, CheckCircle2, XCircle } from "lucide-react";

const quizData = [
  {
    shloka: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।",
    options: ["Anushtup", "Indravajra", "Upendravajra", "Vasantatilaka"],
    answer: "Anushtup",
    fact: "Anushtup is the most common meter used in the Bhagavad Gita and Valmiki Ramayana."
  },
  {
    shloka: "किं तद् ब्रह्म किमध्यात्मं किं कर्म पुरुषोत्तम।",
    options: ["Anushtup", "Malini", "Shikharini", "Mandakranta"],
    answer: "Anushtup",
    fact: "Classic rhythmic structure of 8 syllables per quarter."
  }
];

export function SanskritQuiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);

  const handleSelect = (option: string) => {
    if (selected) return;
    setSelected(option);
    const correct = option === quizData[currentStep].answer;
    setIsCorrect(correct);
    if (correct) setScore(score + 1);
  };

  const nextQuestion = () => {
    setSelected(null);
    setIsCorrect(null);
    setCurrentStep((currentStep + 1) % quizData.length);
  };

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto bg-cream p-12 md:p-16 rounded-[3rem] border-2 border-peacock/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-5 text-peacock">
            <Music size={200} />
        </div>
        
        <div className="relative z-10">
            <div className="flex items-center justify-between mb-12">
                <span className="font-cairo text-xs font-bold tracking-[0.3em] text-gold uppercase">Level: Scholar</span>
                <span className="font-cairo text-xs font-bold tracking-[0.3em] text-peacock uppercase">Score: {score}</span>
            </div>

            <div className="text-center space-y-8 mb-16">
                <h3 className="font-cairo text-xl font-bold text-peacock/40 tracking-widest uppercase italic">Match the Meter</h3>
                <div className="manuscript p-12 bg-white rounded-[2rem] shadow-inner border border-gold/10">
                    <p className="font-noto text-3xl md:text-4xl text-peacock font-bold leading-relaxed mb-4">
                        {quizData[currentStep].shloka}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {quizData[currentStep].options.map((opt) => (
                    <button
                        key={opt}
                        disabled={!!selected}
                        onClick={() => handleSelect(opt)}
                        className={`p-6 rounded-2xl border-2 font-cairo text-sm tracking-widest font-bold transition-all flex items-center justify-between ${
                            selected === opt 
                            ? (opt === quizData[currentStep].answer ? "bg-green-500 border-green-500 text-white" : "bg-maroon border-maroon text-white")
                            : "bg-white border-peacock/5 text-peacock hover:border-maroon/20"
                        }`}
                    >
                        {opt}
                        {selected === opt && (opt === quizData[currentStep].answer ? <CheckCircle2 size={18}/> : <XCircle size={18}/>)}
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {selected && (
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-12 p-8 bg-white/50 rounded-3xl border border-peacock/5 text-center space-y-6"
                    >
                        <p className="font-cairo text-xl text-peacock/70 italic">
                            {isCorrect ? "Correct! " : "Keep learning! "} {quizData[currentStep].fact}
                        </p>
                        <button 
                            onClick={nextQuestion}
                            className="bg-peacock text-white px-10 py-3 rounded-full font-cairo tracking-widest font-bold hover:bg-maroon transition-all"
                        >
                            NEXT SHLOKA
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

