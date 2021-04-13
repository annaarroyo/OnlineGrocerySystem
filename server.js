const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'client/build')));

if(process.env.NODE_ENV === 'production') {  
  app.use(express.static(path.join(__dirname, 'client/build')));  
  app.get('*', (req, res) => {    
    res.sendFile(path.join(__dirname = 'client/build/index.html'));  }
  )
}

app.get('/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('*', (req, res) => {  
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
})

app.listen(port, (req, res) => {  console.log( `Server listening on port: ${port}`);})

