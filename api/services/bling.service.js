const blingApi = "https://bling.com.br/Api/v2/pedido/json/";
const axios = require("axios");
const blingKey = process.env.BLING_API_KEY;

const newBlingOrder = async (pipeXmlOrder) => {
  try{
    const newOrder = await axios({
      method:'post',
      url:blingApi,
      params:{
        apikey: blingKey,
      },
      data:{
        xml: pipeXmlOrder
      }
    });
    return newOrder

  }catch(error){
    console.log("___ERROR___###", error)
  }
};

module.exports = {
  newBlingOrder
}