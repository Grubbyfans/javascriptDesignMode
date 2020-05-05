const express = require('express')
const app = express();
const port = 3000;

require('./mvvm模式/01')

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
