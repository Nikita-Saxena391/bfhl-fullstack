export function processData(data) {
  const validEdges = [];
  const invalid_entries = [];
  const duplicate_edges = [];

  const edgeSet = new Set();
  const regex = /^[A-Z]->[A-Z]$/;

  // 🔹 Step 1: Validate + remove duplicates
  for (let entry of data) {
    entry = entry.trim();

    if (!regex.test(entry) || entry[0] === entry[3]) {
      invalid_entries.push(entry);
      continue;
    }

    if (edgeSet.has(entry)) {
      if (!duplicate_edges.includes(entry)) {
        duplicate_edges.push(entry);
      }
      continue;
    }

    edgeSet.add(entry);
    validEdges.push(entry);
  }

  // 🔹 Step 2: Build graph
  const graph = {};
  const childSet = new Set();

  for (let edge of validEdges) {
    const [parent, child] = edge.split("->");

    if (!graph[parent]) graph[parent] = [];
    graph[parent].push(child);

    childSet.add(child);
  }

  
  const nodes = new Set();
  validEdges.forEach(e => {
    nodes.add(e[0]);
    nodes.add(e[3]);
  });


  const roots = [...nodes].filter(n => !childSet.has(n));

  const hierarchies = [];

  
  function dfs(node, path = new Set()) {
    if (path.has(node)) {
      return { cycle: true };
    }

    path.add(node);

    const children = graph[node] || []; 
    let tree = {};
    let maxDepth = 1;

    for (let child of children) {
      const res = dfs(child, new Set(path));

      if (res.cycle) return { cycle: true };

      tree[child] = res.tree;
      maxDepth = Math.max(maxDepth, res.depth + 1);
    }

    return { tree, depth: maxDepth };
  }

  let total_trees = 0;
  let total_cycles = 0;
  let largest_tree_root = "";
  let maxDepth = 0;

  
  if (roots.length === 0 && validEdges.length > 0) {
    return {
      hierarchies: [
        {
          root: validEdges[0][0],
          tree: {},
          has_cycle: true
        }
      ],
      invalid_entries,
      duplicate_edges,
      summary: {
        total_trees: 0,
        total_cycles: 1,
        largest_tree_root: ""
      }
    };
  }

  
  for (let root of roots) {
    const result = dfs(root);

    if (result.cycle) {
      total_cycles++;
      hierarchies.push({
        root,
        tree: {},
        has_cycle: true
      });
    } else {
      total_trees++;

      if (
        result.depth > maxDepth ||
        (result.depth === maxDepth && root < largest_tree_root)
      ) {
        maxDepth = result.depth;
        largest_tree_root = root;
      }

      hierarchies.push({
        root,
        tree: result.tree,
        depth: result.depth
      });
    }
  }

  return {
    hierarchies,
    invalid_entries,
    duplicate_edges,
    summary: {
      total_trees,
      total_cycles,
      largest_tree_root
    }
  };
}