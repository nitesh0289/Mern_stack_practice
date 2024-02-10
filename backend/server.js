const express = require("express");
const connectDB = require("./db");
const cors = require("cors");

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

const userRouter = require("./routes/usersRouter");
const blogRouter = require("./routes/blogsRouter");

//Connection with DB
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cookieParser());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use("/api/users", userRouter);
app.use("/api/blogs", blogRouter);

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is live! and running at ${PORT}`);
});
