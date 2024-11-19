const express = require("express");
const app = express();
let cors = require("cors");
const bodyParser = require("body-parser");

const corsOptions = {
  origin: ["*"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(require("./routes/emailRoutes"));

app.listen("3000", () => {
  console.log("Server started on port 3000");
});
