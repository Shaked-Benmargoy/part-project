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
        backgroundColor: "#0B234D", 
      }}
    >
      {children}
    </Box>
  );
};

export default LandingLayout;