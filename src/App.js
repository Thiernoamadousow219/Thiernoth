import Home from './routes/home/home.component';
import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigation/navigation.component';
import Auth from './routes/authentification/authentification.component';
import Counter from './routes/testing/counter';
import Shop from './components/shop/shop.component';
import Checkout from './routes/checkout/checkout.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        <Route path='shop/*' element={<Shop/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='checkout' element={<Checkout/>}/>
        <Route path='testing' element={<Counter/>}/>
      </Route>
    </Routes>
  );
}

export default App;
