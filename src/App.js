import { useState, useTransition } from 'react';
import Header from "./Header";
import Upload from "./Upload";
import Dashboard from "./Dashboard";
import Plan from './Plan';
import "./reset.css";
import "./base.css";

/**
 * Fetches financial analysis recommendation data from the server.
 * @returns {Promise<{
*   trend: string,
*   description: string,
*   advice: string[],
*   positive_observations: Object.<string, string>,
*   negative_observations: Object.<string, string>,
*   last_month_budget: Object.<string, {current: number, suggested: number}>
* }>} A promise that resolves to the financial analysis object.
*/
function getRecommendation(data) {
  return fetch('', {
   method: 'POST',
   body: data
  });
}

const example1 = 
{
  "trend": "Increasing discretionary spending and debt, decreasing savings",
  "description": "Over the past 24 months, there's been a consistent increase in income, but also a significant rise in discretionary spending categories such as groceries, clothing, entertainment, and dining. Meanwhile, investment savings have decreased to zero, and high-interest loan repayments have more than quadrupled. This trend suggests a shift towards a more consumption-oriented lifestyle at the expense of long-term financial health.",
  "advice": [
    "Reassess and reduce discretionary spending, particularly in entertainment and dining categories",
    "Prioritize paying off high-interest loans to reduce long-term debt burden",
    "Reinstate investment savings to build long-term wealth",
    "Consider creating a stricter budget to control spending and allocate more towards savings and debt repayment",
    "Look for ways to increase income to support both lifestyle desires and financial goals"
  ],
  "positive_observations": {
    "Income growth": "Gross income has increased from $5000 to $5600 over the 24-month period, indicating career progression or new income sources",
    "Consistent essential expenses": "Housing, utilities, and insurance costs have remained relatively stable, providing a good foundation for budgeting"
  },
  "negative_observations": {
    "Elimination of savings": "Investment savings have decreased from $300 to $0, neglecting long-term financial security",
    "Increasing high-interest debt": "High-interest loan repayments have increased from $200 to $850, indicating accumulating debt",
    "Lifestyle inflation": "Significant increases in discretionary spending categories suggest difficulty in maintaining financial discipline as income grows"
  },
  "last_month_budget": {
    "Income": {"current": 5600, "suggested": 5600},
    "Groceries": {"current": 730, "suggested": 600},
    "Clothing": {"current": 300, "suggested": 150},
    "Utilities": {"current": 330, "suggested": 330},
    "Entertainment": {"current": 660, "suggested": 300},
    "Dining": {"current": 760, "suggested": 400},
    "Transport": {"current": 180, "suggested": 180},
    "Insurance": {"current": 200, "suggested": 200},
    "Medical expenses": {"current": 320, "suggested": 320},
    "Housing": {"current": 1500, "suggested": 1500},
    "Investment savings": {"current": 0, "suggested": 300},
    "Loan repayments (high interest)": {"current": 850, "suggested": 1000},
    "Loan repayments (low interest)": {"current": 400, "suggested": 400},
    "Charity": {"current": 50, "suggested": 50},
    "Vacation": {"current": 0, "suggested": 0},
    "Education": {"current": 0, "suggested": 50},
    "Wellness": {"current": 0, "suggested": 50},
    "Car maintenance": {"current": 320, "suggested": 150}
  }
};

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(example1);
  const [currentPage, setCurrentPage] = useState(0);
  return <div>
    <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
    <main>
      {currentPage === 0 && <Upload onUpload={(csv) => {
        setLoading(true);
        // setData(csv);
        setCurrentPage(1);
        // getRecommendation().then(response => response.json()).then(aiResponse => {
        //   setData(aiResponse);
        //   setCurrentPage(1);
        // }).finally(() => setLoading(false));
      }} loading={loading}/>}
      {currentPage === 1 && <Dashboard data={data}/>}
      {currentPage === 2 && <Plan data={data}/>}
      {/* <Plan data={data} /> */}
    </main>
  </div>;
}

export default App;
