import './App.css';
// importing router needs
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// importing routers
import User from './components/user';
import Password from './components/password';
import Register from './components/register';
import Profile from './components/profile';
import Recovery from './components/recovery';
import Reset from './components/reset';
import PageNotFound from './components/pageNotFound';
import Workbench from './components/workbench';

// Adding routers
const router = createBrowserRouter ([
  {
    path:'/',
    element:<User/>
  },
  {
    path:'/register',
    element:<Register/>
  },
  {
    path:'/password',
    element:<Password/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/recovery',
    element:<Recovery/>
  },
  {
    path:'/reset',
    element:<Reset/>
  },
  {
    path:'/workbench',
    element:<Workbench/>
  },
  {
    path:'*',
    element:<PageNotFound/>
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
