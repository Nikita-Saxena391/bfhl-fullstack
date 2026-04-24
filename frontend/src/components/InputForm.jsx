import React, { useState } from "react";
import axios from "axios";

export default function InputForm({ setResult }) {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const arr = input.split(",").map(i => i.trim());

      const res = await axios.post("http://localhost:5000/bfhl", {
        data: arr
      });

      setResult(res.data);
    } catch (err) {
      alert("Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <textarea
        placeholder="Enter: A->B, A->C, B->D"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>
        {loading ? "Processing..." : "Submit"}
      </button>
    </div>
  );
}