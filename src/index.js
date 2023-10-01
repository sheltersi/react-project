import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import './App.css';
import Services from "./routes/Services";
import Projects from "./routes/Projects";

const AppLayout = () =>{
return(
  <>
    <Navbar/>
    <Outlet/>
  </>
)
    
}



const router = createBrowserRouter([
  {
element:<AppLayout/>,
children:[
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
]
  },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);