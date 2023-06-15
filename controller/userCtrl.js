const contactModel = require("../services/userService");

const insertCtrlData = async (req, res) => {
  try {
    console.log("hello");
    const value = req.body;
    const resultl = await contactModel.insertServiceData(value);
    res.status(200).json({ data: resultl });
  } catch (error) {
    console.log("err in ctrl", error);
  }
};

const getCtrlData = async (req, res) => {
  res.send("getData");
};

const fetchCtrlData = async (req, res) => {
  try {
    const getData = await contactModel.fetchServiceData();
    res.status(200).json({ data: getData });
  } catch (error) {
    console.log(error);
  }
};

const updateCtrlData = async (req, res) => {
  try {
    var upDatedata = req.body;
    id = req.params.id;
    const updateData = await contactModel.updateServiceData(upDatedata, id);
    res.status(200).json({ data: updateData });
  } catch (error) {
    console.log(error);
  }
};

const deleteContact = async (req, res) => {
  try {
    id = req.params.id;
    const updateData = await contactModel.deleteServiceData(id);
    res.status(200).json({ data: updateData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  insertCtrlData,
  getCtrlData,
  fetchCtrlData,
  deleteContact,
  updateCtrlData,
};
