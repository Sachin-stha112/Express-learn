import express from "express";

const app = express();
//route
app.get("/users", (req, res, next) => {
  try {
    throw new Error("Database connection failed");
  } catch (error) {
    next(error);
  }
});
//middleware
app.use((err, req, res, next) => {
  console.error(err.message);

  res.status(500).json({
    message: "Something went wrong",
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

// error middleware are kept below the route
//Because the request needs to pass through your routes/middleware first.