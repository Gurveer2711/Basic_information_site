const express = require('express');
const app = express();

const path = require('path');


app.use(express.static('public'));



app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
});
app.get('/about',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/about.html'));
});
app.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname+'/public/contact.html'));
});
app.use((req,res)=>{
    res.status(404).sendFile(path.join(__dirname+'/public/404.html'));
});

app.listen(8080);


