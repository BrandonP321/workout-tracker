const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workouttrackerdb", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
require("./routes/api/workout-api-routes.js")(app);
require("./routes/api/user-api-routes.js")(app);
require("./routes/html/workout-html-routes.js")(app);
require("./routes/html/login-html-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
