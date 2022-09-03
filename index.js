// make as you wish
global.isValidError = function (error) {
  const intError = parseInt(error);
  if(!isNaN(intError) && intError >= 400 && intError <= 599) {
    return true
  }
  return false;
}

const express = require("express");
const app = express();
const port = 3000;

app.use("/", require("./routes"));

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});