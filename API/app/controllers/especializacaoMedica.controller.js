const db = require("../models");
const especializacaoMedica = db.especializacaoMedica;
const Op = db.Sequelize.Op;

// Criando uma nova especialização
exports.create = (req, res) => {
  // Validando a requisição
  if (!req.body.nome) {
    res.status(400).send({
      messagem: "O conteúdo não pode estar vazio!"
    });
    return;
  }

  // Criando especialização
  const especializacao = {
    nome: req.body.nome
};

// Salvando a especialização na base de dados
especializacaoMedica.create(especializacao)
  .then(dados => {
    res.send(dados);
  })
  .catch(err => {
    res.status(500).send({
      messagem:
        err.messagem || "Ocorreu algum erro ao criar a especialização médica."
    });
  });
};

// Recuperando todas as especializações no banco de dados.
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condicao = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  especializacaoMedica.findAll({ where: condicao })
    .then(dados => {
      res.send(dados);
    })
    .catch(err => {
      res.status(500).send({
        messagem:
          err.messagem || "Ocorreu algum erro ao recuperar as especializações médicas."
      });
    });
};

// Recuperando especializações por ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  especializacaoMedica.findByPk(id)
    .then(dados => {
      res.send(dados);
    })
    .catch(err => {
      res.status(500).send({
        messagem: "Erro ao recuperar especialização médica com id=" + id
      });
    });
};

// Atualizar uma Epecialização pelo ID na Solicitação
exports.update = (req, res) => {
  const id = req.params.id;

  especializacaoMedica.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          messagem: "Especialização médica atualizada com sucesso."
        });
      } else {
        res.send({
          messagem: `Não é possível atualizar a especialização médica com id = ${id}. Talvez a especialização não tenha sido encontrado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        messagem: "Erro ao atualizar especialização médica com id=" + id
      });
    });
};

// Removendo uma Epecialização com o ID especificado na solicitação
exports.delete = (req, res) => {
  const id = req.params.id;

  especializacaoMedica.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          messagem: "Especialização removida com sucesso!"
        });
      } else {
        res.send({
          messagem: `Não é possível remover a especialização médica com id = ${id}. Tavez a especialização médica não tenha sido encontrada!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        messagem: "Não foi possível remover a especialização médica com id=" + id
      });
    });
};

// Remover todas as Especializações do banco de dados.
exports.deleteAll = (req, res) => {
    especializacaoMedica.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ messagem: `${nums} Especializações médicas removidas com sucesso!` });
    })
    .catch(err => {
      res.status(500).send({
        messagem:
          err.messagem || "Ocorreu algum erro ao remover todas as especializações médicas."
      });
    });
};

// Encontrando todas as Especializações Médicas
exports.findAllPublished = (req, res) => {
    especializacaoMedica.findAll({ where: { published: true } })
    .then(dados => {
      res.send(dados);
    })
    .catch(err => {
      res.status(500).send({
        messagem:
          err.messagem || "Ocorreu algum erro ao recuperar as especializações médicas."
      });
    });
};
