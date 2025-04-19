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
import title from "../../../public/title.svg";
import product9 from "../../assets/products/product9.png";
import product10 from "../../assets/products/product10.png";
import product11 from "../../assets/products/product11.png";
import product12 from "../../assets/products/product12.png";
// components
import ProductCard from "@/components/ProductCard";

function NewCollection() {
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
    <Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "40vh", sm: "50vh", md: "60vh" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "90%", md: "45%" },
            position: "relative",
          }}
        >
          <Image src={title} alt="Title" layout="responsive" />
        </Box>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            fontSize: { xs: "9.5vw", md: "4.5vw" },
            textAlign: "center",
            mt: { xs: -7, md: -17 },
          }}
        >
          New Collection
        </Typography>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            fontSize: { xs: "4vw", sm: "3vw", md: "2vw" },
            textAlign: "center",
            mt: { xs: 4, md: 8 },
          }}
        >
          It is a long established fact that a reader will be distracted by the
          readable content
        </Typography>
      </Box>
      <Container maxWidth="xl">
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ mt: { xs: -20, md: -40 } }}
        >
          <Box
            component="img"
            src="/cloud.svg"
            sx={{
              width: { xs: 100, sm: 300 },
            }}
          />
          <Box
            component="img"
            src="/cloud.svg"
            sx={{
              width: { xs: 100, sm: 300 },
            }}
          />
        </Stack>
      </Container>
      <Container maxWidth="xl">
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

export default NewCollection;
