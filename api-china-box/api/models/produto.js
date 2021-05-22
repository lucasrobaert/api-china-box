const mongoose =  require('mongoose');

var Produto = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            index: true
        },
        preco: {
            type: Number,
            require: true
        },
        descricao: {
            type: String,
        },
        imagem: {
            type: String
        },
        imagem: {
            type: Boolean,
            require: true,
            default: true
        }
        
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Produtos", Produto);