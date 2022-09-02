const { app } = require("./app");
const { db } = require("./utils/database.util");

const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    const PORT = 1000;

    app.listen(PORT, () => {
      console.log(`Express app running at port ${PORT}! :D`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
