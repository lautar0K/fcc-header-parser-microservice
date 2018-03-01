const express = require("express");
const app = express();

let ready = 0;

app.get("/", function (req, res) {
  res.redirect("/api/whoami").then(ready += 1);
});
app.get("/api/whoami", function(req, res) {
  if(ready == 1){
    let json = new Object;
    json.ipaddress = req.rawHeaders[23];
    json.language = req.rawHeaders[17].substr(0, 5);
    json.software = req.rawHeaders[9].match(/([^(^)])+/g)[1];
    res.json(json);
  }
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});
