import React from "react";


const products = [
  { id: 1, title: "Laptop", description: "High performance laptop", price: "$1200", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 2, title: "Smartphone", description: "Latest model smartphone", price: "$899", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80" },
  { id: 3, title: "Headphones", description: "Noise-cancelling headphones", price: "$199", image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80" },
  { id: 4, title: "Smart Watch", description: "Fitness smart watch", price: "$299", image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80" },
  { id: 5, title: "Camera", description: "Digital SLR camera", price: "$1500", image: "https://images.unsplash.com/photo-1519183071298-a2962e0b25b2?auto=format&fit=crop&w=400&q=80" },
  { id: 6, title: "Keyboard", description: "Mechanical keyboard", price: "$99", image: "https://images.unsplash.com/photo-1587829741301-dc798b82b1e0?auto=format&fit=crop&w=400&q=80" },
  { id: 7, title: "Mouse", description: "Wireless mouse", price: "$49", image: "https://images.unsplash.com/photo-1587829741301-dc798b82b1e0?auto=format&fit=crop&w=400&q=80" },
  { id: 8, title: "Tablet", description: "High-resolution tablet", price: "$499", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80" },
  { id: 9, title: "Speaker", description: "Bluetooth speaker", price: "$149", image: "https://images.unsplash.com/photo-1581291518830-3e86b2aa93c1?auto=format&fit=crop&w=400&q=80" },
  { id: 10, title: "Monitor", description: "4K LED monitor", price: "$399", image: "https://images.unsplash.com/photo-1587829741301-dc798b82b1e0?auto=format&fit=crop&w=400&q=80" }
];

const Product = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-6">Our Products</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg p-4 hover:shadow-2xl transition flex flex-col items-center"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-48 h-48 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-semibold mb-1">{product.title}</h2>
            <p className="text-gray-700 text-center mb-2">{product.description}</p>
            <p className="text-lg font-bold mb-4">{product.price}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
