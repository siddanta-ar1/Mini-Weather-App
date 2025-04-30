 const userModel = (sequelize, DataTypes) => {
    const User = sequelize.define("user", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userEmail: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        userPassword: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userPhoneNumber: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
    return User; // Returning the User model
}

module.exports = userModel; // Exporting the user model for use in other files