// Import express
const express = require("express");

// import Route
const { registrationsRouter } = require("./routes/check.routes");

// App
const app = express();

app.use(express.json());

// Route
app.use("/api/v1/registrations", registrationsRouter);

app.all("*", (req, res) => {
  res.status(400).json({
    status: "Error",
    message: `${req.method} ${req.url} does not exist en our server`,
  });
});

module.exports = { app };
