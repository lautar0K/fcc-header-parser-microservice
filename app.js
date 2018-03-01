const express = require("express");
const app = express();

app.get("/api/whoami", async function(req, res) {
  console.log(req.params);
  res.end();
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});
