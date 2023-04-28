import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';

// import App from './App';
import './index.css';
// import Header from './components/header';
import { router } from './routes/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
  // <BrowserRouter>
  //   <div>
  //     <Routes>
  //       <Route exaxt path='/' element={<App/>}/>
  //       <Route path='/header' element={<Header name='Mari'/>}/>
  //     </Routes>
  //   </div>
  // </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
