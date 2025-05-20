"use-client";
import React from "react";
// mui
import { Box, Stack, Typography, useTheme, useMediaQuery } from "@mui/material";
// components
import Iconify from "./Iconify";

function CustomButton({ color, bgColor = "primary.main", label, onClick }) {
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{ bgcolor: color, padding: 0.2, cursor: "pointer" }}
      onClick={onClick}
    >
      <Stack direction="row" gap={0.2}>
        <Box
          sx={{
            bgcolor: bgColor,
            paddingX: 2,
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 15% 100%, 0 50%)",
          }}
        >
          <Typography
            variant={isMdOrLarger ? "subtitle1" : "caption"}
            sx={{ mt: 0.5, color: color }}
          >
            {label}
          </Typography>
        </Box>
        <Box sx={{ bgcolor: bgColor, paddingX: 0.5 }}>
          <Iconify
            icon="mingcute:arrows-right-line"
            sx={{ fontSize: 20, mt: 0.5 }}
            color={color}
          />
        </Box>
      </Stack>
    </Box>
  );
}

export default CustomButton;
