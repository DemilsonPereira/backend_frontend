const db = require("../models");
const planoSaude = db.planoSaude;
const Op = db.Sequelize.Op;

// Criando um novo plano de saúde
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nome) {
    res.status(400).send({
      messagem: "O conteúdo não pode estar vazio!"
    });
    return;
  }

  // Criando um plano de saúde
  const planosaude = {
    nome: req.body.nome,
    PacienteId: req.body.PacienteId
};

// Salvando o plano de saúde na base de dados
planoSaude.create(planosaude)
  .then(dados => {
    res.send(dados);
  })
  .catch(err => {
    res.status(500).send({
      messagem:
        err.messagem || "Ocorreu algum erro ao criar o plano de saúde."
    });
  });
};

// Recuperando todos os planos de saúde no banco de dados.
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condicao = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  planoSaude.findAll({ where: condicao })
    .then(dados => {
      res.send(dados);
    })
    .catch(err => {
      res.status(500).send({
        messagem:
          err.messagem || "Ocorreu algum erro ao recuperar os planos de saúde."
      });
    });
};

// Recuperando plano de saúde por ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  planoSaude.findByPk(id)
    .then(dados => {
      res.send(dados);
    })
    .catch(err => {
      res.status(500).send({
        messagem: `Erro ao recuperar atedimento com id = ${id}`
      });
    });
};

// Atualizar um plano de saúde pelo ID na Solicitação
exports.update = (req, res) => {
  const id = req.params.id;

  planoSaude.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          messagem: "Plano de saúde atualizado com sucesso."
        });
      } else {
        res.send({
          messagem: `Não é possível atualizar o plano de saúde com id = ${id}. Talvez o plano de saúde não tenha sido encontrado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        messagem: `Erro ao atualizar o plano de saúde com id = ${id}`
      });
    });
};

//  Removendo um plano de saúde com o ID especificado na solicitação
exports.delete = (req, res) => {
  const id = req.params.id;

  planoSaude.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          messagem: "Plano de saúde removido com sucesso!"
        });
      } else {
        res.send({
          messagem: `Não é possível remover o plano de saúde com id = ${id}. Tavez o plano de saúde não tenha sido encontrado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        messagem: `Não foi possível remover o plano de saúde com id = ${id}`
      });
    });
};

// Remover todos os plano de saúde do banco de dados.
exports.deleteAll = (req, res) => {
  planoSaude.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ messagem: `${nums} Planos de saúde removidos com sucesso!` });
    })
    .catch(err => {
      res.status(500).send({
        messagem:
          err.messagem || "Ocorreu algum erro ao remover todos os planos de saúde."
      });
    });
};

// Econtrado todos os Atendimentos
exports.findAllPublished = (req, res) => {
  planoSaude.findAll({ where: { published: true } })
    .then(dados => {
      res.send(dados);
    })
    .catch(err => {
      res.status(500).send({
        messagem:
          err.messagem || "Ocorreu algum erro ao recuperar os planos de saúde."
      });
    });
};
