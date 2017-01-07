"use strict";

let express = require('express');
let app = express();

app.use(express.static('public'));

app.listen(process.env.PORT || 8080, () => {
  console.log('Server running @ localhost:8080');
});

exports.app = app;
