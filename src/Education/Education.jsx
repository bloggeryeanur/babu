import { Box, Grid, Typography } from "@mui/material";
import Title from "../Compoentn/Title";
import { FaBookOpenReader } from "react-icons/fa6";
import EducationCard from "./EducationCard";

const Education = ({
  first,
  second,
  progremer,
  instuate,
  from,
  to,
  summary,
}) => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Title first="Education" second="Bangladesh"></Title>
          {/* Import Education From component */}
          <EducationCard
            progremer="Master in Electrical Engineering

          "
            instuate="University Of Dhaka"
            from="2020"
            to="2022"
            summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil voluptatibus omnis "
          />
          <EducationCard
            progremer="Master in Electrical Engineering

          "
            instuate="University Of Dhaka"
            from="2020"
            to="2022"
            summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil voluptatibus omnis "
          />
          <EducationCard
            progremer="Master in Electrical Engineering

          "
            instuate="University Of Dhaka"
            from="2020"
            to="2022"
            summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil voluptatibus omnis "
          />
        </Grid>
        {/* Education Usa import from Education Card component */}
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Title first="Education" second="USA"></Title>

          <EducationCard
            progremer="Master in Electrical Engineering

          "
            instuate="University Of Dhaka"
            from="2020"
            to="2022"
            summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil voluptatibus omnis "
          />
          <EducationCard
            progremer="Master in Electrical Engineering

          "
            instuate="University Of Dhaka"
            from="2020"
            to="2022"
            summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil voluptatibus omnis "
          />
          <EducationCard
            progremer="Master in Electrical Engineering

          "
            instuate="University Of Dhaka"
            from="2020"
            to="2022"
            summary="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, nihil voluptatibus omnis "
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Education;
