"use client";
import React, { useState } from "react";
// next
import Image from "next/image";
// mui
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  IconButton,
  Rating,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// assets
import variant1 from "../../assets/product/variant1.png";
import variant2 from "../../assets/product/variant2.png";
import variant3 from "../../assets/product/variant3.png";
import variant4 from "../../assets/product/variant4.png";
import variant5 from "../../assets/product/variant5.png";
import variant6 from "../../assets/product/variant6.png";
import Iconify from "@/components/Iconify";

function ProductDetails({}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const imageVariants = [
    { img: variant1 },
    { img: variant2 },
    { img: variant3 },
    { img: variant4 },
    { img: variant5 },
    { img: variant6 },
  ];

  const [mainImage, setMainImage] = useState(imageVariants[0].img);

  const [quantity, setQuantity] = useState(1);

  return (
    <Box sx={{ pb: 10 }}>
      <Box
        sx={{
          bgcolor: "grey.900",
          mt: "10vh",
          height: 60,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack gap={10} direction="row" alignItems="center">
          <Typography variant="h6" sx={{ color: "grey.0" }}>
            Free Shipping over 1999!
          </Typography>
          {!isMobile && (
            <>
              <Typography variant="h6" sx={{ color: "grey.0" }}>
                Free Shipping over 1999!
              </Typography>
              <Typography variant="h6" sx={{ color: "grey.0" }}>
                Free Shipping over 1999!
              </Typography>
              <Typography variant="h6" sx={{ color: "grey.0" }}>
                Free Shipping over 1999!
              </Typography>
              <Typography variant="h6" sx={{ color: "grey.0" }}>
                Free Shipping over 1999!
              </Typography>
              <Typography variant="h6" sx={{ color: "grey.0" }}>
                Free Shipping over 1999!
              </Typography>
            </>
          )}
        </Stack>
      </Box>
      <Container maxWidth="xl" sx={{ mt: 5 }}>
        <Typography variant="h6" sx={{ mb: 3 }}>
          Home / Makeup
        </Typography>
        <Container maxWidth="lg">
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <Image
                src={mainImage}
                style={{ borderRadius: 30 }}
                width={500}
                layout="responsive"
              />
              <Grid container spacing={1}>
                {imageVariants.map((variant, index) => (
                  <Grid item xs={4} md={2} key={index}>
                    <Box
                      sx={{
                        border: mainImage === variant.img ? 2 : 0,
                        color: "primary.main",
                        p: 1,
                        borderRadius: 5,
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        onClick={() => setMainImage(variant.img)}
                        src={variant.img}
                        style={{ borderRadius: 10 }}
                        width={75}
                      />
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack
                direction="row"
                sx={{ display: "flex", justifyContent: "space-between" }}
              >
                <Typography variant="h2">Makeup</Typography>
                <Box>
                  <IconButton>
                    <Iconify icon="mdi-light:heart" style={{ fontSize: 35 }} />
                  </IconButton>
                  <IconButton>
                    <Iconify
                      icon="bi:three-dots-vertical"
                      style={{ fontSize: 35 }}
                    />
                  </IconButton>
                </Box>
              </Stack>
              <Stack direction="row" gap={0.5}>
                <Typography sx={{ fontSize: 20 }}>EGP</Typography>
                <Typography variant="h5">200.00</Typography>
              </Stack>
              <Typography sx={{ mt: 1 }} variant="h6">
                Lorem ipsum dolor sit amet,
              </Typography>
              <Divider sx={{ my: 3, bgcolor: "grey.900" }} />
              <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euis- mod tincidunt ut laoreet dolore magna
                aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                aliquip ex ea com- modo consequat. Duis autem vel eum iriure
                dolor in hendrerit in vulputate velit esse mo- lestie consequat,
                vel illum dolore eu feugiat nulla facilisis at vero eros et
                accumsan et iusto odio dignissim qui blandit praesent luptatum
                zzril delenit augue duis dolore te feugait nulla facilisi. Lorem
                ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam
                nonummy nibh euis- mod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea com-
                modo consequat. Lorem ipsum dolor sit amet, consectetuer
                adipiscing elit, sed diam nonummy nibh euis- mod tincidunt ut
                laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                minim veniam, quis nostrud exerci tation ullamcorper suscipit
                lobortis nisl ut aliquip ex ea com- modo consequat. Duis autem
                vel eum iriure dolor in hendrerit in vulputate velit esse mo
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                <Rating
                  value={5}
                  sx={{ color: "primary.main" }}
                  size="small"
                  readOnly
                />
                <Typography variant="body2">30 Reviews</Typography>
              </Stack>
              <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
                Quantity
              </Typography>
              <Box
                sx={{
                  border: 2,
                  borderRadius: 5,
                  borderColor: "grey.900",
                  mt: 1,
                  width: { xs: "100%", sm: "30%" },
                }}
              >
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                  sx={{ p: 0.5 }}
                >
                  <IconButton
                    disabled={quantity === 1}
                    onClick={() => setQuantity(quantity - 1)}
                  >
                    <Iconify icon="jam:minus" style={{ color: "black" }} />
                  </IconButton>
                  <Typography sx={{ fontWeight: "bold" }}>
                    {quantity}
                  </Typography>
                  <IconButton onClick={() => setQuantity(quantity + 1)}>
                    <Iconify icon="ic:round-plus" style={{ color: "black" }} />
                  </IconButton>
                </Stack>
              </Box>
              <Button
                fullWidth
                sx={{
                  mt: 2,
                  color: "grey.0",
                  bgcolor: "grey.900",
                  borderRadius: 4,
                }}
              >
                Add To Cart
              </Button>
              <Stack
                sx={{ mt: 2 }}
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>Share:</Typography>
                  <Iconify icon="logos:facebook" />
                  <Iconify icon="skill-icons:instagram" />
                  <Iconify icon="devicon:twitter" />
                  <Iconify icon="logos:telegram" />
                </Box>
                <Typography
                  variant="body2"
                  component="a"
                  href="https:basedontech.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ color: "grey.900" }}
                >
                  Need help?
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
}

export default ProductDetails;
