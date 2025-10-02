import axios from "axios";

const API = "http://localhost:5000"; // Change when deployed

export const addIncome = (amount) => axios.post(`${API}/income`, { amount });
export const addExpense = (category, amount) => axios.post(`${API}/expense`, { category, amount });
export const setSavings = (goal) => axios.post(`${API}/savings`, { goal });
export const sendToChatbot = (message) => axios.post(`${API}/chatbot`, { message });
