import './App.css';
import Routes from './routes';
import Menu from "./components/Menu"
import GlobalStyle from './styles/global';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <div className="App"> 
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
      <GlobalStyle/>
        <Menu />
        <Routes />
       
    </div>
  );
}

export default App;
