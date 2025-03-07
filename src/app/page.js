"use client";
// sectoins
import Category from "@/sections/homePage/Category";
import HeroBanner from "@/sections/homePage/HeroBanner";
import Services from "@/sections/homePage/Services";
// mui
import { Box, useMediaQuery, useTheme } from "@mui/material";
// framer-motion
import { motion } from "framer-motion";
// assets
import bg from "../../public/bg.png";
import chair from "../assets/chair.png";
import chairWideView from "../assets/chairWideView.png";

// ---------------------------------------------------------------------------------------

export default function Home() {
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1 }} // Start hidden
        animate={{ opacity: 1, scale: 1.1 }} // Animate only the background
        transition={{
          duration: 3,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute", // Ensures it stays behind other content
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1, // Puts it behind the content
          backgroundImage: `url(${
            isMdOrLarger ? chairWideView.src : chair.src
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          }}
        />
      </motion.div>
      <Box
        sx={{
          position: "relative", // Ensures content stays on top
          width: "100%",
          height: "100%",
        }}
      >
        <HeroBanner />
        <Services />
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
          pt: !isMdOrLarger && 4,
        }}
      >
        <Category />
      </Box>
    </>
  );
}
