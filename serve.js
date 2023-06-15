const express = require("express");
const app = express();
const route = require("./routes/route");
// app.get('/',(req,res)=>{
//     res.send("Hello Nazir")
// })
require("./models/contact");
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json())
app.use(bodyParser.json()) 

app.use("/", route);

app.get("/*", (req, res) => {
  res.send("API NOT Found");
});

app.listen(3000, () => {
  console.log("app is listen on port 3000");
});
