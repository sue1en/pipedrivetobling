const pipedrive = require("pipedrive");
const apiKey = String(process.env.PIPEDRIVE_API_KEY);

const defaultClient = pipedrive.ApiClient.instance;
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = apiKey;

const api = new pipedrive.DealsApi();

const allDeals = async () => {
  const pipeResult = await api.getDeals();
  console.log(pipeResult)
  
  return pipeResult;
};

const wonDeals = async () => {
  const pipeResult = await api.getDeals({"status":'won'});
  return pipeResult;
};

const openDeals = async () => {
  const pipeResult = await api.getDeals({"status":'open'});
  return pipeResult;
};

module.exports = {
  allDeals,
  wonDeals,
  openDeals
};