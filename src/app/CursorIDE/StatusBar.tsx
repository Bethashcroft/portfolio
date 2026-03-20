"use client";

const StatusBar = () => {
  return (
    <div className="flex items-center justify-between bg-cursor-statusbar px-3 h-6 text-xs text-white select-none shrink-0 ">
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1">
          <svg
            className="w-3.5 h-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 3v12l6-3 6 3V3" />
          </svg>
          main
        </span>
        <span className="hidden sm:inline">0 errors</span>
        <span className="hidden sm:inline">0 warnings</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="hidden lg:inline">Ln 1, Col 1</span>
        <span className="hidden lg:inline">UTF-8</span>
        <span className="hidden lg:inline">TypeScript React</span>
        <span className="flex items-center gap-1">✦ AI: Available</span>
      </div>
    </div>
  );
};

export default StatusBar;
