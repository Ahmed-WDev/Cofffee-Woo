import React from 'react';

const Order = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Place Your Order</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              className="w-full p-3 border border-gray-300 rounded-md" 
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              className="w-full p-3 border border-gray-300 rounded-md" 
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Order Details</label>
            <textarea 
              className="w-full p-3 border border-gray-300 rounded-md" 
              placeholder="Your Order Details"
            />
          </div>
          <button 
            type="submit" 
            className="w-full py-3 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
