import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavBar from "../Compoentn/NavBar";
import Footer from "../Compoentn/Footer";

const Layout = () => {
  return (
    <Container maxWidth="lg" sx={{background: '#F0F8FF'}}>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </Container>
  );
};

export default Layout;
