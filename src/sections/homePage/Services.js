"use client";
import React from "react";
// next
import Image from "next/image";
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
// iconify
import { Icon } from "@iconify/react";
// assets
import service1 from "@/assets/service-1.png";
import service2 from "@/assets/service-2.png";
import crown from "../../assets/crown.png";

// ----------------------------------------------------------

const ServiceItem = ({ title, description }) => {
  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <Stack gap={1}>
        <Typography
          align="center"
          sx={{
            wordWrap: "break-word",
            color: "grey.0",
            fontWeight: "bold",
            fontSize: {
              xs: "1.25rem", // Increased
              sm: "1.5rem", // Increased
              md: "1.75rem", // Increased
              lg: "2rem", // Increased
              xl: "2.25rem", // Added for extra-large screens
            },
          }}
        >
          {title}
        </Typography>

        <Typography
          align="center"
          sx={{
            fontSize: {
              xs: "0.65rem", // Increased
              sm: "1rem", // Increased
              md: "1.25rem", // Increased
              lg: "1.5rem", // Added for larger screens
            },
          }}
        >
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
    <Stack direction="row" alignItems="center" gap={0.5}>
      <Icon
        style={{ color: theme.palette.grey[300], width: 25, height: 25 }}
        icon={icon}
      />
      <Typography
        variant="caption"
        color="grey.300"
        sx={{
          fontSize: {
            xs: "0.75rem",  // Increased
            sm: "1rem",     // Increased
            md: "1.25rem",  // Increased
            lg: "1.5rem",   // Increased
            xl: "1.75rem",  // Increased
          }
          
        }}
      >
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
        <Grid item xs={12} sx={{ bgcolor: "transparent" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Image
              src={crown}
              style={{
                width: "auto",
                height: "auto",
              }}
            />
          </Box>
          <Container
            maxWidth="xl"
            sx={{
              border: 2,
              borderColor: "grey.0",
              borderRadius: 10,
              mb: 2,
              py: 4,
              height: 160,
            }}
          >
            <Grid container spacing={2}>
              <Grid
                item
                xs={3.5}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ServiceItem
                  title="Quality Product"
                  description="It is a long established fact that a reader will"
                />
              </Grid>
              <Grid item xs={0.5}>
                <Box
                  sx={{
                    bgcolor: "grey.0",
                    height: "10vh",
                    width: 2,
                  }}
                />
              </Grid>
              <Grid
                item
                xs={3.5}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ServiceItem
                  title="Best Production"
                  description="It is a long established fact that a reader will"
                />
              </Grid>
              <Grid item xs={0.5}>
                <Box
                  sx={{
                    bgcolor: "grey.0",
                    height: "10vh",
                    width: 2,
                  }}
                />
              </Grid>
              <Grid
                item
                xs={3.5}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <ServiceItem
                  title="100% Authntic"
                  description="It is a long established fact that a reader will"
                />
              </Grid>
              <Grid item xs={0.5}>
                <Box
                  sx={{
                    bgcolor: "transparent",
                    height: "10vh",
                    width: 2,
                  }}
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              width: "100%",
              py: 1,
              position: "relative",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                bgcolor: "grey.900",
                zIndex: 2,
                top: 0,
                backdropFilter: "blur(5px)",
                opacity: 0.8,
              }}
            />
            <Stack
              direction="row"
              justifyContent="center"
              sx={{
                gap: { xs: 1, sm: 15, md: 30, lg: 40 },
                position: "relative",
                zIndex: 2,
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
