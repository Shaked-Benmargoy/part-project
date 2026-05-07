import { Stack, Typography } from "@mui/material";
import EditableLogo from "../admin/EditableLogo";

const HeroSection = () => {
  return (
    <Stack alignItems="center" spacing={1.5} sx={{ mt: 2 }}>
      <Stack direction="row" alignItems="center" spacing={2}>
        <EditableLogo
          src="/sites/baha8-minhala/Shared%20Documents/footerLogo.png"
          alt="footer"
          filename="footerLogo.png"
          sx={{ width: 80, height: "auto", objectFit: "contain" }}
        />
        <EditableLogo
          src="/sites/baha8-minhala/Shared%20Documents/logo.png"
          alt="logo"
          filename="logo.png"
          sx={{ width: 100, height: "auto", objectFit: "contain" }}
        />
      </Stack>
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
