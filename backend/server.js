const express = require("express");
const connectDB = require("./db");
const app = express();

app.use(express.json());

const userRouter = require("./routes/usersRouter");
const blogRouter = require("./routes/blogsRouter");

//Connection with DB
connectDB();

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<h1>This is a backend server</h1>`);
  res.send();
});

app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is live! and running at ${PORT}`);
});
