const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.end(req.params);
});
app.listen(process.env.PORT || 3000, function() {
  console.log("Listening on port ", this.address().port, app.settings.env)
});
