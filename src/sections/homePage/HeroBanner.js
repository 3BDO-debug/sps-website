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
        height: "70vh",
        overflow: "hidden",
        pt: 30,
      }}
    >
      <Stack sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h1" color="grey.0" align="center">
          Your Ultimate Online Skincare destination.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <Button variant="contained" size="large">
            Shop No
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default HeroBanner;
