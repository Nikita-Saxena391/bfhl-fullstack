import React from "react";

export default function Summary({ summary }) {
  return (
    <div className="card summary">
      <h2>📊 Summary</h2>
      <div className="summary-grid">
        <div>Total Trees: {summary.total_trees}</div>
        <div>Total Cycles: {summary.total_cycles}</div>
        <div>Largest Root: {summary.largest_tree_root}</div>
      </div>
    </div>
  );
}