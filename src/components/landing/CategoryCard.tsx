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
        minHeight: 82,
        borderRadius: "18px",
        backgroundColor: "#2449C6",
        color: "#fff",
        boxShadow: "none",
        border: "1px solid rgba(143, 180, 255, 0.7)",
        px: 3,
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
          justifyContent: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "1.5rem", md: "2rem" },
            fontWeight: 800,
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          {title}
        </Typography>

        {icon ? (
          <Box
            sx={{
              position: "absolute",
              right: 0,
              display: "flex",
              alignItems: "center",
              color: "#FFFFFF",
              "& svg": {
                fontSize: 38,
              },
            }}
          >
            {icon}
          </Box>
        ) : null}
      </Stack>
    </Button>
  );
};

export default CategoryCard;