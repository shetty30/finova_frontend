import React from "react";

const Home = () => (
  <div className="p-6">
    <h2 className="text-xl font-bold">Overview</h2>
    <div className="grid grid-cols-3 gap-4 mt-4">
      <div className="bg-white shadow-md rounded-lg p-4">Income: ₹50,000</div>
      <div className="bg-white shadow-md rounded-lg p-4">Savings: ₹10,000</div>
      <div className="bg-white shadow-md rounded-lg p-4">Expenses: ₹40,000</div>
    </div>
  </div>
);

export default Home;
