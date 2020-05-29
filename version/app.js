const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version 3 tres of the app. la nueva mis tres reyes' + '\n';

    //send the response to the client
    console.log('abre get v3  :D');
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
