"use client";

const TitleBar = () => {
  return (
    <div className="flex items-center justify-between bg-cursor-titlebar px-3 h-9 border-b border-cursor-border select-none">
      <div className="flex items-center gap-2">
        <span className="text-cursor-purple text-sm font-bold tracking-wide">
          Beth Ashcroft
        </span>
        <span className="text-cursor-text-muted text-xs"> Portfolio</span>
      </div>

      <div className="flex items-center gap-1.5">
        <button className="w-3 h-3 rounded-full bg-[#f59e0b] hover:brightness-110" />
        <button className="w-3 h-3 rounded-full bg-[#22c55e] hover:brightness-110" />
        <button className="w-3 h-3 rounded-full bg-[#ef4444] hover:brightness-110" />
      </div>
    </div>
  );
};

export default TitleBar;
