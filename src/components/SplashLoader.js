import React from "react";
import logoPath from "../constants/logoPath";

export default function SplashLoader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#071d34] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#071d34] via-[#0f1f2f] to-[#0b1120] opacity-95"></div>
      <div className="absolute inset-0 animate-splash-shine bg-[radial-gradient(circle_at_top_right,_rgba(147,197,253,0.12),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(56,189,248,0.08),_transparent_22%)] opacity-70" />

      <div className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 text-center">
        <div className="relative flex items-center justify-center w-44 h-44 md:w-52 md:h-52 rounded-[2rem] bg-[#0f1f2f]/90 border border-white/10 shadow-[0_32px_90px_rgba(15,23,42,0.35)] animate-card-pop overflow-hidden">
          <div className="absolute inset-0 rounded-[2rem] border border-slate-600/30" />
          <div className="absolute inset-4 rounded-full border border-blue-400/30 animate-ring-spin" />
          <img
            src={logoPath}
            alt="YugAntar Technologies"
            className="relative w-24 h-24 md:w-28 md:h-28 object-contain animate-logo-zoom"
          />
        </div>

        <div className="max-w-[520px] w-full px-4">
          <p className="text-3xl md:text-4xl font-semibold tracking-tight text-white animate-title-appear">
            YugAntar Technologies
          </p>
          <p className="mt-2 text-xs md:text-sm uppercase tracking-[0.35em] text-slate-400 animate-subtitle-fade">
            TRAINING & IT SERVICES
          </p>
          <p className="mt-4 text-sm text-slate-300 animate-subtitle-fade">
            Launching a cleaner, more professional experience for your visitors.
          </p>
        </div>
      </div>
    </div>
  );
}
