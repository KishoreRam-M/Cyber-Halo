import React, { useState, useRef, useEffect } from 'react';
import * as XLSX from 'xlsx';
import PremiumToxicityChart from './Charts';
import api from '../Api/Api';

const ExcelUploader = () => {
  const [jsonData, setJsonData] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const fileInputRef = useRef(null);

  // ✅ Convert only the first row of Excel to a single JSON object
  const transformData = (flatData) => {
    if (!flatData || flatData.length === 0) return null;

    const item = flatData[0];
    return {
      id: item.ID,
      content: item.Content,
      author: {
        id: item['Author ID'],
        name: item['Author Name'],
        email: item['Author Email'],
        role: item['Author Role']
      },
      target: {
        id: item['Target ID'],
        name: item['Target Name'],
        email: item['Target Email'],
        role: item['Target Role']
      }
    };
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setProcessing(true);
    setUploaded(false);

    const reader = new FileReader();
    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      console.log(data)
      const workbook = XLSX.read(data, { type: 'array' });

      console.log(workbook);

      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      console.log(worksheet);
      const flatJson = XLSX.utils.sheet_to_json(worksheet);
      console.log(flatJson)
      const nestedJson = transformData(flatJson); // ✅ get single object
      console.log(nestedJson)
      setJsonData(nestedJson);
      setProcessing(false);
      setUploaded(true);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleExportJSON = () => {
    if (!jsonData) return;
    const blob = new Blob([JSON.stringify(jsonData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'data.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleClickUpload = () => fileInputRef.current.click();

  const handleUploadAnother = () => {
    setJsonData(null);
    setProcessing(false);
    setUploaded(false);
  };

  const generateSubmit = async () => {
    if (!jsonData) return;
    try {
      const response = await api.post('/analyze/toxicity', jsonData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log("Data submitted:", response.data);
    } catch (error) {
      console.error("Error occurs while generating report:", error);
    }
  };

  useEffect(() => {
    generateSubmit();
  }, [jsonData]);

  return (
    <div className="min-h-screen p-6 bg-[#0F0F0F] text-[#F4F4F4] font-sans">
      <div
        onClick={handleClickUpload}
        className="cursor-pointer rounded-2xl border-2 border-dashed border-[#3A3A3C] p-10 text-center bg-[#1C1C1E] hover:border-[#D4AF37] transition"
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".xlsx"
          className="hidden"
          onChange={handleFileUpload}
        />
        <div className="text-2xl mb-2">📂 Drag & Drop Your Excel File</div>
        <div className="text-[#A1A1A1]">or Click to Upload (Supported: .xlsx)</div>
        {processing && <div className="text-[#FFD700] mt-4">🔄 Processing...</div>}
        {uploaded && !processing && <div className="text-green-400 mt-4">✅ Upload Success</div>}
      </div>

      {jsonData && (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#2C2C2E] rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold mb-4">📊 Table View (Preview JSON)</h2>
            <pre className="overflow-auto max-h-[400px] text-sm bg-[#1C1C1E] p-4 rounded-xl text-[#F4F4F4]">
              {JSON.stringify(jsonData, null, 2)}
            </pre>
          </div>

          <div className="bg-[#2C2C2E] rounded-2xl p-6 shadow-md text-center flex items-center justify-center">
            <div>
              <h2 className="text-xl font-semibold mb-4">Chart View (Auto generate UI)</h2>
              <p className="text-[#A1A1A1]">[ UI auto generation placeholder ]</p>
              <PremiumToxicityChart data={jsonData}/>
              
            </div>
          </div>
        </div>
      )}

      {jsonData && (
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={handleUploadAnother}
            className="bg-[#FFD700] text-black px-6 py-2 rounded-xl hover:bg-[#D4AF37] transition"
          >
            🔘 Upload Another File
          </button>
          <button
            onClick={handleExportJSON}
            className="bg-[#FFD700] text-black px-6 py-2 rounded-xl hover:bg-[#D4AF37] transition"
          >
            💾 Export JSON
          </button>
        </div>
      )}
    </div>
  );
};

export default ExcelUploader;
