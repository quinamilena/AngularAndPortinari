const mongoose = require('mongoose');

const companySchema =  new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    cnpj: String,
    image: String
},  {versionKey: false});

const EmpresaModel = mongoose.model('empresamodel', companySchema);

module.exports = EmpresaModel;