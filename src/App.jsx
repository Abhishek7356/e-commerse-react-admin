import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';
import UserList from './pages/UserList/UserList';
import User from './pages/User/User';
import CreateUser from './pages/CreateUser/CreateUser';
import ProductList from './pages/ProductList/ProductList';
import Product from './pages/Product/Product';
import CreateProduct from './pages/CreateProduct/CreateProduct';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';

function App() {

  const user = useSelector(state => state.userReducer.user)
  console.log(user)

  return (
    <div className="App">
      <Topbar />
      <div className='container'>
        {/* <Sidebar /> */}
        <Routes>
          <Route path='/' element={user ? <Home /> : <Login />} />
          <Route path='/users' element={user ? <UserList /> : <Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/user' element={user ? <User /> : <Login />} />
          <Route path='/new-user' element={user ? <CreateUser /> : <Login />} />
          <Route path='/products' element={user ? <ProductList /> : <Login />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/new-product' element={user ? <CreateProduct /> : <Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
