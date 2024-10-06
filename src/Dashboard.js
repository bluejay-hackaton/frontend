import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
  ResponsiveContainer,
} from "recharts";
import "./dashboard.css";

const Plus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-plus"
    >
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
};

const Minus = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-minus"
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
};

const Upwards = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-arrow-up-right"
    >
      <line x1="7" y1="17" x2="17" y2="7"></line>
      <polyline points="7 7 17 7 17 17"></polyline>
    </svg>
  );
};

const Downards = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-arrow-down-right"
    >
      <line x1="7" y1="7" x2="17" y2="17"></line>
      <polyline points="17 7 17 17 7 17"></polyline>
    </svg>
  );
};

const Dashboard = () => {
  const monthlySpending = 2000;
  const averageSpending = 2200;
  const spendingDifference =
    ((monthlySpending - averageSpending) / averageSpending) * 100;
  const categoryData = [
    { name: "Food", current: 500, average: 450 },
    { name: "Transport", current: 300, average: 250 },
    { name: "Entertainment", current: 200, average: 180 },
    { name: "Car Maintenance", current: 400, average: 150 },
  ];
  const insights = [
    "Your car maintenance costs are higher than usual.",
    "You've reduced your food expenses this month.",
    "Your entertainment spending is consistent with previous months.",
  ];
  const loading = true;

  return (
    <section id="dashboard">
      <h2>Your summary</h2>
      <section id="summary-expenses">
        <h3>Expenses this month: {monthlySpending} </h3>
        <span className={spendingDifference > 0 ? "warn" : "green"}>
          <div id="upwards">
            {spendingDifference > 0 ? <Upwards /> : <Downards />}
          </div>
          {spendingDifference > 0 ? "Increased with " : "Decreased with "}
          {Math.abs(spendingDifference.toFixed(0))}%
        </span>
      </section>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart width={500} height={300} data={categoryData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <ReferenceLine y={0} stroke="#000" />
          <Bar dataKey="current" fill="#88A5BE" />
          <Bar dataKey="average" fill="#89C4AC" />
        </BarChart>
      </ResponsiveContainer>

      <section>
        <h3>Insights</h3>

        <section>
          <h4>
            <div
              style={{
                display: "flex",
              }}
            >
              Positives{" "}
              <div
                style={{
                  width: 16,
                  height: 16,
                  color: "var(--accent-color)",
                }}
              >
                <Plus />
              </div>
            </div>
          </h4>
          <ul>
            {insights.map((insight) => (
              <li>{insight}</li>
            ))}
          </ul>
        </section>

        <section>
          <h4>
            <div
              style={{
                display: "flex",
              }}
            >
              Negatives{" "}
              <div
                style={{
                  width: 16,
                  height: 16,
                  color: "var(--warning-color)",
                }}
              >
                <Minus />
              </div>
            </div>
          </h4>
          <ul>
            {insights.map((insight) => (
              <li>{insight}</li>
            ))}
          </ul>
        </section>
      </section>

      <section id="call-to-action">
        <h3>Need help with planning your finances?</h3>
        <button className="primary">Go to planning</button>
      </section>
    </section>
  );
};

export default Dashboard;
