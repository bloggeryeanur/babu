import { Container, CssBaseline } from "@mui/material";
import HeroSection from "../Compoentn/HeroSection";
import About from "../assets/About/About";
import Education from "../Education/Education";
import SkillLabel from "../assets/About/SkillLabel";
import Project from "../Project/Project";
import FQA from "../Compoentn/FQA";
import Contacts from "../Contacts/Contacts";
const Pagess = () => {
  return (
    <Container maxWidth="lg">
      <CssBaseline />
      <HeroSection></HeroSection>
      <About></About>
      <Education></Education>
      <SkillLabel></SkillLabel>
      <Project></Project>
      <FQA></FQA>
      <Contacts></Contacts>
    </Container>
  );
};

export default Pagess;
