import React from "react";

export default function RecipeRight({ item }) {
  const name = item?.menuName || item?.name || "Food Name";
  const ingredients = Array.isArray(item?.ingredients) ? item.ingredients : [];

  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div>
        <div style={{ fontSize: 18, fontWeight: 800, color: "#2b2f36", marginBottom: 6 }}>
          Food Name
        </div>
        <div
          style={{
            minHeight: 28,
            borderRadius: 12,
            display: "grid",
            alignItems: "center",
            padding: "8px 12px",
            maxWidth: 300,
          }}
        >
          {name}
        </div>
      </div>

      <div style={{ display: "grid", gap: 8, marginTop: 6 }}>
        {ingredients.length > 0 ? (
          ingredients.slice(0, 5).map((ing, i) => (
            <div
              key={i}
              style={{
                display: "grid",
                gridTemplateColumns: "70px 10px 1fr",
                gap: 8,
                alignItems: "center",
              }}
            >
              <span style={{ color: "#666" }}>재료명</span>
              <span style={{ color: "#999" }}>:</span>
              <div
                style={{
                  minHeight: 28,
                  borderRadius: 999,
                  background: "#e8ebf0",
                  display: "grid",
                  alignItems: "center",
                  padding: "0 12px",
                }}
              >
                {ing}
              </div>
            </div>
          ))
        ) : (
          <div style={{ color: "#888" }}>재료 정보 없음</div>
        )}
      </div>
    </div>
  );
}
