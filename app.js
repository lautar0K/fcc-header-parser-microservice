const express = require("express");
const app = express();

app.get("/", function (req, res) {
  setTimeout(res.redirect("/api/whoami"), 30000);
});
app.get("/api/whoami", function(req, res) {
  console.log(req.rawHeaders);
  let json = new Object;
  json.ipaddress = rawHeaders[rawHeaders.indexOf("X-Forwarded-For") + 1];
  json.language = rawHeaders[rawHeaders.indexOf("Accept-Language") + 1].substr(0, 5);
  json.software = rawHeaders[rawHeaders.indexOf("User-Agent") + 1].match(/([^(^)])+/g)[1];
  res.json(json);
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});
