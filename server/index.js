const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  const { name, phone, address, query } = req.body;
  console.log("Form Data Received:", { name, phone, address, query });
  res.status(200).send({ message: "Form submitted successfully" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
