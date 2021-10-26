//Criando o Server para hospedar o arquivo

const express = require('express');
const bodyParser = require('body-parser');
const connection = require('./models/db');

const app = express();

//Parse Requests of content-type: aplication/json (Setando o JSON como request)
app.use(bodyParser.json());

//Parse Requests of content-type: aplication/x-www-form-urlencoded (Utilizando o Urlencoded)
app.use(bodyParser.urlencoded({extended:true}));

//Simple Route (Rota simples)
app.get('/', (req,res) => {
    res.json({message: 'Welcome to EduardoAndretta application'})

});

require("./routes/customer.routes")(app);

//Set port, listen for requests (Setando o port e habilitando as demandas)
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});