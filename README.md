# 🌳 Hierarchy Visualizer (BFHL Full Stack Project)

A full-stack web application that processes relationships like `A->B` and visualizes them as hierarchical trees, detects cycles, and validates input data.

---

## 🚀 Live Demo

- 🌐 Frontend: https://bfhl-fullstack-alpha.vercel.app/
- 🔗 Backend API: https://bfhl-backend-rrer.onrender.com

---

## 📖 About the Project

This project takes input relationships like `A->B` and converts them into hierarchical tree structures. It helps visualize parent-child relationships clearly while handling real-world issues like invalid inputs, duplicate edges, and cycles.

The backend processes the data and returns structured output, which is displayed on the frontend as trees along with a summary. It supports multiple independent trees and ensures that each node has only one parent.

flowchart TB

%% ===================== CLIENT LAYER =====================
subgraph CLIENT["Client Layer"]
    A[User Browser]
    B[React Frontend (Vite)]
    A --> B
end

%% ===================== API LAYER =====================
subgraph API["API Layer"]
    C[Input Form UI]
    D[REST API: /bfhl]
    B --> C
    C --> D
end

%% ===================== BACKEND LAYER =====================
subgraph BACKEND["Backend Layer (Node + Express)"]

    E[Express Server]

    F[Graph Processing Engine]

    F1[Cycle Detection Module]
    F2[Duplicate Detection Module]
    F3[Tree Construction Module]

    E --> F
    F --> F1
    F --> F2
    F --> F3
end

%% ===================== RESPONSE LAYER =====================
subgraph RESPONSE["Response Layer"]
    G[Structured JSON Response]
    H[Frontend Renderer]
    I[Tree Visualization + Summary UI]
end

D --> E

F1 --> E
F2 --> E
F3 --> E

E --> G
G --> H
H --> I

%% ===================== DEPLOYMENT =====================
subgraph DEPLOYMENT["Deployment"]
    J[Vercel - Frontend]
    K[Render - Backend]
end

B --> J
E --> K

## 📌 Features

* Convert input relations into tree structures
* Detect cycles in graph
* Identify duplicate edges
* Validate invalid inputs
* Support multiple independent trees
* Display summary (total trees, cycles, largest root)
* Handle multi-parent edge cases

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios
* CSS

### Backend

* Node.js
* Express.js

### Deployment

* Frontend: Vercel
* Backend: Render

---

## 📥 Input Format

Enter relationships as comma-separated values:

```
A->B, B->C, A->C
```

---

## 📤 Sample Output

* Tree visualization
* Summary:

  * Total Trees
  * Total Cycles
  * Largest Root
* Invalid Entries
* Duplicate Edges

---

## 🧠 API Endpoint

### POST `/bfhl`

#### Request Body:

```json
{
  "data": ["A->B", "B->C"]
}
```

#### Response:

```json
{
  "user_id": "NikitaSaxena_01012000",
  "email_id": "ns1542@srmist.edu.in",
  "college_roll_number": "RA2311008020011",
  "hierarchies": [...],
  "invalid_entries": [],
  "duplicate_edges": [],
  "summary": {
    "total_trees": 1,
    "total_cycles": 0,
    "largest_tree_root": "A"
  }
}
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/Nikita-Saxena391/bfhl-fullstack.git
cd bfhl-fullstack
```

---

### 2. Backend Setup

```
cd backend
npm install
npm start
```

---

### 3. Frontend Setup

```
cd frontend
npm install
npm run dev
```

---

## 🌍 Environment Variables

### Frontend (.env for local)

```
VITE_API_URL=http://localhost:5000
```

### Production (Vercel)

```
VITE_API_URL=https://bfhl-backend-rrer.onrender.com
```

---

## 🧪 Test Cases

Try inputs like:

```
A->B, B->C
A->B, B->C, C->A
A->B, A->B, hello
A->C, B->C
```

---

## 🧠 What I Learned

* Graph processing using DFS
* Cycle detection in directed graphs
* Handling duplicates and invalid data
* API integration between frontend and backend
* Full-stack deployment

---

## 👩‍💻 Author

**Nikita Saxena**
SRM Institute of Science and Technology

---

## 📄 License

This project is for educational and evaluation purposes.
