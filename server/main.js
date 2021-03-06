const PORT = 3000;
const server = require("./index");
const { db } = require("./db");

const init = async () => {
  try {
    await db.sync();
    server.listen(PORT, () =>
      console.log(`Listening on port ${PORT}: http://localhost:${PORT}/`)
    );
  } catch (ex) {
    console.log(`Something went wrong.`, ex);
  }
};

init();
