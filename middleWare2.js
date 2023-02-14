const { request } = require('express');
const express = require('express');
const reqFilter = require('./middlewares'); //middlewere ki alag file kyuki middleware bohoth sare ho sakte he
const app = express();
const route =express.Router();


// app.use(reqFilter);
route.use(reqFilter);
app.get('/', (req, resp) => {
    resp.send('welcome to home page')
});

app.get('/users', /*reqFilter,*/ (req, resp) => {
    resp.send('welcome to user page')
});

app.get('/profile', /*reqFilter,*/ (req, resp) => {    // specific page me condition lagane ke liye reqfilter 
    resp.send('welcome to profile page')            //  parameter me hi laga do app.reqfilter hata ke
});

route.get('/contact',(req,resp)=> {
    resp.send('welcome to contanct page')
});

app.use('/',route)



app.listen(2910);