import { Box, Typography } from "@mui/material";

const SkillCard = ({ img, imageTitle, skill, description }) => {
  return (
    <Box
      sx={{
        margin: "30px 0",
      }}>
      <img height="100rem" src={img} alt={imageTitle} />
      <Typography variant="h4">{skill}</Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default SkillCard;
