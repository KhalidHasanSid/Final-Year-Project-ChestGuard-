import axios from "axios";
import React from "react";

export default function Faqs() {
  const [data, setData] = React.useState([]);
  

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4500/api/v1/chestguardquestion/getquestions"
        );
        setData(response.data.data);
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };

    fetchData();
  }, []);

 

  return (
    <>
      <h1>Data</h1>

      {data.map((eachValue) => (
        <div
          key={eachValue._id}
          style={{
            border: "2px solid red",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
         
          <input type="text" readOnly value={eachValue.city} />
          <h2>{eachValue.Problem_title}</h2>
          <input type="text" readOnly value={eachValue.description} />
          <label>Reply:</label>
          <input type="text" readOnly value={eachValue.Reply} />
         
     
        </div>
      ))}
    </>
  );
}
