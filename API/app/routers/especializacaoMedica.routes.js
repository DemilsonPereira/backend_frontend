module.exports = app => {
    
    const especializacaoMedica = require('../controllers/especializacaoMedica.controller');

    const router = require('express').Router();

    // CRIAR UM NOVO USUÁRIO
    router.post('/', especializacaoMedica.create);

    // SELECIONAR TODOS OS MÉDICOS DO DB
    router.get('/', especializacaoMedica.findAll);

    // SELECIONAR MÉDICO POR ID DO DB
    router.get('/:id', especializacaoMedica.findOne);

    // ATUALIZAR OS DADOS DO MÉDICO PELO ID
    router.put('/:id', especializacaoMedica.update);

    // REMOVER UM MÉDICO DO DB POR ID
    router.delete('/:id', especializacaoMedica.delete);
    
    // REMOVER UM MÉDICO DO DB POR ID
    router.delete('/', especializacaoMedica.deleteAll);

    app.use('/api/especializacaoMedica', router);
};