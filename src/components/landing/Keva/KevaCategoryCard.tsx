import { Box, Stack, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ReactNode } from "react";

type KevaCategoryCardProps = {
  title: string;
  icon: ReactNode;
};

const KevaCategoryCard = ({ title, icon }: KevaCategoryCardProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: 60,
        borderRadius: "24px",
        border: "1.5px solid #2F66C9",
        backgroundColor: "rgba(9, 41, 89, 0.92)",
        px: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <KeyboardArrowDownIcon
        sx={{
          color: "#6EA3FF",
          fontSize: 34,
          flexShrink: 0,
        }}
      />

      <Stack
        direction="row-reverse"
        alignItems="center"
        gap={2}
      >
        <Box
          sx={{
            color: "#6EA3FF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            "& svg": {
              fontSize: 26,
            },
          }}
        >
          {icon}
        </Box>

        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: { xs: "1.1rem", md: "1.4rem" },
            fontWeight: 700,
            lineHeight: 1.2,
            textAlign: "right",
          }}
        >
          {title}
        </Typography>
      </Stack>
    </Box>
  );
};

export default KevaCategoryCard;