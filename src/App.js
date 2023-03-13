import './App.css';
// importing router needs
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// importing routers
import username from './components/user';
import password from './components/password';
import Register from './components/register';
import profile from './components/profile';
import recovery from './components/recovery';
import reset from './components/reset';
import pageNotFound from './components/pageNotFound';

// Adding routers
const router = createBrowserRouter ([
  {
    path:'/',
    element:<username></username>
  },
  {
    path:'/register',
    element:<div>Register Router</div>
  },
  {
    path:'/login',
    element:<div>Login Router</div>
  }
])

function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
    </main>

  );
}

export default App;
