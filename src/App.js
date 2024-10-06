import { useState } from 'react';
import Header from "./Header";
import Upload from "./Upload";
import Dashboard from "./Dashboard";
import "./reset.css";
import "./base.css";

function App() {
  const [data, setData] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  return <div>
    <Header />
    <main>
      <Upload/>
      {/* <Dashboard /> */}
    </main>
  </div>;
}

export default App;
