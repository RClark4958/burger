var orm = require("../config/orm");

module.exports = {
  getBurgerList: (callback) => orm.selectAll("burgers_db.burgers", callback),
  insertBurger: (burgerName, callback) => orm.insertOne(
    "burgers_db.burgers",
    {
      burger_name: burgerName,
      devoured: false
    },
    callback
  ),
  updateBurger: (burgerId, callback) => {
    orm.updateOne(
      "burgers_db.burgers",
      { devoured: true },
      { id: burgerId },
      callback
    );
  }
}