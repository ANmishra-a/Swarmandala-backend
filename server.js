const express = require("express");
const { sequelize } = require("./models");
// const { Model } = require("sequelize");
const cors = require("cors");
const app = express();
app.use(cors());
const PORT = 5678;

app.get("/", async (req, res) => {
  const getAllArtistData = async (tableName) => {
    try {
      const sql = `SELECT * FROM ${tableName}`;
      return await sequelize.query(sql, {
        type: sequelize.QueryTypes.SELECT,
      });
    } catch (error) {
      throw error;
    }
  };
  const data = await getAllArtistData("artists");
  res.send(data);
});
app.listen(PORT, () => {
  console.log(`Swarmandala App is listening on port ${PORT}`);
});
