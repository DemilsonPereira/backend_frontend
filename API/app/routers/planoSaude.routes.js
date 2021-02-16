module.exports = app => {
    
    const planoSaude = require('../controllers/planoSaude.controller');

    const router = require('express').Router();

    // CRIAR UM NOVO USUÁRIO
    router.post('/', planoSaude.create);

    // SELECIONAR TODOS OS MÉDICOS DO DB
    router.get('/', planoSaude.findAll);

    // SELECIONAR MÉDICO POR ID DO DB
    router.get('/:id', planoSaude.findOne);

    // ATUALIZAR OS DADOS DO MÉDICO PELO ID
    router.put('/:id', planoSaude.update);

    // REMOVER UM MÉDICO DO DB POR ID
    router.delete('/:id', planoSaude.delete);
    
    // REMOVER UM MÉDICO DO DB POR ID
    router.delete('/', planoSaude.deleteAll);

    app.use('/api/planoSaude', router);
};