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
        component="img"
        src="/cloud.svg"
        sx={{
          width: 300,
          position: "absolute",
          left: "-5%",
          zIndex: 3,
          top: "2%",
        }}
      />
      <Box
        component="img"
        src="/cloud.svg"
        sx={{
          width: { xs: 200, md: 300 },
          position: "absolute",
          left: { xs: "50%", md: "30%" },
          zIndex: 3,
          bottom: 0,
        }}
      />
      <Box
        component="img"
        src="/cloud.svg"
        sx={{
          width: { xs: 200, md: 300 },
          position: "absolute",
          left: { xs: "50%", md: "30%" },
          zIndex: 3,
          top: "20%",
        }}
      />
      {/* Hero Content */}
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          bgcolor: "#000000",
          width: { md: "40%", xs: "100%" },
          zIndex: 2,
          filter: "opacity(0.7)",
          px: 3,
          py: 6,
        }}
      >
        <Stack
          sx={{ height: "100%", zIndex: 10, mt: 2 }}
          justifyContent="center"
        >
          <Typography sx={{ zIndex: 4 }} variant="h1" color="grey.100">
            Your Ultimate Online Skincare destination.
          </Typography>
          <Typography color="grey.100" variant="body2">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
          </Typography>
          <Box sx={{ flex: 0.3 }} />
          <Box>
            <Button variant="contained" size="large">
              Shop Now
            </Button>
          </Box>
          <Typography sx={{ mt: 3 }} variant="subtitle1" color="grey.200">
            It is a long established fact that a reader will be distracted{" "}
          </Typography>
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
