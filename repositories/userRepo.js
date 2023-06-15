var db = require("../connections/db");
var Contacts = db.Contacts;

const insertData = async (value) => {
  const data = value;
  try {
    // console.log("hello");
    const dataInsert = await Contacts.create(data);
    return dataInsert;
  } catch (error) {
    res.send(error);
  }
};

const fetchData = async () => {
  try {
    const getData = await Contacts.findAll();
    return getData;
  } catch (error) {
    console.log(error);
  }
};

const updateRepoData = async (upDatedata, id) => {
  try {
    const updateData = await Contacts.update(upDatedata, {
      where: {
        id: id,
      },
    });
    return updateData;
  } catch (error) {
    console.log(error);
  }
};

const deleteRepoData = async (id) => {
  try {
    const updateData = await Contacts.destroy({
      where: {
        id: id,
      },
    });
    return updateData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  insertData,
  fetchData,
  updateRepoData,
  deleteRepoData,
};
