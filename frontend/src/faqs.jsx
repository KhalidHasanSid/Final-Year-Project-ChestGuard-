import axios from "axios";
import React from "react";

export default function Faqs() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4500/api/v1/chestguard/B"
        );
        console.log(response.data.data);
        setData(response.data.data);
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex justify-center items-center">
      <div className="max-w-3xl w-full space-y-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-cyan-400">
          FAQs Section
        </h1>

        {data.map((eachValue) => (
          <div
            key={eachValue._id}
            className="relative bg-gray-800 p-5 rounded-lg shadow-lg border border-transparent"
          >
            {/* Neon Glow Effect */}
            <div className="absolute inset-0 rounded-lg border border-cyan-500 animate-glow"></div>

            <div className="relative z-10">
              <div className="text-gray-400 text-sm mb-2">
                <span className="font-semibold text-cyan-300">City:</span>{" "}
                {eachValue.city}
              </div>
              <h2 className="text-lg font-semibold text-white mb-2">
                {eachValue.Problem_title}
              </h2>
              <p className="text-gray-300 mb-3">{eachValue.Description}</p>
              <div className="border-t border-cyan-500 pt-3">
                <label className="text-cyan-400 font-semibold">Reply:</label>
                <p className="text-green-400">{eachValue.Reply}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Neon Glow Animation */}
      <style>
        {`
          @keyframes neonGlow {
            0% { box-shadow: 0 0 6px #3b82f6, 0 0 12px #3b82f6; }
            50% { box-shadow: 0 0 12px #06b6d4, 0 0 18px #06b6d4; }
            100% { box-shadow: 0 0 6px #3b82f6, 0 0 12px #3b82f6; }
          }
          .animate-glow {
            animation: neonGlow 1.5s infinite alternate;
          }
        `}
      </style>
    </div>
  );
}
