import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Route/Router'
import AuthProvider from './components/AuthProvuder/AuthProvider'


import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={Router} />  
       
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
