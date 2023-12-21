import { Box, Grid, Typography } from "@mui/material";
import Title from "../../Compoentn/Title";
import EEE from "../photos/about/eee.png";
import Ielts from "../photos/about/ielts.png";
import Teacher from "../photos/about/teach.png";
import Phd from "../photos/about/phd.png";
import SkillCard from "./SkillCard";

const About = ({ img, imageTitle, skill, description }) => {
  return (
    <Box>
      {/* About summary section  */}
      <Title first="Know Me" second="More"></Title>
      <Box>
        <Typography variant="h5">
          Hi i'm <span style={{ color: "#cddc39" }}>Babu Khan</span> I'm
          Professional IELTS Teacher and Electrical Engineering
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil
          voluptatibus omnis nostrum modi harum voluptas consectetur natus
          praesentium optio vitae tempora iure aut qui consequatur dicta
          repellat. Pariatur, repudiandae!
        </Typography>
      </Box>

      <Grid
        container
        display="flex"
        justifyContent="space-between"
        sx={{
          marginTop: "2rem",
          textAlign: "center",
        }}>
        <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
          <SkillCard
            img={Ielts}
            imageTitle="EEE image here"
            skill="Ielts Teacher"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil voluptatibus omnis"
          />
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
          <SkillCard
            img={EEE}
            imageTitle="Electrical Engineering 2"
            skill="Electrical Engineering "
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil voluptatibus omnis"
          />
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
          <SkillCard
            img={Teacher}
            imageTitle="Teacher image here"
            skill="Teacher"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil voluptatibus omnis"
          />
        </Grid>
        <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
          <SkillCard
            img={Phd}
            imageTitle="Phd image here"
            skill="PhD"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil voluptatibus omnis"
          />
        </Grid>

        <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
          <SkillCard
            img={Phd}
            imageTitle="Phd image here"
            skill="PhD"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil voluptatibus omnis"
          />
        </Grid>

        <Grid xs={12} sm={12} md={6} lg={4} xl={4}>
          <SkillCard
            img={Phd}
            imageTitle="Phd image here"
            skill="PhD"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil voluptatibus omnis"
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
