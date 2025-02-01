import React from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// mui
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// components
import Iconify from "./Iconify";

function ProductCard({ img, title, description, price }) {
  const router = useRouter();

  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box>
      <Card
        sx={{ borderRadius: 10 }}
        onClick={() => {
          router.push("/product");
        }}
      >
        <CardContent>
          <Stack
            direction="row"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <IconButton>
              <Iconify style={{ fontSize: 35 }} icon="mdi-light:heart" />
            </IconButton>
            <IconButton>
              <Iconify style={{ fontSize: 35 }} icon="bi:three-dots-vertical" />
            </IconButton>
          </Stack>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            {isMdOrLarger ? (
              <Image src={img} height={300} />
            ) : (
              <Image src={img} height={200} />
            )}
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton>
              <Iconify style={{ fontSize: 35 }} icon="akar-icons:cart" />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
      <Stack
        direction="row"
        gap={3}
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          alignItems: "center",
        }}
      >
        <Box sx={{ maxWidth: "150px" }}>
          <Typography variant="h4">{title}</Typography>
          <Typography
            variant="h6"
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {description}
          </Typography>
        </Box>
        <Box sx={{ bgcolor: "grey.0", borderRadius: 3, padding: 1 }}>
          <Stack direction="row" gap={0.5} alignItems="center">
            <Typography variant="h5">{price}</Typography>
            <Typography sx={{ fontSize: 10, fontWeight: "bold" }}>
              L.E
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
}

export default ProductCard;
