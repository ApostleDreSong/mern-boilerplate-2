const express = require('express');
const index = require('./routes/index');

const app = express();

app.use('/', index);

app.listen(3000, () => console.log('listening on port 3000'));
