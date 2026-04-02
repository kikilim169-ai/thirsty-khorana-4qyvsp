import React from "react";

export default function KVoidWebsite() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <h1 className="text-2xl font-bold tracking-widest">K-VOID</h1>
        <div className="space-x-6">
          <a href="#" className="hover:text-gray-400">
            Home
          </a>
          <a href="#" className="hover:text-gray-400">
            Shop
          </a>
          <a href="#" className="hover:text-gray-400">
            About
          </a>
          <a href="#" className="hover:text-gray-400">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-extrabold mb-4">TRAIN IN THE VOID</h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          High-performance gym wear designed for strength, comfort, and style.
        </p>
        <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-300">
          Shop Now
        </button>
      </section>

      {/* Products */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 pb-20">
        {[
          { name: "Compression Tee", price: "RM89" },
          { name: "Gym Shorts", price: "RM79" },
          { name: "Oversized Hoodie", price: "RM129" },
        ].map((item, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-2xl shadow-lg">
            <div className="h-40 bg-gray-800 rounded-xl mb-4"></div>
            <h3 className="text-xl font-semibold">{item.name}</h3>
            <p className="text-gray-400">{item.price}</p>
            <button className="mt-4 w-full bg-white text-black py-2 rounded-lg hover:bg-gray-300">
              Buy Now
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-800 text-gray-500">
        © 2026 K-VOID. All rights reserved.
      </footer>
    </div>
  );
}
