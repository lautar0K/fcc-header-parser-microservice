const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.redirect("/api/whoami");
});
app.get("/api/whoami", function(req, res) {
  let json = new Object;
  let headers = req.rawHeaders;
  json.ipaddress = headers[23];
  json.language = headers[17].substr(0, 5);
  json.software = headers[9].match(/([^(^)])+/g)[1];
  res.setTimeOut(1000, function() {
    res.json(json);
  })
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});
