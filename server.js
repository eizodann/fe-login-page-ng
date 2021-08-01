const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/fe-login-page-ng'));

app.get('/*', (req,res,next) => {
    res.sendFile(path.join(__dirname + '/dist/fe-login-page-ng/index.html'));
});


app.listen(process.env.PORT || 8080, () => {
    console.log(`App running on port 8080.`);
  });