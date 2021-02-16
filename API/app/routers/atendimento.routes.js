module.exports = app => {
    
    const atendimento = require('../controllers/atendimento.controller');

    const router = require('express').Router();

    // CRIAR UM NOVO USUÁRIO
    router.post('/', atendimento.create);

    // SELECIONAR TODOS OS MÉDICOS DO DB
    router.get('/', atendimento.findAll);

    // SELECIONAR MÉDICO POR ID DO DB
    router.get('/:id', atendimento.findOne);

    // ATUALIZAR OS DADOS DO MÉDICO PELO ID
    router.put('/:id', atendimento.update);

    // REMOVER UM MÉDICO DO DB POR ID
    router.delete('/:id', atendimento.delete);
    
    // REMOVER UM MÉDICO DO DB POR ID
    router.delete('/', atendimento.deleteAll);

    app.use('/api/atendimento', router);
};