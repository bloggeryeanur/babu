import { Box, Typography } from "@mui/material";
import { FaBookOpenReader } from "react-icons/fa6";

const EducationCard = ({ progremer, instuate, from, to, summary }) => {
  return (
    <Box>
      <Typography
        sx={{
          fontSize: "28px",
          color: "#BDB76B",
        }}>
        {progremer}
      </Typography>
      <Typography
        sx={{
          paddingBottom: "25px",
          fontSize: "15px",
        }}>
        {" "}
        <FaBookOpenReader /> {instuate} / {from} / {to}
      </Typography>

      <Typography sx={{ fontSize: "12px" }}>{summary}</Typography>
      <Typography
        sx={{
          width: "80%",
          height: "2px",
          background: "gray",
        }}></Typography>
    </Box>
  );
};

export default EducationCard;
