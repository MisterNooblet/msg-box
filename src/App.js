
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/Header";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Register from "./Pages/Register";

import Admin from "./Pages/Admin";
import NoPermissions from "./Pages/NoPermissions";




function App() {
  const [isLogged, setIsLogged] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Header setIsLogged={setIsLogged} />,
      children: [
        { path: '/', element: isLogged ? <Home user={isLogged} /> : <Login isLogged={setIsLogged} setIsAdmin={setIsAdmin} /> },
        { path: '/register', element: <Register /> },
        { path: '/admin', element: isAdmin ? <Admin /> : <NoPermissions /> }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  );
}

export default App;
