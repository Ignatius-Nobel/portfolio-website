import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contact />
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
