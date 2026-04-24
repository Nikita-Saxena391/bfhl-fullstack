import React, { useState } from "react";
import InputForm from "./components/InputForm";
import TreeView from "./components/TreeView";
import Summary from "./components/Summary";
import Footer from "./components/Footer";

export default function App() {
  const [data, setData] = useState(null);

  return (
    <div className="container">
      <h1>🌳 Hierarchy Visualizer</h1>

      <InputForm setResult={setData} />

      {data && (
        <>
          <Summary summary={data.summary} />

          <div className="grid">
            {data.hierarchies.map((h, idx) => (
              <TreeView key={idx} hierarchy={h} />
            ))}
          </div>

          <div className="grid">
            <div className="card error">
              <h3>❌ Invalid Entries</h3>
              {data.invalid_entries.length === 0
                ? "None"
                : data.invalid_entries.join(", ")}
            </div>

            <div className="card warning">
              <h3>⚠️ Duplicate Edges</h3>
              {data.duplicate_edges.length === 0
                ? "None"
                : data.duplicate_edges.join(", ")}
            </div>
             <Footer />
          </div>
        </>
      )}
    </div>
  );
}