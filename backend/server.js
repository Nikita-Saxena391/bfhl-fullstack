import express from "express";
import cors from "cors";
import { processData } from "./utils/processor.js";

const app = express();

app.use(cors());
app.use(express.json());

app.post("/bfhl", (req, res) => {
  try {
    const { data } = req.body;

    const result = processData(data);

    res.json({
      user_id: "nikitasaxena_01012000",
      email_id: "ns1542@srmist.edu.in",
      college_roll_number: "RA2311008020011",
      ...result
    });

  } catch (err) {
    console.error(err); 
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
