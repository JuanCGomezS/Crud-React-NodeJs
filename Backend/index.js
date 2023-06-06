require('./config/conection');

const express = require('express');
const port = (process.env.port || 3000);

//express
const app = express();

//type data
app.use(express.json());

//config 
app.set('port', port);

//routes
app.use('/api', require('./routes'));

//start express 
app.listen(app.get('port'), (err) => {
    if (err){
        console.log('Error start server', err);
    } else {
        console.log('START SERVER IN PORT', port);
    };
});

