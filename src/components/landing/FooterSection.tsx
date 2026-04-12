import { Box, Stack, Typography } from "@mui/material";
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
      >זמינים עבורכם! טייסת מנהלה תל נוף</Typography>

      <Box
  component="img"
  src="/sites/baha8-minhala/Shared%20Documents/logo2.png"
  alt="logo2"
  sx={{
    width: 80,
    height: 80,
    borderRadius: "50%",
    objectFit: "cover",
  }}
/>
    </Stack>
  );
};

export default FooterSection;