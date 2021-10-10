const { toXML } = require("jstoxml");

const jsonToXml = (pipeDealObj) => {
  const dealOrder = toXML({
    produtos: [
      {
        produto: {
          name: pipeDealObj.name,
          status: pipeDealObj.status,
        }
      }
    ]
  });

  return dealOrder;
};

module.exports = jsonToXml;