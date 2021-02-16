module.exports = (sequelize, DataTypes) => {
    const plano = sequelize.define('plano', {
     
    });

    plano.associate = models => {
        plano.belongsTo(models.planoSaude, {
            foreignjey: {
                allowNull: false
            }
        });
    }

    plano.associate = models => {
        plano.belongsTo(models.Paciente, {
            foreignjey: {
                allowNull: false
            }
        });
    }

    return plano;
}