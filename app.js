const express = require('express');
const app = express();
const Port = 3000;
const router = require('./routes/index');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

app.use(router)

app.listen(Port, () => {
    console.log(`listening at port: ${Port}`)
})