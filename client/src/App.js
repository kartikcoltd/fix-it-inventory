import Navbar from './componets/Navbar';
import Sidebar from './componets/Sidebar';
import './App.css';
function App() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
       <div style= {{marginLeft: '20px'}}><h1>dashboard</h1>
      <p>welcome to StockFlow</p>
      
      </div>
    </div>
   </div>
  );
}

export default App;