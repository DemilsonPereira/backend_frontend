module.exports = app => {
    
    const especializacao = require('../controllers/especializacao.controller');

    const router = require('express').Router();

    // CRIAR UM NOVO USUÁRIO
    router.post('/', especializacao.create);

    // SELECIONAR TODOS OS MÉDICOS DO DB
    router.get('/', especializacao.findAll);

    // SELECIONAR MÉDICO POR ID DO DB
    router.get('/:id', especializacao.findOne);

    // ATUALIZAR OS DADOS DO MÉDICO PELO ID
    router.put('/:id', especializacao.update);

    // REMOVER UM MÉDICO DO DB POR ID
    router.delete('/:id', especializacao.delete);
    
    // REMOVER UM MÉDICO DO DB POR ID
    router.delete('/', especializacao.deleteAll);

    app.use('/api/especializacao', router);
};