import { ProductType } from "@/types/HomeType";
import { fetchProduts } from "@/utils/HomeUtil";
import { useEffect, useState } from "react";


const Pricing = () => {
   const [products, setProducts] = useState<ProductType[]>([]);
  
     const getProduct = async () => {
      const data = await fetchProduts("https://fakestoreapi.com/products");
      setProducts(data);
    }
    console.log(products)
    
    useEffect(() => {
      getProduct();
    }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Product Price</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h2>
              <p className="text-gray-600 text-sm mb-2">
                <strong>Category:</strong> {item.category}
              </p>
              <p className="text-gray-900 font-bold mb-2">${item.price.toFixed(2)}</p>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing