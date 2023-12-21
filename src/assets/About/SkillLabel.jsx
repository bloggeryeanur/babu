import { Box, Grid } from "@mui/material";
import Title from "../../Compoentn/Title";
import SkillLabelCard from "./SkillLabelCard";

const SkillLabel = () => {
  return (
    <Box>
      <Title first="My Daily Life" second="Todo List" />
      <Grid container justifyContent="space-between">
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <SkillLabelCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <SkillLabelCard />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <SkillLabelCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default SkillLabel;
