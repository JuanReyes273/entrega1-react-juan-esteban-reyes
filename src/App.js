import logo from './logo.svg';
import './App.css';
import NavBarComponent from './components/NavBarComponent/NavBarComponent';
import CartWidgetComponent from './components/CartWidgetComponent/CartWidgetComponent';
import ItemListContainerComponent from './components/ItemListContainerComponent/ItemListContainerComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav class="navbar">
          <NavBarComponent/>
          <CartWidgetComponent/>
        </nav>
      </header>
      <h1>Bienvenido a mi tienda</h1>
      <ItemListContainerComponent greeting="¡Hola, bienvenido!"/>
    </div>
  );
}

export default App;
