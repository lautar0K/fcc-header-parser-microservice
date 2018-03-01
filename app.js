const express = require("express");
const app = express();

app.get("/", function (req, res) {
  setTimeout(res.redirect("/api/whoami"), 30000);
});
app.get("/api/whoami", function(req, res) {
  console.log(req.rawHeaders);
  let json = new Object;
  let headers = req.rawHeaders;
  json.ipaddress = headers[23];
  json.language = headers[17].substr(0, 5);
  json.software = headers[9].match(/([^(^)])+/g)[1];
  res.json(json);
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});
