"use client";
import React from "react";
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
import service1 from "@/assets/service-1.png";
import service2 from "@/assets/service-2.png";
import Image from "next/image";
import { Icon } from "@iconify/react";

// ----------------------------------------------------------

const ServiceItem = ({ title, description }) => {
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Stack gap={1}>
        <Typography
          align="center"
          sx={{
            // maxWidth: { xs: "100%", md: "70%" },
            wordWrap: "break-word",
            // textAlign: { xs: "center", md: "inherit" },
            color: "grey.0",
          }}
          variant="h2"
        >
          {title}
        </Typography>
        <Typography align="center" sx={{ width: "100%" }}>
          {description}
        </Typography>
      </Stack>
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
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sx={{ bgcolor: "#ee87a8" }}>
          <Container
            maxWidth="xl"
            sx={{
              border: 2,
              borderColor: "grey.0",
              borderRadius: 10,
              my: 3,
              py: 4,
            }}
          >
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={3.6}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ServiceItem
                  title="Quality Product"
                  description="It is a long established fact that a reader will be It is a long established fact that a reader will be"
                />
              </Grid>
              {isMdOrLarger && (
                <Grid item md={0.5}>
                  <Box
                    sx={{
                      bgcolor: "grey.500",
                      height: "10vh",
                      width: 2,
                    }}
                  />
                </Grid>
              )}
              <Grid item xs={12} md={3.6}>
                <ServiceItem
                  title="Best Production"
                  description="It is a long established fact that a reader will be It is a long established fact that a reader will be"
                />
              </Grid>
              {isMdOrLarger && (
                <Grid item md={0.5}>
                  <Box
                    sx={{
                      bgcolor: "grey.500",
                      height: "10vh",
                      width: 2,
                    }}
                  />
                </Grid>
              )}
              <Grid item xs={12} md={3.6}>
                <ServiceItem
                  title="100% Authntic"
                  description="It is a long established fact that a reader will be It is a long established fact that a reader will be"
                />
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
              justifyContent="center"
              sx={{
                gap: { xs: 3, md: "10%" },
                position: "relative",
                zIndex: 2,
                px: { xs: 5, md: 0 },
              }}
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
