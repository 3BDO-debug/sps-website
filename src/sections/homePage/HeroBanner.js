"use client";
import React from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// @Mui
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
import hero from "@/assets/hero.png";
import Iconify from "@/components/Iconify";
import CustomButton from "@/components/CustomButton";

// -----------------------------------------------------------------------------

function HeroBanner() {
  const { push } = useRouter();

  const theme = useTheme();

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "75vh",
          width: "100%",
          overflow: "hidden",
          mt: 20,
        }}
      >
        {/* Background Image */}
        <Image
          src={hero}
          alt="Hero Background"
          fill
          priority
          style={{ objectFit: "cover", zIndex: -1 }}
        />
        {/* Foreground Content */}
        <Container maxWidth="lg">
          <Grid container>
            <Grid xs={12} md={6}>
              <Stack
                direction="row"
                alignItems="center"
                gap={1}
                sx={{ mt: 20 }}
              >
                <Iconify
                  icon="fa:circle"
                  color="secondary.main"
                  sx={{ fontSize: 20 }}
                />
                <Typography sx={{ color: "secondary.main" }}>
                  YOUR DREAM COME TRUE
                </Typography>
              </Stack>
              <Typography variant="h2" sx={{ color: "grey.0", mt: 2 }}>
                WE’RE CREATING FOUNDATIONS FOR YOUR DREAMS
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                gap={3}
                sx={{ mt: 5, ml: { xs: 0, md: 5 } }}
              >
                <CustomButton
                  color="white"
                  label="Why SPS"
                  onClick={() => push("/why-sps")}
                />
                <CustomButton
                  color="white"
                  label="Projects"
                  onClick={() => push("/projects")}
                />
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Stack
        direction={isMdOrLarger ? "row" : "column"}
        alignItems="center"
        justifyContent="space-between"
        gap={2}
        sx={{
          bgcolor: "primary.main",
          paddingX: isMdOrLarger ? 20 : 5,
          paddingY: 2,
        }}
      >
        <Typography
          sx={{
            color: "grey.0",
            width: isMdOrLarger ? "30%" : "100%",
            textAlign: isMdOrLarger ? "inherit" : "center",
          }}
        >
          SPS is a multidisciplinary partner with an integrated and
          forward-thinking approach.
        </Typography>
        <CustomButton
          color="white"
          label="Know More"
          onClick={() => push("/why-sps")}
        />
      </Stack>
    </>
  );
}

export default HeroBanner;
