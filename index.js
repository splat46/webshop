const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.use("/", (req, res) => {
  res.send("Welcome on the Homepage");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
