import { Box, Container, CssBaseline } from "@mui/material";
import NavBar from "./Compoentn/NavBar";
import HeroSection from "./Compoentn/HeroSection";
import About from "./assets/About/About";
import Education from "./Education/Education";
import SkillLabel from "./assets/About/SkillLabel";
import Project from "./Project/Project";
import FQA from "./Compoentn/FQA";
import Contacts from "./Contacts/Contacts";
import Footer from "./Compoentn/Footer";


const App = () => {
  return (
    <Box>

    <Container maxWidth="lg"> 
      <CssBaseline />
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <About></About>
      <Education></Education>
      <SkillLabel></SkillLabel>
      <Project></Project>
      <FQA></FQA>
      <Contacts></Contacts>
      <Footer></Footer>
    </Container>
    </Box>
  );
};

export default App;
