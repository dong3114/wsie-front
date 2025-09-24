import React from "react";
import "./blocking-progress.css";

export default function BlockingProgress({ open, message = "분석 중…", percent = 0 }) {
  if (!open) return null;
  return (
    <div className="bp-mask" role="alert" aria-busy="true">
      <div className="bp-panel">
        <div className="bp-spinner" />
        <p className="bp-msg">{message}</p>
        <div className="bp-bar"><div className="bp-fill" style={{ width: `${Math.min(100, Math.max(0, Math.round(percent))) || 0}%` }} /></div>
      </div>
    </div>
  );
}
