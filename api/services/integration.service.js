const dealsService = require("./deals.service");
const blingService = require("./bling.service");
const jsonToXml = require("../utils/json-to-xml");

const ordersAction = async () => {
  const hasWonDeals = await dealsService.wonDeals();
  
  if(hasWonDeals){
    let i = 0;
    while(hasWonDeals[i]){
      i++
      let xmlOrder = await jsonToXml(hasWonDeals);
      // console.log(xmlOrder)
      
      const createOrder = await blingService.newBlingOrder(xmlOrder);

      return createOrder
    };
  };
  return 
};

module.exports = {
  ordersAction
};