import logo from './logo.svg';
import './App.css';
// import MapComponent from './TrailRec'
import ProductsComponent from './products'



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <MapComponent/> */}

        {/* <p> */}
          {/* Edit <code>src/App.js</code> and save to reload.
           */}
           <ProductsComponent>

           </ProductsComponent>
           
        {/* </p> */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
