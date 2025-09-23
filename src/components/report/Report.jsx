// components/ReportView.jsx
import React, { useEffect, useState } from "react";
import {Reports} from "../../utils/api/ReportAPI";

export default function ReportView() {
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Reports.getReports()
      .then((res) => setReport(res))
      .catch((err) => console.error("데이터 불러오기 실패", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>불러오는 중…</p>;
  if (!report) return <p>데이터 없음</p>;

  return (
    <div>
      <h2>레시피 개선사항</h2>

      {/* 고정 더미 이미지 */}
      <img
        src="/images/dummy_fixed.jpg"
        alt="food"
        style={{ maxWidth: 320, borderRadius: 8 }}
      />

      <ul>
        <li><strong>기간:</strong> {report.start} ~ {report.end}</li>
        <li><strong>예상 잔반 비용:</strong> {report.wasteCost}</li>
        <li><strong>탄소 절감량(kg):</strong> {report.carbonReductionKg}</li>
        <li><strong>마진 개선:</strong> {report.marginImprovement}</li>
      </ul>

      {report.extras && (
        <div>
          <h3>추가 지표</h3>
          <pre>{JSON.stringify(report.extras, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
