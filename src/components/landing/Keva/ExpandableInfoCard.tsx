import {Accordion,AccordionDetails,AccordionSummary,Box,Stack,Typography,} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { ReactNode } from "react";

type ExpandableInfoCardProps = {
  title: string;
  icon: ReactNode;
  content: ReactNode;
  expanded: boolean;
  onChange: () => void;
};

const ExpandableInfoCard = ({
  title,
  icon,
  content,
  expanded,
  onChange,
}: ExpandableInfoCardProps) => {
  return (
    <Accordion
      expanded={expanded}
      onChange={onChange}
      disableGutters
      elevation={0}
      sx={{
        width: "100%",
        borderRadius: "24px !important",
        overflow: "hidden",
        backgroundColor: "rgba(9, 41, 89, 0.92)",
        border: "1.5px solid #2F66C9",
        "&:before": {
          display: "none",
        },
        "&.Mui-expanded": {
          margin: 0,
        },
      }}
    >
      <AccordionSummary
        sx={{
          minHeight: 64,
          px: 2,
          "&.Mui-expanded": {
            minHeight: 64,
          },
          "& .MuiAccordionSummary-content": {
            margin: 0,
            width: "100%",
          },
          "& .MuiAccordionSummary-content.Mui-expanded": {
            margin: 0,
          },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              minWidth: 28,
              color: "#6EA3FF",
              ml: 0,
              "& svg": {
                fontSize: 30,
              },
              ".Mui-expanded &": {
                transform: "rotate(180deg)",
              },
              transition: "transform 0.2s ease",
            }}
          >
            <KeyboardArrowDownIcon />
          </Box>

          <Stack
            direction="row"
            alignItems="center"
            sx={{
              direction: "rtl",
            }}
          >
            <Box
              sx={{
                ml: 2,
                color: "#6EA3FF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "& svg": {
                  fontSize: 28,
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
      </AccordionSummary>

      <AccordionDetails
        sx={{
          px: 4,
          pb: 3,
          pt: 1,
          borderTop: "1px solid rgba(110, 163, 255, 0.35)",
        }}
      >
        <Box
          sx={{
            width: "100%",
            direction: "rtl",
            textAlign: "right",
          }}
        >
          {content}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default ExpandableInfoCard;