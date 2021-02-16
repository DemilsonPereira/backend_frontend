const express = require('express');
const bodyParser = require('body-parser');
const db = require('./app/models');
const cors = require('cors');

const app = express();

app.use(cors({
    origin: 'http://localhost:4200',
    methods: 'GET, PUT, POST'
}));


db.sequelize.sync();
  
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

//ROTAS
app.get('/', (req, res) => {
    res.json({mensagem: "Bem vido a API Rest"});
});

require('./app/routers/medico.routes')(app);

require('./app/routers/paciente.routes')(app);

require('./app/routers/especializacaoMedica.routes')(app);

require('./app/routers/planoSaude.routes')(app);

require('./app/routers/atendimento.routes')(app);

require('./app/routers/especializacao.routes')(app);



//PORTA
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta: ${PORT}`);
});


