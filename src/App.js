import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './Components/Routes/Protectetd-Routes';
import './App.css';

function App() {
  
  const Home = React.lazy(() => import('./Pages/Home'));
  const PageNotFound = React.lazy(() => import('./Pages/PageNotFound'));
  const Navbar = React.lazy(() => import('./Components/Navbar'));
  const AddToCart =  React.lazy(() => import('./Components/AddToCart'));
 
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<ProtectedRoutes Component={Home} />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/cart/:id" element={<AddToCart />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
