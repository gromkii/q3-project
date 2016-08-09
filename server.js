// --- Using this for API --- //

const express = require('express'),
      app     = express(),
      bodyParser = require('body-parser'),
      methodOverride = require('method-override');
app.use(bodyParser.json())
  .use(bodyParser.encodeurl({extend:false}))
  .use(methodOverride('_method'))
  .use('/api/v1', api);

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is listening.');
})
