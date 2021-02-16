module.exports = (sequelize, DataTypes) => {
    const especializacaoMedica = sequelize.define('especializacaoMedica', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    especializacaoMedica.associate = models => {
        especializacaoMedica.hasMany(models.especializacao, {
            onDelete: "cascade"
        });
    }

    

    return especializacaoMedica;
}