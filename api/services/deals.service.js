const pipedrive = require("pipedrive");
const apiKey = String(process.env.PIPEDRIVE_API_KEY);

const defaultClient = pipedrive.ApiClient.instance;
let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = apiKey;

const api = new pipedrive.DealsApi();

const filterDeals = (data) => {
  for(let i = 0; i < data.data.length; i++){
    return "__XX123__", data.data[i]
  }
};

const allDeals = async () => {
  const pipeResult = await api.getDeals();
  return pipeResult.data
};

const wonDeals = async () => {
  const pipeResult = await api.getDeals({"status":'won'});
  return pipeResult.data;
};

const openDeals = async () => {
  const pipeResult = await api.getDeals({"status":'open'});
  return pipeResult.data;
};

module.exports = {
  allDeals,
  wonDeals,
  openDeals
};