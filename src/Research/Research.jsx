import { Box, Grid } from "@mui/material";
import ResearchCard from "./ResearchCard";

const Research = () => {
  return (
    <Box>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <ResearchCard></ResearchCard>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <ResearchCard></ResearchCard>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <ResearchCard></ResearchCard>
        </Grid>{" "}
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <ResearchCard></ResearchCard>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <ResearchCard></ResearchCard>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}>
          <ResearchCard></ResearchCard>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Research;
