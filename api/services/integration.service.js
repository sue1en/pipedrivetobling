const dealsService = require("./deals.service");
const blingService = require("./bling.service");
const jsonToXml = require("../utils/json-to-xml");
const { dealModel } = require("../models/index");

const dealDBCreate = async (deal) => {
  const newDeal = await dealModel.create({
    title:deal.title,
    client_name:deal.client_name,
    status:deal.status,
    value:deal.value,
    won_time:deal.won_time
  });

  return newDeal
}

const ordersAction = async () => {
  const hasWonDeals = await dealsService.wonDeals();
  
  if(hasWonDeals){
    let i = 0;
    while(hasWonDeals[i]){
      i++
      dealDBCreate(hasWonDeals)
      let xmlOrder = await jsonToXml(hasWonDeals);
      
      const createOrder = await blingService.newBlingOrder(xmlOrder);

      return createOrder
    };
  };
  return 
};

module.exports = {
  ordersAction
};