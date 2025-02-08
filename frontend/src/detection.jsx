import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, CardContent } from './ui/card';
import { Upload, RefreshCw } from 'lucide-react';

const Detection = () => {
  const [xrayImage, setXrayImage] = useState(null);
  const [findings, setFindings] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setXrayImage(URL.createObjectURL(file));
    }
  };

  const analyzeXray = async (imageUrl) => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.example.com/analyze-xray',
        { imageUrl },
        { headers: { 'Content-Type': 'application/json' } }
      );
      setFindings(response.data);
    } catch (error) {
      console.error('Error analyzing X-ray:', error);
      alert('An error occurred during analysis.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnalyze = () => {
    if (!xrayImage) {
      alert('Please upload an X-ray image first.');
      return;
    }
    analyzeXray(xrayImage);
  };

  const handleRefresh = () => {
    setXrayImage(null);
    setFindings(null);
  };

  useEffect(() => {
    if (findings) {
      console.log('Findings updated:', findings);
    }
  }, [findings]);

  return (
    <div className="p-6 flex flex-col items-center bg-[#012547]  min-h-screen">
      <Card className="w-full max-w-2xl p-4 bg-white shadow-xl">
        <CardContent>
          <h1 className="text-2xl font-bold mb-4">X-Ray Analysis</h1>
          <div className="border rounded-xl overflow-hidden mb-4">
            {xrayImage ? (
              <img src={xrayImage} alt="Uploaded X-ray" className="w-full h-auto" />
            ) : (
              <div className="p-4 text-center text-gray-500">No X-ray uploaded</div>
            )}
          </div>
          <div className="flex justify-center gap-4 mb-4">
            <label className="bg-blue-500 text-white px-4 py-2 rounded-xl cursor-pointer">
              <Upload className="inline mr-2" /> Upload X-ray
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="bg-green-500 text-white px-4 py-2 rounded-xl"
            >
              {loading ? 'Analyzing...' : 'Start Analysis'}
            </button>
            <button
              onClick={handleRefresh}
              className="bg-gray-500 text-white px-4 py-2 rounded-xl"
            >
              <RefreshCw className="inline mr-2" /> Refresh
            </button>
          </div>
          {findings && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="text-xl font-bold mb-2">X-Ray Findings</h2>
              <p className="text-gray-700">Consolidation: {findings.consolidation}</p>
              <p className="text-gray-700">Respiratory Disease: {findings.respiratoryDisease}</p>
              <p className="text-gray-700">Pneumonia: {findings.pneumonia}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Detection;


 