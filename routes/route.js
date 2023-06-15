const abc = require("../controller/userCtrl");
var express = require("express");
const routes = express.Router();

var bodyParser = require("body-parser");
routes.use(bodyParser.urlencoded({ extended: true }));
routes.use(bodyParser.json());

routes.get("/", abc.getCtrlData);

routes.post("/insertData", abc.insertCtrlData);
routes.get("/fetchData", abc.fetchCtrlData);
routes.patch("/updateData/:id", abc.updateCtrlData);
routes.delete("/deleteUser/:id", abc.deleteContact);
module.exports = routes;
