const express = require("express");
const app = express();

app.get("/api/whoami", async function(req, res) {
  let json = new Object;
  json.ipaddress = req.rawHeaders[23];
  json.language = req.rawHeaders[17].substr(0, 5);
  json.software = req.rawHeaders[9].match(/([^(^)])+/g);
  res.json(json);
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});
