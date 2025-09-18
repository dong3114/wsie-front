import React, { useState } from "react";
import { analyzeImage } from "../../services/api";

function UploadForm({ setReport }) {
  const [file, setFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("이미지를 선택하세요!");

    try {
      const result = await analyzeImage(file);
      setReport(result);
    } catch (error) {
      console.error("분석 실패:", error);
      alert("분석 요청 중 오류가 발생했습니다.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <button type="submit">분석하기</button>
    </form>
  );
}

export default UploadForm;
