module.exports = (sequelize, DataTypes) => {
    const Paciente = sequelize.define("Paciente", {
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
        }
    });

    Paciente.associate = models => {
        Paciente.hasMany(models.plano, {
            onDelete: "cascade"
        });

        Paciente.hasMany(models.Atendimento, {
            onDelete: "cascade"
        });
    }

    return Paciente;
}