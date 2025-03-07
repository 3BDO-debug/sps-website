"use client";
import React from "react";
// next
import Image from "next/image";
// mui
import {
  Avatar,
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
// aseets
import title from "../../../public/title.svg";
import skincare from "../../assets/skincare.jpg";
import makeup from "../../assets/makeup.jpg";
import body from "../../assets/body.jpg";
import hair from "../../assets/hair.jpeg";
import sunscreen from "../../assets/sunscreen.png";
import accessories from "../../assets/accessories.jpg";
import offerBg from "../../assets/offer-bg.jpg";
import cloud from "../../assets/cloud.png";
// components
import CategoryCard from "@/components/CategoryCard";

function Category() {
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ mb: 10 }}>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: { xs: "15vh", md: "30vh" },
          width: "100%",
        }}
      >
        <Box
          sx={{
            width: { xs: "70%", sm: "50%", md: "30%" },
            position: "relative",
          }}
        >
          <Image src={title} alt="Title" layout="responsive" />
        </Box>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            fontSize: { xs: "18vw", sm: "8vw", md: "8vw" },
            textAlign: "center",
            mt: { xs: -7, md: -10 },
          }}
        >
          Categories
        </Typography>
        <Typography
          variant="h1"
          sx={{
            position: "absolute",
            fontSize: { xs: "3.5vw", sm: "2.5vw", md: "1.5vw" },
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
          sx={{ mt: { xs: -5, md: -20 } }}
        >
          <Box
            component="img"
            src="/cloud.svg"
            sx={{
              width: { xs: 70, md: 300 },
            }}
          />
          <Box
            component="img"
            src="/cloud.svg"
            sx={{
              width: { xs: 70, md: 300 },
            }}
          />
        </Stack>
      </Container>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Typography
          variant="subtitle1"
          component="a"
          href="https://example.com"
          sx={{
            textDecoration: "underline",
            color: "primary.main",
            fontWeight: "bold",
          }}
        >
          See more
        </Typography>
      </Container>
      <Container
        maxWidth="xl"
        sx={{ borderRadius: 10, border: 2, borderColor: "grey.0" }}
      >
        <Grid container spacing={3} sx={{ paddingY: 3 }}>
          <Grid item xs={6} md={3}>
            <CategoryCard
              img={skincare}
              title="Skincare"
              items="20"
              height={isMdOrLarger ? 25 : 4}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <CategoryCard
              img={makeup}
              title="Makeup"
              items="30"
              height={isMdOrLarger ? 25 : 4}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack gap={3}>
              <CategoryCard img={body} title="Body" items="10" height={4} />
              <CategoryCard
                img={sunscreen}
                title="Sunscreen"
                items="15"
                height={4}
              />
            </Stack>
          </Grid>
          <Grid item xs={6} md={3}>
            <Stack gap={3}>
              <CategoryCard img={hair} title="Hair" items="3" height={4} />
              <CategoryCard
                img={accessories}
                title="Accessories"
                items="8"
                height={4}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container
        maxWidth="xl"
        sx={{
          borderRadius: 10,
          border: 2,
          borderColor: "grey.0",
          mt: 3,
          p: 3,
        }}
      >
        <Card
          sx={{
            backgroundImage: `url(${offerBg.src})`,
            backgroundSize: "cover",
            borderRadius: 4,
            height: { xs: "50vh", md: "60vh" },
            display: "flex",
            justifyContent: isMdOrLarger ? "flex-end" : "center",
            alignItems: "center",
            borderRadius: 6,
          }}
        >
          <CardContent>
            {isMdOrLarger && (
              <Image
                src={cloud}
                width={300}
                style={{
                  position: "absolute",
                  zIndex: 1,
                  right: 40,
                  top: 1750,
                  mt: -5,
                }}
              />
            )}
            {isMdOrLarger ? (
              <Avatar
                sx={{
                  width: 450,
                  height: 450,
                  bgcolor: "rgba(0, 0, 0, 0.6)",
                  mr: 10,
                }}
              >
                <Stack>
                  <Typography variant="h4">Discount up to</Typography>
                  <Typography
                    align="center"
                    sx={{ fontSize: 170, fontWeight: "bold", mt: -6 }}
                  >
                    70%
                  </Typography>
                  <Button
                    sx={{
                      bgcolor: "grey.0",
                      width: "fit-content",
                      alignSelf: "center  ",
                      fontSize: "2rem",
                      padding: "12px 24px",
                      mt: -6,
                      color: "grey.900",
                    }}
                  >
                    Shop Now
                  </Button>
                </Stack>
              </Avatar>
            ) : (
              <Box
                sx={{
                  bgcolor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: 5,
                  padding: 5,
                }}
              >
                <Stack>
                  <Typography variant="h4" sx={{ color: "grey.0" }}>
                    Discount up to
                  </Typography>
                  <Typography
                    align="center"
                    variant="h1"
                    sx={{ fontWeight: "bold", color: "grey.0" }}
                  >
                    70%
                  </Typography>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Button
                      sx={{
                        bgcolor: "grey.0",
                        width: "fit-content",
                        color: "grey.900",
                      }}
                    >
                      Shop Now
                    </Button>
                  </Box>
                </Stack>
              </Box>
            )}
            {isMdOrLarger && (
              <Image
                src={cloud}
                width={300}
                alt="Cloud Image"
                style={{
                  position: "absolute",
                  zIndex: 1,
                  right: 500,
                  top: 2150,
                  transform: "scaleX(-1)",
                }}
              />
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}

export default Category;
