import { Box } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./assets/About/About";
import Project from "./Project/Project";
import Contacts from "./Contacts/Contacts";
import Layout from "./Layout/Layout";
import Pagess from "./Pagess/Pagess";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {path: '/home', element: <Pagess></Pagess> },
        {path: '/', element: <Pagess></Pagess> },
        { path: "/course", element: <p>Course Coming soon...</p> },
        { path: "/education", element: <p>Education is coming soon..</p> },
        { path: "/project", element: <Project></Project> },
        { path: "/about", element: <About></About> },
        { path: "/contacts", element: <Contacts></Contacts> },
      ],
    },
  ]);
  return (
    <Box sx={{background: 'gray'}}>
      <RouterProvider router={route}></RouterProvider>
    </Box>
  );
};

export default App;
