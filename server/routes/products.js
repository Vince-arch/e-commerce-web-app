import express from 'express';
import Product from '../models/Product.js';

const router = express.Router();

//Getting all products
router.get('/', async(req, res) =>{
    try{
        const products = await Product.find();
        res.json(products);
    }   catch (err) {
        res.status(500).json({message: err.message});
    }
});

//Getting a single product by ID
//to add unique id generator
router.get('/:id', async (req, res) => {
    try{
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({message:'Product not found'})
        res.json(product);
    } catch (err) {
        res.send(500).json({message: err.message})
    }
})

export default router;