const express = require('express');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    return res.send("hello");
})


app.listen(3333, ()=>{
    console.log('server running...');
})