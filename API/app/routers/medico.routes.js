module.exports = app => {
    
    const medico = require('../controllers/medico.controller');

    const router = require('express').Router();

    // CRIAR UM NOVO USUÁRIO
    router.post('/', medico.create);

    // SELECIONAR TODOS OS MÉDICOS DO DB
    router.get('/', medico.findAll);

    // SELECIONAR MÉDICO POR ID DO DB
    router.get('/:id', medico.findOne);
    
    router.get('/:crm/atendimentos', medico.findOne);

    // ATUALIZAR OS DADOS DO MÉDICO PELO ID
    router.put('/:id', medico.update);

    // REMOVER UM MÉDICO DO DB POR ID
    router.delete('/:id', medico.delete);
    
    // REMOVER UM MÉDICO DO DB POR ID
    router.delete('/', medico.deleteAll);

    app.use('/api/medico', router);
};