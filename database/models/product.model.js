 const ProductModel = (sequelize, DataTypes) => {
    const Product = sequelize.define("product", {
        productName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productPrice: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        productDescription: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Unknown"
        },
        productCategory: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Unknown"
        },
    })
    return Product;
}
module.exports = ProductModel; // Exporting the product model for use in other files
