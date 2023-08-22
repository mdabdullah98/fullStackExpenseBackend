const express = require("express");
const cors = require("cors");
const route = require("./routes/expense");
const sequelize = require("./utils/database");
const port = 8080;
const server = express();

//cors middleware to avoid cross orging issue
server.use(cors());

//inbuilt middle ware for body parser
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/", route);

//syncing all the created model so that the table coulde created

sequelize
  .sync()
  .then((result) => {
    server.listen(port, () => {
      console.log(`server is running on port http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
