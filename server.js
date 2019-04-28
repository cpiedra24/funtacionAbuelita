//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/FundacionTCU'));

app.get('*', function(req,res) {
  // Replace the '/dist/<to_your_project_name>/index.html'
  res.sendFile(path.join(__dirname+ '/dist/FundacionTCU/index.html'));
});
// Start the app by listening on the default Heroku port
var listener = app.listen(process.env.PORT || 8080, function(){
    console.log('Listening on port ' + listener.address().port);
});