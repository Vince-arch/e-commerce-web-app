import mongoose from mongoose;

const productSchema = new mongoose.Schema({
    name: {type: String, required:true},
    price: {type: Number, required:true},
    description: {type: String, required:true},
    category: {type: String, required:true},
    image:{type: String, required: true}
});

//creating and exporting the model
const Product = mongoose.model('product', productSchema);

export default Product;