import { Box, Stack, Typography } from "@mui/material";
import logo from "../../logos/logo.png";
const HeroSection = () => {
  return (
    <Stack alignItems="center" spacing={1.5} sx={{ mt: 2 }}>
      <Box
        component="img"
        src={logo}
        alt="logo"
        sx={{
          width: 140,
          height: "auto",
          objectFit: "contain",
        }}
      />

      <Typography
        sx={{
          color: "#FFFFFF",
          fontSize: { xs: "2.2rem", md: "2.8rem" },
          fontWeight: 800,
          lineHeight: 1.1,
        }}
      >
        עדכוני פרט
      </Typography>

      <Typography
        sx={{
          color: "#6EA3FF",
          fontSize: { xs: "1.5rem", md: "2.2rem" },
          fontWeight: 800,
          lineHeight: 1,
        }}
      >
        בח״א 8
      </Typography>
    </Stack>
  );
};

export default HeroSection;