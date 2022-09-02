const { Registrations } = require("../models/check.model");

const { currentDate } = require("../middlewares/date.middleware");

const getAllRegist = async (req, res) => {
  try {
    const registrations = await Registrations.findAll();

    res.status(200).json({
      status: "success",
      data: { registrations },
    });
  } catch (error) {
    console.log(error);
  }
};

const getRegistById = async (req, res) => {
  const { regist } = req;

  res.status(200).json({
    status: "success",
    data: { regist },
  });
};

const createRegist = async (req, res) => {
  try {
    const { id } = req.body;

    const newRegist = await Registrations.create({
      id,
      entranceTime: currentDate(),
    });

    res.status(200).json({
      status: "success",
      data: { newRegist },
    });
  } catch (error) {
    console.log(error);
  }
};

const updateRegist = async (req, res) => {
  const { regist } = req;

  await regist.update({ exitTime: currentDate(), status: "Out" });

  res.status(200).json({
    status: "success",
    data: { regist },
  });
};

const cancelRegist = async (req, res) => {
  const { regist } = req;

  await regist.update({ status: "Cancelled" });

  res.status(204).json({
    status: "success",
    data: { regist },
  });
};

module.exports = {
  getAllRegist,
  getRegistById,
  createRegist,
  updateRegist,
  cancelRegist,
};
