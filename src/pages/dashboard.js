import React from "react";
import Dashboard from "../components/Dashboard";

const DashboardPage = () => {
  const sampleExpenses = [
    { category: "Food", amount: 5000 },
    { category: "Transport", amount: 2000 },
    { category: "Shopping", amount: 3000 }
  ];

  return (
    <div className="p-6">
      <Dashboard expenses={sampleExpenses} />
    </div>
  );
};

export default DashboardPage;
