const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 3001;

let historyList = [];

app.get("/historyList", (req, res) => {
  res.json(historyList);
});

app.delete("/historyList", (req, res) => {
  historyList = []
  res.send('done');
});

app.get("/nameInfo/:name", async (req, res) => {
  const name = req.params.name;
  const data = await axios.get(`https://api.genderize.io/?name=${name}`).then((res) => res.data);
  const countries = await axios.get(`https://api.nationalize.io/?name=${name}`).then((res) => res.data.country);
  data.countries = countries;
  data.id = _makeId();
  historyList.unshift(data);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

function _makeId(length = 5) {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
