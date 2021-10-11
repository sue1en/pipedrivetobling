const { allDeals, wonDeals, openDeals } = require("../services/deals.service");
const { ordersAction } = require("../services/integration.service")

module.exports = {
  getAllDeals: async (req, res, next) => {
    const serverceResult = await allDeals();
    res.send(serverceResult)
  },

  getWonDeals: async (req, res, next) => {
    const serverceResult = await wonDeals();
    res.send(serverceResult)
  },
  
  getOpenDeals: async (req, res, next) => {
    const serverceResult = await openDeals();
    res.send(serverceResult)
  },

  pipeBlingIntegration: async (req, res, next) => {
    const serverceResult = await ordersAction();
    res.send(serverceResult)
  }
};