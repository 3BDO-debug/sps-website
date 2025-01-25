"use client";
import React from "react";
// @Mui
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
// assets
import service1 from "@/assets/service-1.png";
import service2 from "@/assets/service-2.png";
import Image from "next/image";
import { Icon } from "@iconify/react";

// ----------------------------------------------------------

const ServiceItem = ({ title, description, hideDivider }) => {
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Stack gap={1}>
        <Typography
          sx={{ maxWidth: "70%", wordWrap: "break-word" }}
          variant="h4"
        >
          {title}
        </Typography>
        <Typography>
          It is a long established fact that a reader will be
        </Typography>
      </Stack>
      {!hideDivider && (
        <Box
          sx={{
            bgcolor: "grey.500",
            height: "10vh",
            width: 3,
          }}
        />
      )}
    </Stack>
  );
};

// -----------------------------------------------------------

const FeatureItem = ({ icon, title }) => {
  const theme = useTheme();

  return (
    <Stack direction="row" alignItems="center" gap={3}>
      <Icon
        style={{ color: theme.palette.grey[300], width: 35, height: 35 }}
        icon={icon}
      />
      <Typography variant="subtitle1" color="grey.300">
        {title}
      </Typography>
    </Stack>
  );
};

// -----------------------------------------------------------

function Services() {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Container>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={2.4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image
                  src={service1}
                  style={{ aspectRatio: "1/1" }}
                  height={200}
                  objectFit="cover"
                  alt="Just a girl services"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={2.4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Image
                  src={service2}
                  height={200}
                  objectFit="cover"
                  alt="Just a girl services"
                />
              </Grid>
              <Grid
                item
                xs={12}
                md={2.4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ServiceItem title="Quality Products" />
              </Grid>
              <Grid
                item
                xs={12}
                md={2.4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ServiceItem title="Best Production" />
              </Grid>
              <Grid
                item
                xs={12}
                md={2.4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ServiceItem title="100% Authentic" hideDivider />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              py: 3,
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "grey.900",
                zIndex: 2,
                top: 0,
                backdropFilter: "blur(5px)",
                opacity: 1,
              }}
            />
            <Stack
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              justifyContent="center"
              sx={{ gap: "10%", position: "relative", zIndex: 2 }}
            >
              <FeatureItem icon="la:shipping-fast" title="Free Shipping" />
              <FeatureItem icon="ix:support" title="24th Customer Support" />
              <FeatureItem icon="mdi:clock-fast" title="Fast Delivery" />
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Services;
