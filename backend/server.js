import express from "express";
const port = 5000;

const app = express();

app.get('/', (req, res)=>{
    res.send('API is nunning...');
});

app.listen(port, () => console.log(`Server runing on port ${port}`))