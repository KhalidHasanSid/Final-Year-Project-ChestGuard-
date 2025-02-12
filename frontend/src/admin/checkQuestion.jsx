import axios from "axios";
import React from "react";

export default function CheckQuestion() {
  const [info, setInfo] = React.useState([]);
  const [reply, setReply] = React.useState("");
  const [approved, setApproved] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4500/api/v1/chestguardquestion/getquestions"
        );
        console.log(response.data.data)
        setInfo(response.data.data);
      } catch (err) {
        console.error("Error fetching questions:", err);
      }
    };

    fetchData();
  }, []);


  const handlesubmit = async (_id) => {
    setApproved(true);

    try {
      const res = await axios.post(
        "http://localhost:4500/api/v1/chestguard/A",
        { _id, approved, reply },
        { withCredentials: true }
      );

      // ✅ Remove question from list after approval
      setInfo((prevInfo) => prevInfo.filter((item) => item._id !== _id));
    } catch (err) {
      console.error("Error approving question:", err);
    }
  };
   const deletesubmit=(_id)=>{
    try{ 
      const response= axios.post( "http://localhost:4500/api/v1/chestguard/deletequestion" ,{_id},{ withCredentials: true })
      setInfo((prev)=> prev.filter((eachValue)=>eachValue._id!==_id ))
    }
    catch(err){}
   }

  return (
    <>
      <h1>Data</h1>

      {info.map((eachValue) => (
        <div
          key={eachValue._id}
          style={{
            border: "2px solid red",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{eachValue._id}</h3>
          <input type="text" readOnly value={eachValue.city} />
          <h2>{eachValue.Problem_title}</h2>
          <input type="text" readOnly value={eachValue.description} />
          <label>Reply:</label>
          <input
            type="text"
            required
            onChange={(e) => setReply(e.target.value)}
          />
          <button onClick={() => handlesubmit(eachValue._id)}>Approve</button>
          <button onClick={() => deletesubmit(eachValue._id)}>delete</button>
        </div>
      ))}
    </>
  );
}
