import Home from './routes/home/home.component';
import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigation/navigation.component';
import Auth from './routes/authentification/authentification.component';
import Counter from './routes/testing/counter';

const Shop = () => {
  return (
    <h1>Bonjour ma boutique</h1>
  )
}


function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index={true} element={<Home/>}/>
        <Route path='shop' element={<Shop/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='testing' element={<Counter/>}/>
      </Route>
    </Routes>
  );
}

export default App;
