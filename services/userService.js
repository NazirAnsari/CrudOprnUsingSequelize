const contactModel = require("../repositories/userRepo");

const insertServiceData = async (value) => {
  try {
    console.log("hello");
    const resultl = await contactModel.insertData(value);
    return resultl;
  } catch (error) {
    console.log("err in ser", error);
  }
};

const fetchServiceData = async () => {
  try {
    const getData = await contactModel.fetchData();
    return getData;
  } catch (error) {
    console.log(error);
  }
};

const updateServiceData = async (upDatedata, id) => {
  try {
    const updateData = await contactModel.updateRepoData(upDatedata, id);
    return upDatedata;
  } catch (error) {
    console.log(error);
  }
};

const deleteServiceData = async (id) => {
  try {
    const updateData = await contactModel.deleteRepoData(id);
    return updateData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  insertServiceData,
  fetchServiceData,
  updateServiceData,
  deleteServiceData,
};
