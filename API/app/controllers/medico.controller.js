const { medico } = require("../models");
const db = require("../models");
const Medico = db.Medico;
const Op = db.Sequelize.Op;

// Criando um novo usuário médico
exports.create = (req, res) => {
  //  Validando a requisição
  if (!req.body.nome) {
    res.status(400).send({
      messagem: "O conteúdo não pode estar vazio!"
    });
    return;
  }

  // Criando um médico
  const medico = {
    nome: req.body.nome,
    sexo: req.body.sexo,
    telefone: req.body.telefone,
    crm: req.body.crm
};

// Salvando o usuário médico na base de dados
Medico.create(medico)
  .then(dados => {
    res.send(dados);
  })
  .catch(err => {
    res.status(500).send({
      messagem:
        err.messagem || "Ocorreu algum erro ao criar o usuário  ."
    });
  });
};

// Recuperando todos os médicos no banco de dados.
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condicao = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  Medico.findAll({where: condicao})
    .then(dados => {
      res.send(dados);
    })
    .catch(err => {
      res.status(500).send({
        messagem:
          err.messagem || "Ocorreu algum erro ao recuperar os usuários."
      });
    });
};

// Recuperando usuário médico por ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Medico.findByPk(id)
    .then(dados => {
      res.send(dados);
    })
    .catch(err => {
      res.status(500).send({
        messagem: `Erro ao recuperar usuário com id = ${id}`
      });
    });
};

// Atualizar um usuário médico pelo ID na Solicitação
exports.update = (req, res) => {
  const id = req.params.id;

  Medico.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          messagem: "Usuário atualizado com sucesso."
        });
      } else {
        res.send({
          messagem:  `Não é possível atualizar o usuário com id = ${id}. Talvez o usuário não tenha sido encontrado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        messagem: `Erro ao atualizar o usuário com id = ${id}`
      });
    });
};

// Removendo um usuário médico com o ID especificado na solicitação
exports.delete = (req, res) => {
  const id = req.params.id;

  Medico.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          messagem: "Usuário removido com sucesso!"
        });
      } else {
        res.send({
          messagem: `Não é possível remover o usuário com id = ${id}. Tavez o usuário não tenha sido encontrado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        messagem: `Não foi possível remover o usuário com id = ${id}`
      });
    });
};

// Remover todos os usuários médicos do banco de dados.
exports.deleteAll = (req, res) => {
    Medico.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ messagem: `${nums} Usuários removidos com sucesso!` });
    })
    .catch(err => {
      res.status(500).send({
        messagem:
          err.messagem || "Ocorreu algum erro ao remover todos os usuários."
      });
    });
};

// Econtrado todos os usuários médicos
exports.findAllPublished = (req, res) => {
  Medico.findAll({ where: { published: true } })
    .then(dados => {
      res.send(dados);
    })
    .catch(err => {
      res.status(500).send({
        messagem:
          err.messagem || "Ocorreu algum erro ao recuperar os usuários."
      });
    });
};
