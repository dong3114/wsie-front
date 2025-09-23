import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { RecipeAPI } from "../../utils/api/RecipeAPI";
import LeftPanel from "../../components/report/RecipeLeft";
import RightPanel from "../../components/report/RecipeRight";
// 기존 RecipeButton.jsx 사용 안 함
import RecipeFooter from "../../components/buttons/RecipeFooter";

export default function Recipe({ req = {} }) {
  const nav = useNavigate();
  const [menus, setMenus] = useState([]);
  const [idx, setIdx] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await RecipeAPI.fetchText(req);
        if (!alive) return;
        if (Array.isArray(data) && data.length) {
          setMenus(data);
          setIdx(0);
        } else {
          setMenus([{
            menuName: "추천 레시피를 불러올 수 없습니다.",
            ingredients: [],
            tips: "(임시 더미 데이터)",
            estimatedCost: 0, price: 0, margin: 0
          }]);
          setIdx(0);
        }
      } finally {
        setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, [JSON.stringify(req)]); // 👈 객체 대신 문자열 비교

  const handleHome = () => nav("/");

  if (loading) return <div>loading…</div>;
  const current = menus[idx];

  return (
    <section style={{ maxWidth: 1080, margin: "0 auto", padding: 24 }}>
      <h2 style={{ textAlign: "center", marginBottom: 16, letterSpacing: 2 }}>추천 레시피</h2>

      {/* 상단 그리드: 좌/우 카드 */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, alignItems: "start" }}>
        <div style={{ border: "1px solid #eee", borderRadius: 12, overflow: "hidden", padding: 16, background: "#fff" }}>
          <LeftPanel item={current} />
        </div>
        <div style={{ border: "1px solid #eee", borderRadius: 12, overflow: "hidden", padding: 16, background: "#fffaf5" }}>
          <RightPanel item={current} />
        </div>
      </div>

      {/* 하단 독립 바: 좌/우 버튼 없음, 중앙 페이지 + 우측 홈만 */}
      <RecipeFooter
        page={idx + 1}
        total={menus.length}
        onHome={handleHome}
      />
    </section>
  );
}
