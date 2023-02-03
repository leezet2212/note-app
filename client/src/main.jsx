import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Container } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import './firebase/config'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container maxWidth='lg' sx={{ textAlign: 'center', marginTop: 50}}>
      <RouterProvider router={router}/>
    </Container>
  </React.StrictMode>,
)
