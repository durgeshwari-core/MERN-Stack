const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

// to let apis understand all request
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.set(express.static(path.join(__dirname, "public")));

let post = [{
    username: "Shreya",
    title: "My First Post",
},
{
    username: "Durgeshwari",
    title: "another Post",
},
{
    username: "apsara",
    title: "unltra pro",
}];

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(port, () => {
  console.log("Server is listening on port :8080");
});