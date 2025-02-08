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
        {
          age,
          city,
          problem,
          description,
        },
        { withCredentials: true }
      );

      if (response.status === 200) {
        alert("Successfully Submitted");
      }
    } catch (error) {
      alert("Submission Failed");
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Submit Your Problem</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <input
          type="text"
          name="problem"
          placeholder="Problem Title"
          value={problem}
          onChange={(e) => setProblemTitle(e.target.value)}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AskQuestion;
