import './App.css';
import Routes from './Routes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer} from 'react-toastify';


function App() {
  return (
    <div className="App">
      <ToastContainer newestOnTop/>
      <Routes/>
    </div>
  );
}

export default App;
