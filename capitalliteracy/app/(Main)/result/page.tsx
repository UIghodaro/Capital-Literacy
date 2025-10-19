"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function ResultPage() {
  const params = useSearchParams();
  const router = useRouter();

  const score = Number(params.get("score"));
  const total = Number(params.get("total"));

  return (
    <div className="max-w-[640px] mx-auto p-8 flex flex-col items-center gap-6 text-center">
      <h1 className="text-3xl font-bold text-blue-800">Lesson Complete! 🎉</h1>
      <p className="text-lg">
        You scored <span className="font-bold">{score}</span> out of{" "}
        <span className="font-bold">{total}</span>
      </p>

      <Button
        size="lg"
        variant="secondary"
        onClick={() => router.push("/courses")}
      >
        Back to Courses
      </Button>
    </div>
  );
}
