const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.redirect("/api/whoami");
});
app.get("/api/whoami", function(req, res) {
  let headers = req.rawHeaders;
  let json = new Object;
  json.ipaddress = headers[headers.indexOf("X-Forwarded-For") + 1];
  json.language = headers[headers.indexOf("Accept-Language") + 1].substr(0, 5);
  json.software = headers[headers.indexOf("User-Agent") + 1].match(/([^(^)])+/g)[1];
  res.json(json);
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});
