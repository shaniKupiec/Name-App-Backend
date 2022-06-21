const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 3001;

app.get("/nameInfo/:name", async (req, res) => {
  const name = req.params.name;
  // const data = await axios.get(`https://api.genderize.io/?name=${name}`).then((res) => res.data);
  // const countries = await axios.get(`https://api.nationalize.io/?name=${name}`).then((res) => res.data.country);
  // data.countries = countries;
  const data = {
    name: "shani",
    gender: "male",
    probability: 0.63,
    count: 1254,
    countries: [
      {
        country_id: "PK",
        probability: 0.5582731025528594,
      },
      {
        country_id: "IL",
        probability: 0.31766114029808673,
      },
      {
        country_id: "ZA",
        probability: 0.0329416287614195,
      },
    ],
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
