const express = require('express');
app = express();

var response;

app.get('/', function (req, res) {

    response = 'This is version 2 of the app. la nueva mi rey' + '\n';

    //send the response to the client
    console.log('abre get');
    res.send(response);

});

app.listen(8080, function () {
  console.log('Server listening on port 8080...');
});
