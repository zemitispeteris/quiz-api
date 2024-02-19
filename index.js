const express = require("express");
const router = require("./src/routes");
const cors = require("cors");

const PORT = 8080;

const app = express();
app.use(cors());

app.use(express.json());
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
