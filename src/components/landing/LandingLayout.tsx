import { Box } from "@mui/material";
import { ReactNode } from "react";

type LandingLayoutProps = {
  children: ReactNode;
};

const LandingLayout = ({ children }: LandingLayoutProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        position: "relative",
        backgroundImage: "url('https://tikshuv.sharepoint.com/:i:/r/sites/baha8-minhala/Shared%20Documents/background.jpg?csf=1&web=1&e=Gk5gCA')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(rgba(9,41,89,0.75), rgba(9,41,89,0.95))",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default LandingLayout;
