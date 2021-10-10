const { allDeals, wonDeals, openDeals } = require("../services/deals.service")

module.exports = {
  getAllDeals: async (req, res, next) => {
    const serverceResult = await allDeals();
    res.send(serverceResult.data)
  },

  getWonDeals: async (req, res, next) => {
    const serverceResult = await wonDeals();
    res.send(serverceResult.data)
  },
  
  getOpenDeals: async (req, res, next) => {
    const serverceResult = await openDeals();
    res.send(serverceResult.data)
  }
};