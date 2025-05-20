"use client";
import React from "react";
// next
import Image from "next/image";
// mui
import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function Intro({
  image,
  dividerColor,
  title,
  item1,
  item2,
  item3,
  height = "33vh",
  mobileHeight = "60vh",
  mt = 10,
}) {
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box>
      <Divider
        sx={{
          width: "100%",
          height: 40,
          bgcolor: "primary.main",
          mt: 10,
        }}
      />
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Stack direction="row" gap={3} sx={{ mt: mt }}>
              <Box
                sx={{
                  bgcolor: "primary.main",
                  width: 10,
                  height: isMdOrLarger ? height : mobileHeight,
                  borderRadius: 100,
                }}
              />
              <Stack gap={5} sx={{ width: isMdOrLarger ? "80%" : "100%" }}>
                <Typography sx={{ color: "primary.main" }} variant="h4">
                  {title}
                </Typography>
                <Typography sx={{ color: "primary.main" }} variant="subtitle1">
                  {item1}
                </Typography>
                <Typography sx={{ color: "primary.main" }} variant="subtitle1">
                  {item2}
                </Typography>
                <Typography sx={{ color: "primary.main" }} variant="subtitle1">
                  {item3}
                </Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                width: "100%",
                height: "15vh",
                position: "relative",
                mt: 5,
              }}
            >
              <Image src={image} alt="Intro Image" layout="responsive" />
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Divider
        sx={{
          width: "100%",
          height: 2,
          bgcolor: dividerColor,
          mt: 10,
        }}
      />
    </Box>
  );
}

export default Intro;
