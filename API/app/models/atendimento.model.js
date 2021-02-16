module.exports = (sequelize, DataTypes) => {
        const Atendimento = sequelize.define('Atendimento', {
            descricao: {
                type: DataTypes.STRING,
                allowNull: false
            },
            dataAtendimento: {
                type: DataTypes.DATE,
                allowNull: false
            }
        });

        Atendimento.associate = models => {
            Atendimento.belongsTo(models.Medico, {
                foreignjey: {
                    allowNull: false
                }
            });

            Atendimento.belongsTo(models.Paciente, {
                foreignjey: {
                    allowNull: false
                }
            });
        }

            return Atendimento;
        }