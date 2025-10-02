import React from "react";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Dashboard = ({ expenses }) => {
  const COLORS = ["#8884d8", "#82ca9d", "#ffc658"];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Expense Breakdown</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={expenses}
          dataKey="amount"
          nameKey="category"
          outerRadius={100}
          label
        >
          {expenses.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>

      <h2 className="text-xl font-bold mt-6 mb-4">Monthly Expenses</h2>
      <BarChart width={400} height={250} data={expenses}>
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="amount" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default Dashboard;
