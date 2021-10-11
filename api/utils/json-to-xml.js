const { toXML } = require("jstoxml");

const jsonToXml = (pipeDealObj) => {
  const dealOrder = toXML({
    pedidos: [
      {
        pedido:pipeDealObj,
      }
    ]
  });

  return dealOrder;
};

module.exports = jsonToXml;