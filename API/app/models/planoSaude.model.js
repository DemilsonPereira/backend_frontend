module.exports = (sequelize, DataTypes) => {
    const planoSaude = sequelize.define('planoSaude', {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    planoSaude.associate = models => {
        planoSaude.hasMany(models.plano, {
            onDelete: "cascade"
        });
    }

    return planoSaude;
}