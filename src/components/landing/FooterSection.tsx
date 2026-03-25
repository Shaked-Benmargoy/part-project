import { Box, Stack, Typography } from "@mui/material";
import footerLogo from "../../logos/footerLogo.png";
const FooterSection = () => {
  return (
    <Stack alignItems="center" spacing={2}>
      <Typography
        sx={{
          color: "rgba(255,255,255,0.75)",
          fontSize: { xs: "1.1rem", md: "1.4rem" },
          fontWeight: 700,
          textAlign: "center",
        }}
      >
        זמינים עבורכם! גרף כ״א קבע בח״א 8
      </Typography>

      <Box
        component="img"
        src={footerLogo}
        alt="footer logo"
        sx={{
          width: 72,
          height: 72,
          objectFit: "contain",
        }}
      />
    </Stack>
  );
};

export default FooterSection;