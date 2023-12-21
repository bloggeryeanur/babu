import { Box, Button, Grid } from "@mui/material";
import Title from "../Compoentn/Title";
import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import One from "../assets/photos/project/1.png";
import Two from "../assets/photos/project/2.png";
import Three from "../assets/photos/project/3.jpg";
import Four from "../assets/photos/project/4.jpg";
import Five from "../assets/photos/project/5.jpg";
import Six from "../assets/photos/project/6.jpg";
import Seven from "../assets/photos/project/7.png";
import Eight from "../assets/photos/project/8.jpg";
import Nine from "../assets/photos/project/9.png";
import Ten from "../assets/photos/project/10.png";
import Eleven from "../assets/photos/project/11.png";
import Twelv from "../assets/photos/project/12.png";

// Tab function
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Project = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Title first="My Recent" second="Project" />
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example">
            <Tab label="EEE" {...a11yProps(0)} />
            <Tab label="IELTS" {...a11yProps(1)} />
            <Tab label="Running" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
            {/* EEE image section */}
          <Grid
            container
            display="flex"
            justifyContent="space-evenly"
            textAlign="center">
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <img width={150} height={150} src={One} alt="Number one image" />
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <img width={150} height={150} src={Two} alt="Number one image" />
            </Grid>

            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <img
                width={150}
                height={150}
                src={Three}
                alt="Number one image"
              />
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <img width={150} height={150} src={Four} alt="Number one image" />
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>

            {/* IELTS Image section */}
        <Grid
            container
            display="flex"
            justifyContent="space-evenly"
            textAlign="center">
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <img width={150} height={150} src={Five} alt="Number one image" />
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <img width={150} height={150} src={Six} alt="Number one image" />
            </Grid>

            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <img
                width={150}
                height={150}
                src={Seven}
                alt="Number one image"
              />
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <img width={150} height={150} src={Eight} alt="Number one image" />
            </Grid>
          </Grid>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
        <Grid
            container
            display="flex"
            justifyContent="space-evenly"
            textAlign="center">
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <img width={150} height={150} src={Nine} alt="Number one image" />
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <img width={150} height={150} src={Ten} alt="Number one image" />
            </Grid>

            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <img
                width={150}
                height={150}
                src={Eleven}
                alt="Number one image"
              />
            </Grid>
            <Grid item xs={6} sm={6} lg={3} xl={3}>
              <img width={150} height={150} src={Twelv} alt="Number one image" />
            </Grid>
          </Grid>
        </CustomTabPanel> 
      </Box>
    
      <Box sx={{
        background: 'gray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        margin: '22px 0'
        
      }}>
        {/* Your centered button */}
        <Button variant="contained" color="secondary">
          Hire Me
        </Button>
      </Box>
    </Box>
  );
};

export default Project;
