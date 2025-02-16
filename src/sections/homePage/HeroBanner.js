"use client";
import React from "react";
// next
import Image from "next/image";
// @Mui
import { Box, Button, Stack, Typography } from "@mui/material";
// framer-motion
import { motion } from "framer-motion";
// assets
import heroBg from "@/assets/heroBg.png";

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
      {/* Clouds */}
    
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
      <motion.div
        initial={{ opacity: 0, scale: 1 }} // Start hidden and slightly scaled down
        animate={{ opacity: 1, scale: 1.1 }} // Fade in and scale to normal size
        transition={{
          duration: 3, // Animation duration
          ease: "easeInOut", // Smooth easing
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Image
          src={heroBg}
          alt="Welcome to just a girl"
          objectFit="cover"
          layout="fill"
        />
      </motion.div>
    </Box>
  );
}

export default HeroBanner;
