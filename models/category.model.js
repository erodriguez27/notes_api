const { DataTypes } = require("sequelize");

const { sequelize } = require("../clients/database");

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  {}
);

(async () => {
  await Category.sync();
})();

module.exports = { Category };
