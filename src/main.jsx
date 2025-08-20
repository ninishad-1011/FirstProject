import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import router from './componenets/Routes';



createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}>
        <App/>
    </RouterProvider>
  
  
  </StrictMode>
);
