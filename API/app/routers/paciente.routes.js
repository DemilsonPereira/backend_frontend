module.exports = app => {
    
    const paciente = require('../controllers/paciente.controller');

    const router = require('express').Router();

    // CRIAR UM NOVO USUÁRIO
    router.post('/', paciente.create);

    // SELECIONAR TODOS OS MÉDICOS DO DB
    router.get('/', paciente.findAll);

    // SELECIONAR MÉDICO POR ID DO DB
    router.get('/:id', paciente.findOne);

    // ATUALIZAR OS DADOS DO MÉDICO PELO ID
    router.put('/:id', paciente.update);

    // REMOVER UM MÉDICO DO DB POR ID
    router.delete('/:id', paciente.delete);
    
    // REMOVER UM MÉDICO DO DB POR ID
    router.delete('/', paciente.deleteAll);

    app.use('/api/paciente', router);
};