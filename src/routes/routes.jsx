import React from 'react';
// import ReactDOM from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
import { createBrowserRouter } from 'react-router-dom';

// import App from '../App';
import Root from './root';

export const router = createBrowserRouter([{
    path: '/',
    element: <Root />,
}]);
