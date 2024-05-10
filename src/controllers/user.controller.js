const userService = require("../services/user.service.js");

const createUser = async (req, res) => {
  const { cant } = req.query;
  try {
    const response = await userService.createUsersMock(cant);
    res.status(200).json({ users: response });
  } catch (error) {
    console.log(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const response = await userService.getUsers();
    res.status(200).json({ 
      users: response, 
      pid: process.pid
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
  getUsers
}

