

// const listFromBackend = [
//   {
//     id: 1,
//     title: "...",
//     price: "...",
//     category: "...",
//     description: "...",
//     image: "...",
//     age: 12,
//   },
// ];
// const formatDataListBeforReturntodeveloper = listFromBackend.map((item) => {
//   return {
//     id: item.id,
//     title: item.title,
//     price: item.price,
//     description: item.description,
//     image: item.image,
//     age: item.age,
//   };
// });
// console.log("datathatreturnforuser", formatDataListBeforReturntodeveloper);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products?limit=25")
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data))
  //     .catch((err) => console.error(err));
  // }, []);


import { fetchProduts } from "@/utils/HomeUtil";
import { ProductType } from "../types/HomeType";
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Discount from "@/components/Discount";

const Home = () => {
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
      <Hero/>
      <Discount/>
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
           <div
           key={item.id}
           className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
         >
           <a href="#" className="group relative block overflow-hidden">
             <img
               src={item.image}
               alt=""
               className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
             />
 
             <div className="relative border border-gray-100 bg-white p-6">
               <p className="text-gray-700">
                 ${item.price}
                 <span className="text-gray-400 line-through">$80</span>
               </p>
 
               <h3 className="mt-1.5 text-lg font-medium text-gray-900">
                 {item.title}
               </h3>
 
               <p className="mt-1.5 line-clamp-3 text-gray-700">
                {item.description}
               </p>
 
               <form className="mt-4 flex gap-4">
                 <button className="block w-full rounded bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105">
                   Add to Cart
                 </button>
 
                 <button
                   type="button"
                   className="block w-full rounded bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
                 >
                   Buy Now
                 </button>
               </form>
             </div>
           </a>
         </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

