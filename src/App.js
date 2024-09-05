
import './App.css';
import Footer from './customer/components/Footer/Footer';
import Navigation from './customer/components/Navigation/Navigation';
import Product from './customer/components/Product/Product';

import HomePage from './customer/Pages/HomePage/HomePage';

function App() {
  return (
    <div className="">

      <Navigation></Navigation>
      <div>
        {/* <HomePage /> */}
        <Product></Product>
      </div>
      <Footer></Footer>

    </div>
  );
}

export default App;
