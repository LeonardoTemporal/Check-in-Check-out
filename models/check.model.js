const { db, DataTypes } = require("../utils/database.util");

const Registrations = db.define("registrations", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: true,
  },
  entranceTime: {
    type: DataTypes.STRING, // Aqui iria type: DataTypes.DATE, pero me pone la fecha automatica mal, y pongo string para ponerla bien con una funcion dentro de los middlewares
    allowNull: true,
  },
  exitTime: {
    type: DataTypes.STRING, // Lo mismo que entranceTime
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Working",
  },
});

module.exports = { Registrations };
