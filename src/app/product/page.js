// mui
import { Box } from "@mui/material";
// sections
import ProductDetails from "@/sections/productPage/ProductDetails";
import ProductReview from "@/sections/productPage/ProductReview";
import RelatedProducts from "@/sections/productPage/RelatedProducts";

function page() {
  return (
    <Box>
      <ProductDetails />
      <ProductReview />
      <RelatedProducts />
    </Box>
  );
}

export default page;
