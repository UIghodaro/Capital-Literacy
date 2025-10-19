"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const questions = [
  {
    id: 1,
    prompt: "What does 'Budgeting' mean?",
    options: [
      "Spending all your money fast",
      "Tracking and planning your expenses",
      "Borrowing money from a bank",
    ],
    correctIndex: 1,
  },
  {
    id: 2,
    prompt: "What’s the purpose of a credit score?",
    options: [
      "To show how much money you have",
      "To measure how likely you are to repay loans",
      "To track your tax payments",
    ],
    correctIndex: 1,
  },
  {
    id: 3,
    prompt: "What does APR stand for?",
    options: [
      "Annual Percentage Rate",
      "Automatic Payment Record",
      "Account Payable Return",
    ],
    correctIndex: 0,
  },
];

export default function LessonPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const router = useRouter();

  const current = questions[currentIndex];

  const handleAnswer = (optionIndex: number) => {
    setSelected(optionIndex);

    if (optionIndex === current.correctIndex) {
      setScore((s) => s + 1);
    }

    // Move to next question after short delay
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex((i) => i + 1);
        setSelected(null);
      } else {
        router.push(`/result?score=${score + 1}&total=${questions.length}`);
      }
    }, 800);
  };

  return (
    <div className="max-w-[640px] mx-auto p-4 flex flex-col items-center gap-y-8 text-center">
      <h2 className="text-2xl font-bold text-blue-800">
        Lesson {currentIndex + 1} / {questions.length}
      </h2>

      <div className="text-lg font-medium">{current.prompt}</div>

      <div className="flex flex-col w-full gap-3">
        {current.options.map((option, i) => {
          const isSelected = selected === i;
          const isCorrect = selected !== null && i === current.correctIndex;
          const isWrong = selected !== null && i === selected && i !== current.correctIndex;

          return (
            <Button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={selected !== null}
              variant={
                isCorrect
                  ? "primary"
                  : "danger"
              }
              className="w-full text-base"
            >
              {option}
            </Button>
          );
        })}
      </div>

      <p className="text-sm text-gray-500">
        Score: {score} / {questions.length}
      </p>
    </div>
  );
}
