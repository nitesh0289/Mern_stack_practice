const express = require("express");
const app = express();

app.use(express.json());

//route '/'

app.get("/", (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(`<h1>Hello from CipherSchools Blog Page</h1>`);
  res.send();
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Server is live! and running at ${PORT}`);
});
