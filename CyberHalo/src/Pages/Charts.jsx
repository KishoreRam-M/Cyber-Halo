import React from "react";

import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from "recharts";

const PremiumToxicityChart = ({ data }) => {
  const chartData = [
    { label: "Toxicity", value: data.toxicityScore },
    { label: "Insult", value: data.insultScore },
    { label: "Threat", value: data.threatScore },
    { label: "Identity Attack", value: data.identityAttackScore },
    { label: "Obscene", value: data.obsceneScore },
    { label: "Severe Toxicity", value: data.severeToxicityScore },
  ];

  return (
    <div className="min-h-screen bg-[#0F0F0F] flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-5xl bg-[#1C1C1E] border border-[#3A3A3C] rounded-2xl shadow-xl text-[#F4F4F4] p-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <h1 className="text-3xl font-bold text-[#FFD700]">🧠 Toxicity Analysis</h1>
          <span className="px-4 py-1 rounded-full bg-[#FFD700] text-black text-sm font-semibold uppercase tracking-wide">
            {data.label}
          </span>
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Radar Chart */}
          <div className="bg-[#2C2C2E] rounded-xl p-6">
            <h2 className="text-xl font-semibold text-[#FFD700] mb-4">Score Breakdown</h2>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                <PolarGrid stroke="#3A3A3C" />
                <PolarAngleAxis dataKey="label" stroke="#FFD700" fontSize={12} />
                <PolarRadiusAxis angle={30} stroke="#A1A1A1" />
                <Radar
                  name="Scores"
                  dataKey="value"
                  stroke="#FFD700"
                  fill="#FFD700"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Textual Details */}
          <div className="bg-[#2C2C2E] rounded-xl p-6 flex flex-col justify-between">
            <h2 className="text-xl font-semibold text-[#FFD700] mb-4">Analysis Summary</h2>
            <div className="space-y-2 text-sm text-[#F4F4F4] font-mono">
              <p><span className="text-[#A1A1A1]">💬 Reason:</span> {data.reason}</p>
              <p><span className="text-[#A1A1A1]">📈 Total Score:</span> {data.score.toFixed(3)}</p>
              <p><span className="text-[#A1A1A1]">☣️ Toxicity:</span> {data.toxicityScore.toFixed(3)}</p>
              <p><span className="text-[#A1A1A1]">😠 Insult:</span> {data.insultScore.toFixed(3)}</p>
              <p><span className="text-[#A1A1A1]">⚠️ Threat:</span> {data.threatScore.toFixed(3)}</p>
              <p><span className="text-[#A1A1A1]">👤 Identity Attack:</span> {data.identityAttackScore.toFixed(3)}</p>
              <p><span className="text-[#A1A1A1]">🚫 Obscene:</span> {data.obsceneScore.toFixed(3)}</p>
              <p><span className="text-[#A1A1A1]">🔥 Severe Toxicity:</span> {data.severeToxicityScore.toFixed(6)}</p>
              <p><span className="text-[#A1A1A1]">🕒 Timestamp:</span> {new Date(data.timestamp).toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Optional Buttons */}
        <div className="flex justify-end gap-4 mt-6">
          <button className="bg-[#FFD700] text-black px-6 py-2 rounded-xl hover:bg-[#D4AF37] transition-all">
            📥 Export Report
          </button>
          <button className="bg-[#3A3A3C] text-[#F4F4F4] px-6 py-2 rounded-xl hover:bg-[#2C2C2E] transition-all">
            🔁 Analyze Another
          </button>
        </div>
      </div>
    </div>
  );
};

export default PremiumToxicityChart;
