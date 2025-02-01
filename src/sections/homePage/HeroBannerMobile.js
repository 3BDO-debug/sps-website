"use client";
import React from "react";
// next
import Image from "next/image";
// @Mui
import { Box, Button, Stack, Typography } from "@mui/material";
// framer-motion
import { motion } from "framer-motion";
// assets
import heroBgMob from "@/assets/heroBgMob.png";

// -----------------------------------------------------------------------------
function HeroBannerMobile() {
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
          width: 130,
          position: "absolute",
          left: "-2%",
          zIndex: 3,
          top: "50%",
        }}
      />
      <Box
        component="img"
        src="/cloud.svg"
        sx={{
          width: 130,
          position: "absolute",
          left: "65%",
          zIndex: 3,
          top: "50%",
        }}
      />
      <Box
        component="img"
        src="/cloud.svg"
        sx={{
          width: 130,
          position: "absolute",
          left: "65%",
          zIndex: 3,
          top: "18%",
        }}
      />
      {/* Hero Content */}
      <Box
        sx={{
          position: "absolute",
          height: "35%",
          bgcolor: "#000000",
          zIndex: 2,
          filter: "opacity(0.7)",
          px: 3,
          py: 3,
          top: 150,
          width: "100%",
        }}
      >
        <Typography
          sx={{ zIndex: 4, textAlign: "center" }}
          variant="h2"
          color="grey.100"
        >
          Your Ultimate Online Skincare destination.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
          <Button variant="contained">Shop Now</Button>
        </Box>
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
          src={heroBgMob}
          alt="Welcome to just a girl"
          objectFit="cover"
          layout="fill"
        />
      </motion.div>
    </Box>
  );
}

export default HeroBannerMobile;
