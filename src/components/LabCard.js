"use client";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React from "react";

function LabCard({ image, name, description, specifications }) {
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ bgcolor: "primary.main", p: 2, borderRadius: 2 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // vertical center
            }}
          >
            <Image
              src={image}
              alt="device image"
              width={isMdOrLarger ? 300 : 250}
              height={200}
              style={{ borderRadius: 15 }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack gap={1}>
            <Typography variant="h4" sx={{ color: "grey.0" }}>
              {name}
            </Typography>
            {description && (
              <Typography
                sx={{
                  color: "grey.0",
                  wordBreak: "break-word",
                  width: "70%",
                }}
              >
                {description}
              </Typography>
            )}
            {specifications &&
              specifications?.split(",").map((spec, index) => (
                <Typography
                  key={index}
                  sx={{ color: "grey.0", wordBreak: "break-word" }}
                >
                  • {spec.trim()}
                </Typography>
              ))}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LabCard;
