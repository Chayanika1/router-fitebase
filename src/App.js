import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Home/Home'
import Login from './Login/Login'
import Header from './Header/Header';
import Register from './Register/Register';
import Products from './Products/Products';
import Orders from './Orders/Orders';
import RequireAuth from './RequireAuth/RequireAuth';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Products" element={<Products></Products>}></Route>
        <Route path="/Orders" element={
          <RequireAuth>
            <Orders></Orders>

          </RequireAuth>
        }></Route>
        <Route path="/logIn" element={<Login></Login>}></Route>
        <Route path="/Register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
