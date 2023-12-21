import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const HeroSection = () => {
  useEffect(() => {
    // Target the element by class name
    const targetElement = document.querySelector(".auto-input");

    // Check if the element exists before initializing Typed.js
    if (targetElement) {
      const typed = new Typed(targetElement, {
        strings: [
          "Electrical Engineering",
          "IELTS Teacher",
          "and",
          "EEE Phd Student",
        ],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
      });

      // Clean up Typed.js instance when the component unmounts
      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <Box
      sx={{
        marginTop: "-3rem",
      }}>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        alignItems="center">
        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            sx={{
              textAlign: "center",
            }}>
            <Typography variant="h5">Hey I'm Babu khan and I'm </Typography>
            <Typography className="auto-input">sorry</Typography>
            <Typography sx={{ padding: "22px 0" }}>
              From Dhaka Bangladesh
            </Typography>
            <Link to={"/contacts"}>
              <Button variant="outlined" color="secondary">
                Contact Me
              </Button>
            </Link>
          </Box>
        </Grid>

        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            sx={{
              textAlign: "center",
            }}>
            <img
              style={{
                borderRadius: "50%",
                height: "18rem",
                marginTop: "5rem",
                width: "15rem",
              }}
              src="https://i.ibb.co/C9cfqZL/babuicon.jpg"
              alt=""
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;
