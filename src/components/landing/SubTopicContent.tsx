import { Box, Link, Typography } from "@mui/material";
import OpenInNewOutlined from "@mui/icons-material/OpenInNewOutlined";

type SubTopicContentProps = {
  data: string;
  link: string;
};

const textSx = {
  color: "rgba(255,255,255,0.78)",
  fontSize: { xs: "1rem", md: "1.15rem" },
  lineHeight: 1.9,
  textAlign: "right" as const,
};

const SubTopicContent = ({ data, link }: SubTopicContentProps) => {
  return (
    <Box>
      <Typography sx={{ ...textSx, whiteSpace: "pre-line" }}>{data}</Typography>
      {link && (
        <Link
          href={link}
          target="_blank"
          rel="noreferrer"
          underline="none"
          sx={{
            color: "#6EA3FF",
            fontSize: { xs: "1rem", md: "1.15rem" },
            fontWeight: 700,
            display: "flex",
            flexDirection: "row-reverse",
            alignItems: "center",
            gap: 1,
            mt: 1,
            width: "fit-content",
          }}
        >
          לפרטים נוספים
          <OpenInNewOutlined sx={{ fontSize: 22 }} />
        </Link>
      )}
    </Box>
  );
};

export default SubTopicContent;
