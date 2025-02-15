"use client";
// sectoins
import Category from "@/sections/homePage/Category";
import HeroBanner from "@/sections/homePage/HeroBanner";
import Services from "@/sections/homePage/Services";
import HeroBannerMobile from "@/sections/homePage/HeroBannerMobile";
// mui
import { Box, useMediaQuery, useTheme } from "@mui/material";
// assets
import bg from "../../public/bg.png";

// ---------------------------------------------------------------------------------------

export default function Home() {
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <>
      {/* {isMdOrLarger ? <HeroBanner /> : <HeroBannerMobile />} */}
      <HeroBanner />
      <Services />
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
