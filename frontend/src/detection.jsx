import React, { useState, useEffect } from "react";
import axios from "axios";
import { Upload, RefreshCw, Loader2 } from "lucide-react";

const Detection = () => {
  const [xrayImage, setXrayImage] = useState(null);
  const [findings, setFindings] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    gender: "Male",
    age: "",
    city: "",
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setXrayImage(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const analyzeXray = async () => {
    if (!xrayImage) {
      alert("Please upload an X-ray image first.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "https://api.example.com/analyze-xray",
        { imageUrl: xrayImage, ...formData },
        { headers: { "Content-Type": "application/json" } }
      );
      setFindings(response.data);
    } catch (error) {
      console.error("Error analyzing X-ray:", error);
      alert("An error occurred during analysis.");
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    setXrayImage(null);
    setFindings(null);
    setFormData({ gender: "Male", age: "", city: "" });
  };

  useEffect(() => {
    if (findings) {
      console.log("Findings updated:", findings);
    }
  }, [findings]);

  return (
    <div className="flex pt-8 justify-center items-center min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      <div className="relative bg-[#0f172a] p-8 rounded-2xl shadow-2xl w-full max-w-lg border-[2px] border-transparent">
        {/* Neon Glow Border */}
        <div className="absolute inset-0 rounded-2xl border-[2px] border-blue-500 animate-glow"></div>

        <h2 className="text-3xl font-semibold text-white text-center mb-6 relative z-10">X-Ray Analysis</h2>

        {/* Image Preview */}
        <div className="flex flex-col items-center mb-4 relative z-10">
          {xrayImage ? (
            <img src={xrayImage} alt="Uploaded X-ray" className="w-64 h-auto rounded-lg border-2 border-cyan-500 shadow-lg" />
          ) : (
            <div className="w-64 h-40 flex items-center justify-center bg-gray-700 rounded-lg text-gray-400 border border-gray-600">
              No X-ray uploaded
            </div>
          )}
        </div>

        {/* Input Fields */}
        <div className="flex flex-col space-y-4 mb-6 relative z-10">
          <div>
            <label className="block text-sm font-semibold mb-1 text-white">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full p-4 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-800 text-white"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-white">Age</label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter Age"
              className="w-full p-4 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-800 text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-1 text-white">City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter City"
              className="w-full p-4 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-800 text-white"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col space-y-4 relative z-10">
          <label className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-xl cursor-pointer flex items-center gap-2 transition duration-300 shadow-md hover:shadow-lg">
            <Upload size={18} /> Upload X-ray
            <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
          </label>
          <button
            onClick={analyzeXray}
            disabled={loading}
            className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-xl flex items-center gap-2 transition duration-300 shadow-md hover:shadow-lg"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : "Start Analysis"}
          </button>
          <button
            onClick={handleRefresh}
            className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded-xl flex items-center gap-2 transition duration-300 shadow-md hover:shadow-lg"
          >
            <RefreshCw size={18} /> Refresh
          </button>
        </div>

        {/* Results Display */}
        {findings && (
          <div className="bg-gray-700 p-4 rounded-lg mt-6 border border-cyan-500 shadow-md relative z-10">
            <h2 className="text-xl font-bold text-cyan-400 mb-2">Analysis Result</h2>
            <p className="text-gray-300">Consolidation: {findings.consolidation}</p>
            <p className="text-gray-300">Respiratory Disease: {findings.respiratoryDisease}</p>
            <p className="text-gray-300">Pneumonia: {findings.pneumonia}</p>
          </div>
        )}
      </div>

      {/* Subtle Neon Glow Animation */}
      <style>
        {`
          @keyframes neonGlow {
            0%, 100% { box-shadow: 0 0 5px #3b82f6, 0 0 10px #3b82f6; }
            50% { box-shadow: 0 0 8px #06b6d4, 0 0 12px #06b6d4; }
          }
          .animate-glow {
            animation: neonGlow 1.5s infinite alternate;
          }
        `}
      </style>
    </div>
  );
};

export default Detection;
