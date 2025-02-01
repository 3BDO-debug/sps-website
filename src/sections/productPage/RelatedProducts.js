"use client";
import React from "react";
// next
import Image from "next/image";
// mui
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// assets
import product9 from "../../assets/products/product9.png";
import product10 from "../../assets/products/product10.png";
import product11 from "../../assets/products/product11.png";
import product12 from "../../assets/products/product12.png";
// components
import ProductCard from "@/components/ProductCard";

function RelatedProducts() {
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const productsList = [
    {
      title: "Luminous Blush",
      description: "A soft, buildable blush for a natural, radiant look.",
      price: "14.99",
      img: product9,
    },
    {
      title: "Waterproof Eyeliner",
      description: "Smudge-proof eyeliner for precision and durability.",
      price: "12.99",
      img: product10,
    },
    {
      title: "Revitalizing Lip Balm",
      description: "Nourishing lip balm with a hint of color.",
      price: "9.99",
      img: product11,
    },
    {
      title: "Makeup Brush Set",
      description:
        "A premium set of 10 brushes for a complete makeup application.",
      price: "39.99",
      img: product12,
    },
  ];
  return (
    <Box sx={{ py: 10 }}>
      <Container maxWidth="xl">
        <Typography variant="h1" sx={{ mb: 4 }}>
          Related Products
        </Typography>
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

export default RelatedProducts;
