import React, { useState } from "react";
import "./Report.css"; // 아래 CSS 함께 추가하세요

/**
 * 본문 전용 리포트 컴포넌트 (헤더/푸터 제외)
 * - AI 보고서 필드(원인/개선/환경/비용) 입력/표시
 * - 반응형 일반 CSS
 */
export default function ReportContent() {
  const [reportData, setReportData] = useState({
    causesOfWaste: "",
    improvementSuggestions: "",
    additionalCauses: "",
    environmentalImpact: "",
    costSavingEffect: "",
  });

  const onChange = (key) => (e) =>
    setReportData((prev) => ({ ...prev, [key]: e.target.value }));

  return (
    <main className="report-main">
      <div className="report-header">
        <h1 className="report-title">생성형 AI 보고서</h1>
        <p className="report-sub">잔반 원인 · 개선 · 환경/비용 효과</p>
      </div>

      <section className="report-section">
        <h2 className="section-title">잔반 발생 원인</h2>

        <div className="field-row">
          <label className="field-label" htmlFor="causesOfWaste">
            잔반 발생 원인
          </label>
          <div className="pill">
            <input
              id="causesOfWaste"
              type="text"
              className="pill-input"
              placeholder="AI가 분석한 잔반 발생 원인을 입력하세요"
              value={reportData.causesOfWaste}
              onChange={onChange("causesOfWaste")}
            />
          </div>
        </div>

        <div className="field-row">
          <label className="field-label sr-only" htmlFor="additionalCauses">
            상세 원인
          </label>
          <div className="pill">
            <textarea
              id="additionalCauses"
              className="pill-textarea"
              placeholder="상세한 원인 분석 내용"
              rows={1}
              value={reportData.additionalCauses}
              onChange={onChange("additionalCauses")}
            />
          </div>
        </div>
      </section>

      <section className="report-section">
        <h2 className="section-title">기대 효과</h2>

        <div className="field-row">
          <label className="field-label" htmlFor="improvementSuggestions">
            개선 제안
          </label>
          <div className="pill">
            <input
              id="improvementSuggestions"
              type="text"
              className="pill-input"
              placeholder="AI 추천 개선 방안"
              value={reportData.improvementSuggestions}
              onChange={onChange("improvementSuggestions")}
            />
          </div>
        </div>

        <div className="field-row">
          <label className="field-label sr-only" htmlFor="improveDetail1">
            구체적 개선안
          </label>
          <div className="pill">
            <textarea
              id="improveDetail1"
              className="pill-textarea"
              placeholder="구체적인 개선 방안과 실행 계획"
              rows={1}
            />
          </div>
        </div>

        <div className="field-row">
          <label className="field-label sr-only" htmlFor="improveDetail2">
            추가 개선안
          </label>
          <div className="pill">
            <textarea
              id="improveDetail2"
              className="pill-textarea"
              placeholder="추가 개선 사항"
              rows={1}
            />
          </div>
        </div>
      </section>

      <section className="report-section">
        <h2 className="section-title">환경 기대 효과</h2>

        <div className="field-row">
          <label className="field-label" htmlFor="environmentalImpact">
            환경 기대 효과
          </label>
          <div className="pill">
            <input
              id="environmentalImpact"
              type="text"
              className="pill-input"
              placeholder="환경에 미치는 긍정적 영향"
              value={reportData.environmentalImpact}
              onChange={onChange("environmentalImpact")}
            />
          </div>
        </div>

        <div className="field-row">
          <label className="field-label sr-only" htmlFor="environmentDetail">
            환경 설명
          </label>
          <div className="pill">
            <textarea
              id="environmentDetail"
              className="pill-textarea"
              placeholder="환경 개선 효과 상세 설명"
              rows={1}
            />
          </div>
        </div>
      </section>

      <section className="report-section">
        <h2 className="section-title">비용 절감 효과</h2>

        <div className="field-row">
          <label className="field-label" htmlFor="costSavingEffect">
            비용 절감 효과
          </label>
          <div className="pill pill-inline">
            <input
              id="costSavingEffect"
              type="text"
              className="pill-input"
              placeholder="예상 절감 비용"
              value={reportData.costSavingEffect}
              onChange={onChange("costSavingEffect")}
            />
            <span className="pill-suffix">(만)원</span>
          </div>
        </div>
      </section>
    </main>
  );
}
