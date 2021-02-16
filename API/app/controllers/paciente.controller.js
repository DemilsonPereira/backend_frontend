const { paciente } = require("../models");
const db = require("../models");
const Paciente = db.Paciente;
const Op = db.Sequelize.Op;

// Criando um novo usuário paciente
exports.create = (req, res) => {
  // Validando a requisição
  if (!req.body.nome) {
    res.status(400).send({
      messagem: "O conteúdo não pode estar vazio!"
    });
    return;
  }

  // Criando um usuário
  const paciente = {
    nome: req.body.nome,
    sexo: req.body.sexo,
    telefone: req.body.telefone,
    crm: req.body.crm
};

// Salvando o usuário paciente na base de dados
Paciente.create(paciente)
  .then(dados => {
    res.send(dados);
  })
  .catch(err => {
    res.status(500).send({
      messagem:
        err.messagem || "Ocorreu algum erro ao criar o usuário."
    });
  });
};

// Recuperando todos os pacientes no banco de dados.
exports.findAll = (req, res) => {
  const nome = req.query.nome;
  var condicao = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  Paciente.findAll({ where: condicao })
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

// Recuperando usuário paciente por ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Paciente.findByPk(id)
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

  Paciente.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          messagem: "Usuário atualizado com sucesso."
        });
      } else {
        res.send({
          messagem: `Não é possível atualizar o usuário com id = ${id}. Talvez o usuário não tenha sido encontrado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        messagem:  `Erro ao atualizar o usuário com id = ${id}`
      });
    });
};

// Removendo um usuário paciente com o ID especificado na solicitação
exports.delete = (req, res) => {
  const id = req.params.id;

  Paciente.destroy({
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

// Remover todos os usuários pacientes do banco de dados.
exports.deleteAll = (req, res) => {
    Paciente.destroy({
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

// Econtrado todos os usuários pacientes
exports.findAllPublished = (req, res) => {
    Paciente.findAll({ where: { published: true } })
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
