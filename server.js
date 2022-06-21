const express = require("express");
const app = express();
const port = 3001;

app.get("/nameInfo/:name", async (req, res) => {
  const name = req.params.name;
  await axios
    .get(`https://api.genderize.io/?name=${name}`)
    .then((res) => res.data)
    .then((res) => console.log("res", res));
  res.json(name);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
