import DragNDrop from './components/DragNDrop';
import './upload.css';

export default function Upload({ onUpload, onChangeIncome }) {
  return (
    <section>
        <h1>Welcome to BlueJay!</h1>
      <p>
        We're excited to help you gain
        insights into your financial habits. To get started, we'll need you to
        upload a CSV file containing your recent transactions. Don't worry, this
        process is secure and your data will be handled with the utmost
        confidentiality. 
      </p>
      <p>
        Download your transaction history from your bank's website. Make sure
        it's in CSV format. The file should contain categorized sum for a every month. 
        <span style={{
            fontSize: '8'
        }}>* because of time constraints we expect that the user income is in the csv file</span>
      </p>
      <section id="upload-box">
        <DragNDrop onFileUploaded={onUpload}/>
      </section>

        <br></br>
      If you want just to test how it looks, you can load transactions of some of our fictional personas:
      <ul className='list-without-styles'
      id="personas">
        <li>
            <button>
            Johnas
            </button>
             
        </li>
        <li>
            <button>
            Maria
            </button>
            
        </li>
        <li>
            <button>
            Illiya
            </button>
            
        </li>
      </ul>
    </section>
  );
}
