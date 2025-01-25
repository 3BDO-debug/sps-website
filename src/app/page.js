// sectoins
import Category from "@/sections/homePage/Category";
import HeroBanner from "@/sections/homePage/HeroBanner";
import Services from "@/sections/homePage/Services";
// mui
import { Box } from "@mui/material";
// assets
import bg from "../../public/bg.png";

// ---------------------------------------------------------------------------------------

export default function Home() {
  return (
    <>
      <HeroBanner />
      <Services />
      <Box
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <Category />
      </Box>
    </>
  );
}
