import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        height: "12rem",
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Typography>Copyright &copy; 2024 Babu. All Rights Reserved.</Typography>
    </Box>
  );
};

export default Footer;
