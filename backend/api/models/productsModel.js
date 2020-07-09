const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    code: String,
    idCompany: String,
    available: String,
    nameAuthor: String
}, {versionKey: false});

const ProdutosModel = mongoose.model('produtosmodel', productSchema);

module.exports = ProdutosModel;