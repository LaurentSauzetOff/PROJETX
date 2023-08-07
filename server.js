const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routes/user.routes");
require("dotenv").config({ path: "./config/.env" });
require("./config/database.js");
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// routes
app.use('/api/user', userRoutes)

// server
app.listen(process.env.PORT, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
});
