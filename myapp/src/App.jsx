import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer greeting="Hello World!" />
    </div>
  );
}

export default App;
