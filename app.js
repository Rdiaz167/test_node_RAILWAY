const express = require('express');
const app = express();
const PORT = 3077;

app.get('/', (req, res)=>{
    res.send('Inicio');
});
app.get('/*', (req, res)=>{
    res.send('Welcome');
})

app.listen(PORT, ()=>{
    console.log('Server runnig on port:', PORT)
})