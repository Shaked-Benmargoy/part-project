import { FormControl, InputLabel, Select, MenuItem, Box, Typography } from "@mui/material";
import { ICON_NAMES, getIcon } from "../../utils/iconMap";

type IconSelectProps = {
  value: string;
  onChange: (value: string) => void;
  label?: string;
};

const IconSelect = ({ value, onChange, label = "אייקון" }: IconSelectProps) => {
  return (
    <FormControl fullWidth>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={(e) => onChange(e.target.value as string)}
        MenuProps={{ PaperProps: { sx: { maxHeight: 300 } } }}
      >
        {ICON_NAMES.map((name) => {
          const Icon = getIcon(name);
          return (
            <MenuItem key={name} value={name}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Icon sx={{ fontSize: 22 }} />
                <Typography>{name}</Typography>
              </Box>
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default IconSelect;
