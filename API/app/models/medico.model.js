module.exports = (sequelize, DataTypes) => {
    const Medico = sequelize.define("Medico", {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sexo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: false
        },
        crm: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Medico.associate = models => {
        Medico.hasMany(models.especializacao, {
            onDelete: "cascade"
        });

        Medico.hasMany(models.Atendimento, {
            onDelete: "cascade"
        });
       
}

return Medico;
}