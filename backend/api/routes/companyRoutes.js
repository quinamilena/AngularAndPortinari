const express = require('express');
const router = express.Router();
const companyModel = require('../models/companyModel');
const productsModel = require('../models/productsModel');

router.post('/createCompany',(req, res) => {
    let company = req.body;
    companyModel.create(company, (err, data) => {
        if(err) return res.status(500).json({error: err, data: err});
        return res.status(201).json({error: false, data: data});
    });
});

router.put('/updateCompany/:id', (req, res) => {
    let _id = req.params.id;
    let company = req.body;
    companyModel.update({_id}, company, (err, data) => {
        if (err) return res.status(500).json({error: true, data: err});
        return res.status(201).json({error: false, data: data});
    });
});

router.get('/getCompanyById/:id', (req, res) => {
    let _id = req.params.id;
    companyModel.findOne({_id}, (err, data) => {
        if(err) return res.status(500).json({error: true, data: err});
        return res.status(201).json({error: false, data: data});
    });
});

router.get('/getAllCompany', (req, res) => {
    companyModel.find({}, (err, data) => {
        if (err) return res.status(500).json({error: true, data: err});
        return res.status(201).json({error: false, data: data});
    });
});

router.delete('/deleteCompany/:id', (req, res) => {
    let id = req.params.id;
    companyModel.deleteOne({_id: id}, (err, data) => {
        if(err) return res.status(500).json({error: true, data: err});
        productsModel.deleteMany({ idCompany: id }, (errProducts, dataProducts) => {
            if (errProducts) return res.status(500).json({error: errProducts, data: errProducts});
            return res.status(201).json({error: false, data: data});
        });
    });
});

module.exports = router;