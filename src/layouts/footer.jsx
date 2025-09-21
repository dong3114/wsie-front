import React, { useEffect, useRef, useState } from "react";
import "./styles/Footer.css";
import { setTheme } from "../utils/Theme"; // 경로 유지

export default function Footer() {
  const [open, setOpen] = useState(false);
  const fabRef = useRef(null);

  // 바깥 클릭 / ESC 로 닫기
  useEffect(() => {
    const onDoc = (e) => { if (fabRef.current && !fabRef.current.contains(e.target)) setOpen(false); };
    const onEsc  = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const themes = [
    { id: "peach",    label: "Peach",    swatch: "#FDC4AC" },
    { id: "teal",     label: "Teal",     swatch: "#76A9B2" },
    { id: "dark",     label: "Dark",     swatch: "#1E2A2A" },

    { id: "sunset",   label: "Sunset",   swatch: "#E59A2A" },
    { id: "sand",     label: "Sand",     swatch: "#EADCC8" },
    { id: "navy",     label: "Navy",     swatch: "#2F436B" },
    { id: "chestnut", label: "Chestnut", swatch: "#8B3F0B" },
    { id: "forest",   label: "Forest",   swatch: "#13331D" },
    { id: "olive",    label: "Olive",    swatch: "#6F7F3A" },
    { id: "stone",    label: "Stone",    swatch: "#D8D6CF" },
    { id: "deep-teal",label: "Deep Teal",swatch: "#3F6768" },
    { id: "sky",      label: "Sky",      swatch: "#78AFC4" },
    { id: "mint",     label: "Mint",     swatch: "#DFFFD0" },
    { id: "rose",     label: "Rose",     swatch: "#F2B2D8" },
    { id: "copper",   label: "Copper",   swatch: "#BF6A2A" },
  ];

  const current = document.documentElement.getAttribute("data-theme") || "peach";

  return (
    <>
      {/* 기존 푸터 그리드: 햄버거 제거, SIGN UP만 유지 */}
      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-grid">
            <div className="ft-col">
              <h4>Developer</h4>
              <ul>
                <li>DongHwan</li>
                <li>JungJea</li>
                <li>JiNa</li>
              </ul>
            </div>
            <div className="ft-col">
              <h4>Planning</h4>
              <ul><li>JunYong</li></ul>
            </div>
            <div className="ft-col">
              <h4>Infrastructure</h4>
              <ul><li>SungHyun</li></ul>
            </div>
            <div className="ft-col">
              <h4>AI / NLP</h4>
              <ul><li>YongFil</li></ul>
            </div>
            <div className="ft-cta">
              <button className="btn-signup" type="button">SIGN UP</button>
            </div>
          </div>
        </div>
      </footer>

      {/* 뷰포트 고정 FAB + 오버레이 + 메뉴 (기존 컴포넌트 내부에 포함) */}
      {open && <div className="theme-fab__backdrop" onClick={() => setOpen(false)} />}
      <div className={`theme-fab ${open ? "is-open" : ""}`} ref={fabRef}>
        <button
          type="button"
          className="theme-fab__btn"
          aria-label="Theme menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span className="burger" />
        </button>

        {open && (
          <ul className="theme-fab__menu" role="menu">
            {themes.map(t => (
              <li key={t.id} role="none">
                <button
                  type="button"
                  role="menuitemradio"
                  aria-checked={current === t.id}
                  className={`theme-item ${current === t.id ? "is-active" : ""}`}
                  onClick={() => { setTheme(t.id); setOpen(false); }}
                >
                  <span className="swatch" style={{ background: t.swatch }} />
                  {t.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
