import { Box, Button, Grid, Typography } from "@mui/material";
import Title from "../Compoentn/Title";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";

import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import AddLocationAltOutlinedIcon from "@mui/icons-material/AddLocationAltOutlined";
import { EmailOutlined } from "@mui/icons-material";

const Contacts = () => {
  return (
    <Box>
      <Title first="Contact Me Office Or" second="Online"></Title>
      <Grid container justifyContent="space-around">
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box
            component="form"
            sx={{
              padding: "22px",
              "& .MuiTextField-root": { m: 1, width: "100%" },
            }}
            noValidate
            autoComplete="off">
            {/* Contact emil */}
            <Box>
              <Box>
                <TextField required id="outlined-required" label="Full Name" />
                <TextField
                  required
                  id="outlined-required"
                  label="Email"
                  type="email"
                />
              </Box>
              <Box>
                <TextField
                  required
                  id="outlined-required"
                  label="number"
                  type="number"
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Message"
                  type="text"
                />
              </Box>
              <Box sx={{ textAlign: "center", marginTop: "15px" }}>
                <Button fullWidth variant="contained" color="secondary">
                  {" "}
                  Send <SendIcon />{" "}
                </Button>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Box sx={{ padding: "22px", textAlign: "center" }}>
            <Typography variant="h4" color="secondary">
              Contact Address
            </Typography>
            <Box
              sx={{
                margin: "25px 0",
              }}>
              <Typography>
                <AddLocationAltOutlinedIcon /> Road : Sadak Khan , Rayer Bazar
              </Typography>
              <Typography>
                <AddHomeWorkIcon /> House : 32/27
              </Typography>
              <Typography>
                {" "}
                <AddLocationAltOutlinedIcon /> Dhanmondhi, Dhaka, Bangladesh{" "}
              </Typography>
            </Box>
            <Typography variant="h4" color="secondary">
              Contact Online
            </Typography>
            <Typography>
              <EmailOutlined /> Email : riadmallickbabu@gmail.com
            </Typography>
            <Typography>
              <AddIcCallIcon /> Phone : +880 1716-717269
            </Typography>
            <Typography sx={{ fontSize: "28px", marginTop: "2rem" }}>
              Social Media{" "}
            </Typography>
            {/* 
            <Link href={"/https://www.facebook.com/badhon.khan.180"}>
            </Link> */}
            <a href="https://www.facebook.com/badhon.khan.180">
              <FacebookRoundedIcon color="secondary" />
            </a>
            <a href="/https://www.facebook.com/badhon.khan.180">
              <InstagramIcon color="secondary" />
            </a>
            <a href="/https://www.facebook.com/badhon.khan.180"></a>{" "}
            <a href="/https://www.facebook.com/badhon.khan.180">
              <LinkedInIcon color="secondary" />
            </a>{" "}
            <a href="/https://www.facebook.com/badhon.khan.180">
              <TwitterIcon color="secondary" />
            </a>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contacts;
