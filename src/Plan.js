export default function Plan({ data }) {
    return <section>
        <h2>
            Plan
        </h2>
        <section>
            <h3>Let us give you an advice</h3>
            Based on your transactions we have suggest you take the following actions:
            <ul>
                {data.advice.map(adv => (
                    <li>
                    {adv}
                </li>
                ))}
                
            </ul>
        </section>
        <section>
            <h3>Here is how your monthly budget would look like:</h3>
            <BudgetTable budgetData={data.last_month_budget}/>
        </section>
    </section>;
}


const BudgetTable = ({ budgetData }) => {
    return (
      <table className="budget-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Current</th>
            <th>Suggested</th>
            <th>Difference</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(budgetData).map(([category, values]) => (
            <tr key={category}>
              <td>{category}</td>
              <td>${values.current}</td>
              <td>${values.suggested}</td>
              <td>${values.suggested - values.current}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  