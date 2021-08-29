'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/test', (req, res)=> {
    res.json({
        name: "test name", 
        id: 1,
        email: "test@testing.com"
    })
});

app.listen(process.env.PORT || 3000, ()=> console.log("Listening on port 3000"));
