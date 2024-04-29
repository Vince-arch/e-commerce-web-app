import client from '../../lib/client'; // Assuming you have a client module for fetching data
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { useShoppingCart } from '../context/ShoppingCartContext';
const ProductDetailPage = () => {
  const { slug } = useParams(); // Access the slug parameter from the URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch the product data based on the slug
        const query = `*[_type == "product" && slug.current == "${slug}"][0]{
          name,
          details,
          price,
          "imageUrls": image[].asset->url // Fetch URL of each image asset
        }`; 
        const result = await client.fetch(query);
        setProduct(result);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    fetchProduct();
  }, [slug]); // Fetch product data when slug changes

  if (!product) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  const { addItemToCart, removeItemFromCart} = useShoppingCart

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1 h-26">
          {product.imageUrls.map((imageUrl, index) => (
            <img key={index} src={imageUrl} alt={`Product ${index + 1}`} className="w-full mb-4" />
          ))}
        </div>
        <div className="col-span-1">
  <h2 className="text-3xl font-bold mb-2 text-gray-900">{product.name}</h2>
  <p className="text-lg text-gray-700 mb-4">{product.details}</p>
  <p className="text-xl font-bold text-gray-800">Price: Ksh {product.price}</p>
  <button onClick={()=>addItemToCart} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    Add to Cart
  </button>
</div>

      </div>
    </div>
  );
};

export default ProductDetailPage;
