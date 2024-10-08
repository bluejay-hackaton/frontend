import "./header.css";

export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div id="header">
      <div>
        <img width={32} height={32} alt="" src="data:image/png;base64,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" />
        BlueJay
      </div>
      <nav>
        <ul>
          <li>
            <button onClick={() => {
                setCurrentPage(0);
            }} className={currentPage === 0 ? 'active': ''}>Upload</button>
          </li>
          <li>
            <button onClick={() => {
                if (currentPage === 0) return;
                setCurrentPage(1);
            }} className={(currentPage === 0 && 'disabled') || (currentPage === 1 ? 'active' : '')}>Analyze</button>
          </li>
          <li>
            <button onClick={() => {
                if (currentPage === 0) return;
                setCurrentPage(2);
            }} className={currentPage === 2 ? 'active' : ''}>Plan</button>
            </li>
        </ul>
      </nav>
    </div>
  );
}
