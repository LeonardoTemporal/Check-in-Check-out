const express = require("express");

// Middlewares
const { registExist } = require("../middlewares/regist.middlewares");

// Controllers
const {
  getAllRegist,
  getRegistById,
  createRegist,
  updateRegist,
  cancelRegist,
} = require("../controllers/check.controller");

const registrationsRouter = express.Router();

registrationsRouter.get("/", getAllRegist);

registrationsRouter.get("/:id", registExist, getRegistById);

registrationsRouter.post("/", createRegist);

registrationsRouter.patch("/:id", registExist, updateRegist);

registrationsRouter.delete("/:id", registExist, cancelRegist);

module.exports = { registrationsRouter };
