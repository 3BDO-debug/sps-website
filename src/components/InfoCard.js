import React from "react";
// next
import Image from "next/image";
// mui
import { Box, Divider, Stack, Typography } from "@mui/material";

function InfoCard({
  image,
  color = "primary.main",
  title,
  item1,
  item2,
  item3,
}) {
  return (
    <Box
      sx={{
        bgcolor: "grey.0",
        position: "relative",
        mx: 1,
        paddingTop: 10,
        boxShadow: 3,
      }}
    >
      <Box sx={{ height: "35vh" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack gap={1} sx={{ mb: 5 }}>
            {image && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Image src={image} alt="icon" />
              </Box>
            )}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="h4"
                sx={{ color: color, textAlign: "center" }}
              >
                {title}
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Stack direction="row" alignItems="center" gap={2} sx={{ ml: 3 }}>
          <Box>
            <Box sx={{ bgcolor: color, height: 100, width: 2 }}></Box>
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ color: color }}>
              {item1}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: color }}>
              {item2}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: color }}>
              {item3}
            </Typography>
          </Box>
        </Stack>
      </Box>
      <Box sx={{ bgcolor: color, height: 7 }}></Box>
    </Box>
  );
}

export default InfoCard;
