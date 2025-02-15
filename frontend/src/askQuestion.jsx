import { useState } from "react";
import axios from "axios";

function AskQuestion() {
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");
  const [problem, setProblemTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4500/api/v1/chestguardquestion/askQuestionFYP",
        { age, city, problem, description },
        { withCredentials: true }
      );
      if (response.status === 200) {
        alert("Successfully Submitted");
        setAge("");
        setCity("");
        setProblemTitle("");
        setDescription("");
      }
    } catch (error) {
      alert("Submission Failed");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      <div className="bg-[#0f172a] p-8 rounded-2xl shadow-2xl w-full max-w-lg border-4 border-transparent relative">
        <div className="absolute inset-0 rounded-2xl border-[3px] border-blue-500 shadow-[0_0_15px_3px_#3b82f6] animate-pulse"></div>

        <h2 className="text-3xl font-semibold text-white text-center mb-6 relative z-10">
          Submit Your Problem
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
          <div className="relative">
            <input
              type="text"
              name="age"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
              className="w-full p-4 border border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-800 text-white placeholder-gray-400 neon-border"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
              className="w-full p-4 border border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-800 text-white placeholder-gray-400 neon-border"
            />
          </div>

          <div className="relative">
            <input
              type="text"
              name="problem"
              placeholder="Problem Title"
              value={problem}
              onChange={(e) => setProblemTitle(e.target.value)}
              required
              className="w-full p-4 border border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-800 text-white placeholder-gray-400 neon-border"
            />
          </div>

          <div className="relative">
            <textarea
              name="description"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full p-4 border border-transparent rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-800 text-white placeholder-gray-400 h-40 resize-none neon-border"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-[0_0_15px_#3b82f6]"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AskQuestion;
