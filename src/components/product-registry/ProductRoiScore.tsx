
import React from "react";

interface ProductRoiScoreProps {
  score: number;
}

function getColor(score: number) {
  if (score > 80) return "bg-green-500 text-white";
  if (score >= 50) return "bg-yellow-400 text-black";
  return "bg-rose-500 text-white";
}

export default function ProductRoiScore({ score }: ProductRoiScoreProps) {
  const className =
    "inline-block rounded px-2 py-0.5 text-xs font-bold " + getColor(score);
  return (
    <span className={className}>
      {score}
      <span className="ml-1 align-middle">
        {score > 80 ? "🟢" : score >= 50 ? "🟡" : "🔴"}
      </span>
    </span>
  );
}
