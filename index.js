const express = require("express");
const pipedrive = require("pipedrive");
const cors = require("cors");
require('dotenv').config()
const { name, version } = require("./package.json")
const port = process.env.PORT ? Number(process.env.PORT) : 3333;

const apiKey = String(process.env.PIPEDRIVE_API_KEY)

const app = express();
app.use(cors());
app.use(express.json());

const defaultClient = pipedrive.ApiClient.instance;

let apiToken = defaultClient.authentications.api_key;
apiToken.apiKey = apiKey;

// app.get('/', async (req, res) => {
//     const api = new pipedrive.DealsApi();
//     const deals = await api.getDeals();

//     res.send(deals);
// });
// app.get('/', async (req, res) => {
//     const api = new pipedrive.DealsApi();
//     const deals = await api.getDeals({"status":'won'});

//     res.send(deals);
// });
app.get('/', async (req, res) => {
    const api = new pipedrive.DealsApi();
    const deals = await api.getDeals({"status":'open'});

    res.send(deals);
});


app.listen(
  port,
  () => console.log(
      `The server is running at the port http://localhost:${port} \nProject Name: ${name}, Version: ${version}`
    )
);