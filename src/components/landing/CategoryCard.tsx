import { Box, Button, Stack, Typography } from "@mui/material";

type CategoryCardProps = {
  title: string;
  onClick?: () => void;
  icon?: React.ReactNode;
};

const CategoryCard = ({ title, onClick, icon }: CategoryCardProps) => {
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={onClick}
      sx={{
        minHeight: { xs: 76, md: 82 },
        borderRadius: "18px",
        backgroundColor: "#2449C6",
        color: "#fff",
        boxShadow: "none",
        border: "1px solid rgba(143, 180, 255, 0.7)",
        px: { xs: 2, md: 3 },
        "&:hover": {
          backgroundColor: "#2449C6",
          boxShadow: "none",
        },
      }}
    >
      <Stack
        direction="row"
        sx={{
          width: "100%",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: 34, md: 38 },
            minWidth: { xs: 34, md: 38 },
            flexShrink: 0,
          }}
        />

        <Typography
          sx={{
            flex: 1,
            minWidth: 0,
            fontSize: { xs: "1.2rem", md: "1.75rem" },
            fontWeight: 800,
            color: "#FFFFFF",
            textAlign: "center",
            lineHeight: 1.2,
            px: 1,
            wordBreak: "break-word",
            overflowWrap: "anywhere",
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            width: { xs: 34, md: 38 },
            minWidth: { xs: 34, md: 38 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FFFFFF",
            flexShrink: 0,
            "& svg": {
              fontSize: { xs: 30, md: 38 },
            },
          }}
        >
          {icon}
        </Box>
      </Stack>
    </Button>
  );
};

export default CategoryCard;