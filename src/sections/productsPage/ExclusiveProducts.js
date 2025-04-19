"use client";
import React from "react";
// next
import Image from "next/image";
// mui
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// assets
import title from "../../../public/title.svg";
import Iconify from "@/components/Iconify";
import ProductCard from "@/components/ProductCard";
import product1 from "../../assets/products/product1.png";
import product2 from "../../assets/products/product2.png";
import product3 from "../../assets/products/product3.png";
import product4 from "../../assets/products/product4.png";
import product5 from "../../assets/products/product5.png";
import product6 from "../../assets/products/product6.png";
import product7 from "../../assets/products/product7.png";
import product8 from "../../assets/products/product8.png";

function ExclusiveProducts() {
  const theme = useTheme();
  const isNotSM = useMediaQuery(theme.breakpoints.up("sm"));

  const productsList = [
    {
      title: "Radiant Glow Foundation",
      description:
        "A lightweight, full-coverage foundation for a flawless finish.",
      price: "24.99",
      img: product1,
    },
    {
      title: "Velvet Matte Lipstick",
      description:
        "Long-lasting matte lipstick available in a variety of shades.",
      price: "14.99",
      img: product2,
    },
    {
      title: "All-in-One Mascara",
      description: "Volumizing and lengthening mascara for bold lashes.",
      price: "19.99",
      img: product3,
    },
    {
      title: "Glow Highlighter Palette",
      description:
        "Highlight your features with this shimmering highlighter palette.",
      price: "29.99",
      img: product4,
    },
    {
      title: "Perfect Brow Kit",
      description: "A complete kit for shaping and defining your brows.",
      price: "18.99",
      img: product5,
    },
    {
      title: "Ultimate Eyeshadow Palette",
      description: "A palette with 12 pigmented shades for endless eye looks.",
      price: "34.99",
      img: product6,
    },
    {
      title: "Hydrating Setting Spray",
      description: "Lock in your makeup while keeping your skin hydrated.",
      price: "16.99",
      img: product7,
    },
    {
      title: "Silky Primer",
      description: "Smooth out your skin and prep it for makeup application.",
      price: "22.99",
      img: product8,
    },
  ];

  return (
    <Box sx={{ mb: 10 }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "45vh", sm: "50vh", md: "65vh" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "55%" },
            position: "relative",
          }}
        >
          <Image src={title} alt="Title" layout="responsive" />
        </Box>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            fontSize: { xs: "8vw", sm: "7vw", md: "4.5vw" },
            textAlign: "center",
            mt: { xs: -8, md: -23 },
          }}
        >
          Exclusive Products
        </Typography>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            fontSize: { xs: "4vw", sm: "3vw", md: "1.5vw" },
            textAlign: "center",
            mt: { xs: 4, md: 8 },
          }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", mt: -15 }}>
        <Card sx={{ width: "fit-content", borderRadius: 4 }}>
          <CardContent>
            <Stack direction="row" gap={4}>
              {isNotSM && (
                <>
                  {[
                    "Everything",
                    "Popular",
                    "Hot",
                    "Offers",
                    "Best Seller",
                    "Favorite",
                  ].map((label) => (
                    <Button
                      key={label}
                      sx={{ borderRadius: 3, color: "grey.900" }}
                    >
                      {label}
                    </Button>
                  ))}
                </>
              )}
              <Button
                sx={{ borderRadius: 3, color: "grey.900", bgcolor: "grey.400" }}
                startIcon={<Iconify icon="iconoir:filter" />}
              >
                Filters
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Box>
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Grid container spacing={3}>
          {productsList.map((item, index) => (
            <Grid item xs={12} md={6} lg={3} key={index}>
              <ProductCard
                img={item.img}
                title={item.title}
                description={item.description}
                price={item.price}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ExclusiveProducts;
