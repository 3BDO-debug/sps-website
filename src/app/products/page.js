// sections
import ExclusiveProducts from "@/sections/productsPage/ExclusiveProducts";
// mui
import { Box } from "@mui/material";
// assets
import bg from "../../../public/bg.png";

function page() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <ExclusiveProducts />
      </Box>
    </>
  );
}

export default page;
