const express = require('express');
const router = express.Router();
const productsModel = require('../models/productsModel');

router.post('/createProduct/:idCompany', (req, res) => {
    let product = req.body;
    product.idCompany = req.params.idCompany;
    productsModel.create(product, (err, data) => {
        if (err) return res.status(500).json({error: true, data: data});
        return res.status(201).json({error: false, data: data});
    });
});

router.put('/updateProduct/:id', (req, res) => {
    let _id = req.params.id;
    let product = req.body;
    productsModel.update({ _id }, product, (err, data) => {
        if (err) return res.status(500).json({error: true, data: err});
        return res.status(201).json({error: false, data: data});
    });
});

router.get('/getProductById/:id', (req, res) => {
    let id = req.params.id;
    productsModel.findOne({_id: id}, (err, data) => {
        if (err) return res.status(500).json({error: true, data: err});
        return res.status(201).json({error: false, data: data});
    });
});

router.get('/getAllProducts/:id', (req, res) => {
    let companyId = req.params.id;
    productsModel.find({  idCompany: companyId  }, (err, data) => {
        if (err) return res.status(500).json({error: true, data: err});
        return res.status(201).json({error: false, data: data});
    });
});

router.delete('/deleteProduct/:id', (req, res) => {
    let id = req.params.id;
    productsModel.deleteOne({_id: id}, (err, data) => {
        if(err) return res.status(500).json({error: true, data: err});
        return res.status(201).json({error: false, data: data});
    });
});

module.exports  = router;