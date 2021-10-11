const Router = require("express").Router();
const { name, version } = require("../../package.json");

const { getAllDeals, getWonDeals, getOpenDeals, pipeBlingIntegration } = require("../controllers/controllers");

Router.get("/", (req, res, next) => {
  res.send(`The ${name} running at version: ${version} >> OK <<`)
});

Router.get('/deals', getAllDeals);
Router.get('/wondeals', getWonDeals);
Router.get('/opendeals', getOpenDeals);
Router.get('/order', pipeBlingIntegration);

module.exports = Router