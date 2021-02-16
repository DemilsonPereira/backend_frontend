module.exports = (sequelize, DataTypes) => {
    const especializacao = sequelize.define('especializacao', {
     
    });

    especializacao.associate = models => {
        especializacao.belongsTo(models.Medico, {
            foreignjey: {
                allowNull: false
            }
        });
    }

    especializacao.associate = models => {
        especializacao.belongsTo(models.especializacaoMedica, {
            foreignjey: {
                allowNull: false
            }
        });
    }

    return especializacao;
}