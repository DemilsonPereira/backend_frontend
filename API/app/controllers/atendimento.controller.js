const db = require("../models");
const Atendimento = db.Atendimento;
const Op = db.Sequelize.Op;

// Criando um novo atendimento
exports.create = (req, res) => {
    // Validando a requisição
    if (!req.body.descricao) {
      res.status(400).send({
        messagem: "O conteúdo não pode estar vazio!"
      });
      return;
    }
  
    // Criando um atendimento
    const atendimento = {
      descricao: req.body.descricao,
      dataAtendimento: req.body.dataAtendimento,
      PacienteId: req.body.PacienteId,
      MedicoId: req.body.MedicoId
  };
  
  // Salvando o atendimento na base de dados
  Atendimento.create(atendimento)
    .then(dados => {
      res.send(dados);
    })
    .catch(err => {
      res.status(500).send({
        messagem:
          err.messagem || "Ocorreu algum erro ao criar o atendimento."
      });
    });
  };

// Recuperando todos os atendimento no banco de dados.
exports.findAll = (req, res) => {
  // const nome = req.query.nome;
  // var condicao = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;

  Atendimento.findAll({ 
    include: [db.Medico, db.Paciente]
   }).then(atendimento => res.send(atendimento));
};

//  Recuperando atendimento por ID
exports.findOne = (req, res) => {
  const id = req.params.id;

  Atendimento.findByPk(id)
    .then(dados => {
      res.send(dados);
    })
    .catch(err => {
      res.status(500).send({
        messagem: `Erro ao recuperar atedimento com id = ${id}`
      });
    });
};

// Atualizar um Atendimento pelo ID na Solicitação
exports.update = (req, res) => {
  const id = req.params.id;

  Atendimento.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          messagem: "Atendimento atualizado com sucesso."
        });
      } else {
        res.send({
          messagem: `Não é possível atualizar o atendimento com id = ${id}. Talvez o atendimento não tenha sido encontrado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        messagem: `Erro ao atualizar o atendimento com id = ${id}`
      });
    });
};

// Removendo um atendimento com o ID especificado na solicitação
exports.delete = (req, res) => {
  const id = req.params.id;

  Atendimento.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          messagem: "Atendimento removido com sucesso!"
        });
      } else {
        res.send({
          messagem: `Não é possível remover o atendimento com id = ${id}. Tavez o atendimento não tenha sido encontrado!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        messagem: `Não foi possível remover o atendimento com id = ${id}`
      });
    });
};

// Remover todos os atendimento do banco de dados.
exports.deleteAll = (req, res) => {
    Atendimento.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ messagem: `${nums} Atendimentos removidos com sucesso!` });
    })
    .catch(err => {
      res.status(500).send({
        messagem:
          err.messagem || "Ocorreu algum erro ao remover todos os atendimento."
      });
    });
};

// Econtrado todos os Atendimentos
exports.findAllPublished = (req, res) => {
    Atendimento.findAll({ where: { published: true } })
    .then(dados => {
      res.send(dados);
    })
    .catch(err => {
      res.status(500).send({
        messagem:
          err.messagem || "Ocorreu algum erro ao recuperar os atendimentos."
      });
    });
};
