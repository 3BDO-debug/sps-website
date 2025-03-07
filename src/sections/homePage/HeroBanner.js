"use client";
import React from "react";
// next
import Image from "next/image";
// @Mui
import { Box, Button, Stack, Typography } from "@mui/material";
// framer-motion
import { motion } from "framer-motion";

// -----------------------------------------------------------------------------

function HeroBanner() {
  return (
    <Box
      sx={{
        position: "relative",
        height: "70vh",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: "100%",
          zIndex: 2,
          px: 3,
          pt: 30,
        }}
      >
        <Stack sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h1" color="grey.0" align="center">
            Your Ultimate Online Skincare destination.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
            <Button variant="contained" size="large">
              Shop Now
            </Button>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default HeroBanner;
