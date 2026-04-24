import React from "react";

export default function OutputDisplay({ data }) {
  return (
    <div className="card">
      <h3>Response</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}