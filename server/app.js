const express = require('express');
const fs = require('fs');
const path = require('path');
const morgan = require('morgan');
const index = require('./routes/index');

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'logs/access.log'), { flags: 'a' });

app.use(morgan('combined', { stream: accessLogStream }));
app.use('/', index);

app.listen(3000, () => console.log('listening on port 3000'));
