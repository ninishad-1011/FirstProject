import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';

import router from './componenets/routes/Routes';
import App from './App';
import AuthProvider from './providers/AuthProvider';




createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <AuthProvider>
       <RouterProvider router={router}>
        <App/>
    </RouterProvider>

    </AuthProvider>

  
  
  </StrictMode>
);
