import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateProfile from './pages/CreateProfile';
import Root from './pages/Root';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import Workflow from './pages/Workflow';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Bookings from './pages/Bookings';
import ProfileView from './pages/ProfileView';
import Payments from './pages/Payments';
import AuthComponent from './components/AuthComponent';

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Root />} path="/">
          <Route element={<Home />} path="/" />
          <Route element={<CreateProfile />} path="/createprofile" />
          <Route element={<Dashboard />} path="/dashboard">
            <Route index element={<Services />} />
            <Route element={<Services />} path="services" />
            <Route element={<Bookings />} path="bookings" />
            <Route element={<Payments />} path="payments" />
            <Route element={<ProfileView />} path="profileview" />
          </Route>
          <Route element={<Product />} path="/products" />
          <Route element={<Workflow />} path="/workflows" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<AuthComponent />} path="/auth" />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
