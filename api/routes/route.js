const Router = require("express").Router();
const { name, version } = require("../../package.json");

const { getAllDeals, getWonDeals, getOpenDeals } = require("../controllers/deals.controller");

Router.get("/", (req, res, next) => {
  res.send(`The ${name} running at version: ${version} >> OK <<`)
});

Router.get('/deals', getAllDeals);
Router.get('/wondeals', getWonDeals);
Router.get('/opendeals', getOpenDeals);

module.exports = Router