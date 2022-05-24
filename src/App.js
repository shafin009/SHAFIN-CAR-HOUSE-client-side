import React from 'react'
import { Route, Routes } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Footer from './components/Share File/Footer/Footer';
import Header from './components/Share File/Header/Header';
import NotFound from './components/Share File/NotFound/NotFound';
import Blogs from './components/Blogs/Blogs';
import Login from './components/LoginForm/Login';
import SignUp from './components/LoginForm/SignUp';
import RequireAuth from './components/LoginForm/RequireAuth';
import Dashboard from './components/Dashboard/Dashboard';
import AddAReview from './components/Dashboard/Nested Route/AddAReview';
import MyOrder from './components/Dashboard/Nested Route/MyOrder';
import MyProfile from './components/Dashboard/Nested Route/MyProfile';
import About from './components/About/About';
import Inventory from './components/Inventory/Inventory';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Order from './components/Order/Order';
import OrderPurchase from './components/Order/OrderPurchase';






function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/tools/:id" element={
          <RequireAuth>
            <Order />
          </RequireAuth>
        } />
        <Route path="/purchase/:id" element={<OrderPurchase />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<MyProfile />} />
          <Route path="addareview" element={<AddAReview />} />
          <Route path="myorder" element={<MyOrder />} />
          <Route path="myprofile" element={<MyProfile />} />
        </Route>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
