import React from "react";
// next
import Image from "next/image";
// mui
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

function ProjectAndLabCard({
  image,
  description,
  width = 400,
  color = "secondary.main",
}) {
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ bgcolor: color, width: isMdOrLarger ? width : 280 }}>
      <Image
        src={image}
        alt="project"
        style={{ height: "40vh", width: isMdOrLarger ? width : 280 }}
      />
      <Box sx={{ display: "flex", justifyContent: "center", paddingY: 1 }}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Box
            sx={{
              bgcolor: "grey.0",
              width: 5,
              height: "100%",
              ml: 2,
              borderRadius: 100,
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{ color: "grey.0", width: "90%" }}
          >
            {description}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default ProjectAndLabCard;
