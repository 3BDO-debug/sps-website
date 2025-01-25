// sections
import NewCollection from "@/sections/collectionPage/NewCollection";
import WhyChooseUs from "@/sections/collectionPage/WhyChooseUs";
// mui
import { Box } from "@mui/material";
// assets
import bg from "../../../public/bg.png";

function page() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <NewCollection />
      <WhyChooseUs />
    </Box>
  );
}

export default page;
