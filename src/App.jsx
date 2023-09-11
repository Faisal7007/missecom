import './App.css';
import Routing from './Routing/Routing';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function App() {
  return (
    <div className="App">
      <Routing/>
     
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        closeButton={false}
        toastStyle={{
          backgroundColor: 'black',
          color: '#ffd230',
          borderRadius: '25px'
        }}
        bodyClassName="toast-body"
        icon={<div style={{ display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
       
          <HiOutlineShoppingCart size={20} style={{ marginLeft: '5px' }} />
        </div>}
      />
    </div> 
  );
}

export default App;
