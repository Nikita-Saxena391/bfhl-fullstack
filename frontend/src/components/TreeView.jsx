import React from "react";

function renderTree(node) {
  return (
    <ul>
      {Object.entries(node).map(([key, value]) => (
        <li key={key}>
          <span className="node">{key}</span>
          {Object.keys(value).length > 0 && renderTree(value)}
        </li>
      ))}
    </ul>
  );
}

export default function TreeView({ hierarchy }) {
  // 🔴 Handle cycle case
  if (hierarchy.has_cycle) {
    return (
      <div className="card error">
        <h3>🔴 Cycle Detected</h3>
        <p><strong>Root:</strong> {hierarchy.root}</p>
        <p>This graph contains a loop and cannot form a valid tree.</p>
      </div>
    );
  }

  // 🟡 Handle empty tree (safety)
  if (!hierarchy.tree || Object.keys(hierarchy.tree).length === 0) {
    return (
      <div className="card">
        <h3>🌱 Root: {hierarchy.root}</h3>
        <p>No children</p>
      </div>
    );
  }

  // 🌳 Normal tree
  return (
    <div className="card">
      <h3>🌱 Root: {hierarchy.root}</h3>
      <p><strong>Depth:</strong> {hierarchy.depth}</p>

      <div className="tree">
        <span className="node root">{hierarchy.root}</span>
        {renderTree(hierarchy.tree)}
      </div>
    </div>
  );
}