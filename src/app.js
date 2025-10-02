import React from "react";
import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";
import Insights from "./pages/Insights";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center">Finova Budget App</h1>
      <Home />
      <DashboardPage />
      <Insights />
    </div>
  );
}

export default App;
