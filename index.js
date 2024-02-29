const express = require("express");
const app = express();
const data = [
  {
    name: "Michael Choi",
    createdAt: "23-01-2013",
    message:
      "This is my message. This is my message. This is my message. This is my message. This is my message.",
  },
  {
    name: "Michael Choi",
    createdAt: "15-01-2013",
    message:
      "This is my message. This is my message. This is my message. This is my message. This is my message.",
  },
  {
    name: "Cory Whiteland",
    createdAt: "15-01-2013",
    message:
      "This is my message. This is my message. This is my message. This is my message. This is my message.",
  },
  {
    name: "Cory Whiteland",
    createdAt: "01-01-2013",
    message:
      "This is my message. This is my message. This is my message. This is my message. This is my message.",
  },
];

app.get("/", (req, res) => {
  res.json(data);
});
app.use(express.static("public"));

app.listen(3000, () => console.log("Web Server running on port 3000"));
