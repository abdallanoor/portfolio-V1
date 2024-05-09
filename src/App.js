import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import "./App.css";

let routers = createBrowserRouter([
  { path: "", element: <Home /> },
  {
    element: <Layout />,
    children: [
      { path: "/about/", element: <About /> },
      { path: "/projects/", element: <Projects /> },
      { path: "/contact/", element: <Contact /> },
    ],
  },
]);
function App() {
  return <RouterProvider router={routers} />;
}

export default App;
