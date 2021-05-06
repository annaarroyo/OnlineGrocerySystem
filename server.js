const express = require('express');
const dbConnection = require('./database/connect')
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use(express.static(path.join(__dirname, "client", "build")));

const loginRouter = require('./routes/loginRouter');
app.use('/login', loginRouter);

const productRouter = require('./routes/productRouter');
app.use('/products', productRouter);

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('*', (req, res) => {    
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));  
});


app.listen(port, (req, res) => {  
  dbConnection;
  console.log( `Server listening on port: ${port}`);
});

