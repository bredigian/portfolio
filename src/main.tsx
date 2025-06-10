import './index.css';
import '@fontsource/inter';
import '@fontsource/inter/100.css';
import '@fontsource/inter/200.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
import '@fontsource/inter/800.css';
import '@fontsource/inter/900.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from '@/App.tsx';
import LastProject from './components/last-project';
import Navbar from '@/components/navbar';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'sonner';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <React.StrictMode>
        <LastProject />
        <Navbar />
        <App />
        <Toaster />
      </React.StrictMode>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />,
);
