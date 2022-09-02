const { Registrations } = require("../models/check.model");

const registExist = async (req, res, next) => {
  try {
    const { id } = req.params;

    const regist = await Registrations.findOne({ where: { id } });

    if (!regist) {
      return res.status(404).json({
        status: "error",
        message: "regist not fund",
      });
    }
    req.regist = regist;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { registExist };
