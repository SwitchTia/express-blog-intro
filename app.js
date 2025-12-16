//console.log("hey");
import express from "express"
import cities from "./cities.js";

const app = express();
const port = 3000;


// Creiamo il progetto base con una rotta / 
// che ritorna un testo semplice con scritto ”Server del mio blog”
app.get("/", (req, res) => {
    res.send("Server of my blog")
})



// Creiamo poi una rotta /bacheca che restituisca 
// un oggetto json con la lista dei post e il conteggio, partendo da un array.
app.get("/cities", (req, res) => {

    const newArray = cities.map((city) => {
    return {
      ...city, 
      foto:`/cities/${city.id}.png`
    }
  })
  const city = {
    info: {
      total: cities.length,
    },
    result: newArray
  };
  
  res.json(city);

})






app.listen(port, function () {
  console.log("Server is connected on port " + port);
});