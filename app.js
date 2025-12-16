//console.log("hey");
import express from "express"

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Server of my blog")
})


app.listen(port, function () {
  console.log("Server is connected on port " + port);
});