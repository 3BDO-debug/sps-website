"use client";
import React from "react";
// next
import Image from "next/image";
// mui
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// components
import Iconify from "../Iconify";
// assets
import logo from "@/assets/logo.png";

function Footer() {
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const FOOTER_LINKS = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Lab", href: "/lab" },
    { title: "Why SPS", href: "/why-sps" },
    { title: "Careers", href: "/careers" },
  ];

  return (
    <Box sx={{ mt: 5 }}>
      <Divider sx={{ bgcolor: "primary.main" }} />
      <Box sx={{ paddingY: 5, paddingX: isMdOrLarger ? 10 : 2 }}>
        <Stack
          direction={isMdOrLarger ? "row" : "column"}
          alignItems="center"
          gap={isMdOrLarger ? 40 : 5}
        >
          <Stack gap={3}>
            <Box
              sx={{
                display: "flex",
                justifyContent: isMdOrLarger ? "flex-start" : "center",
              }}
            >
              <Image src={logo} style={{ width: 250, height: 80 }} alt="logo" />
            </Box>
            <Typography
              sx={{
                color: "primary.main",
                width: isMdOrLarger ? "60%" : "100%",
              }}
            >
              SPS is a multidisciplinary partner with an integrated and
              forward-thinking approach.
            </Typography>
          </Stack>
          <Box>
            <Typography variant="h4" sx={{ color: "primary.main", mb: 2 }}>
              Our Company
            </Typography>
            {FOOTER_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    mt: 1,
                    cursor: "pointer",
                    color: "primary.main",
                    textAlign: { xs: "center", md: "inherit" },
                  }}
                >
                  {link.title}
                </Typography>
              </Link>
            ))}
          </Box>
          <Stack
            direction={isMdOrLarger ? "row" : "column"}
            alignItems="center"
          >
            <Box>
              <Typography variant="h4" sx={{ color: "primary.main", mb: 2 }}>
                Contact Us
              </Typography>
              <Typography sx={{ color: "primary.main" }}>
                info@smartpower.com.eg
              </Typography>
              <Typography sx={{ color: "primary.main", mt: 1 }}>
                +201146624555
              </Typography>
              <Typography sx={{ color: "primary.main", mt: 1 }}>
                +201102982007
              </Typography>
              <Typography sx={{ color: "primary.main", mt: 1 }}>
                New Maadi, Cairo, Egypt
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Box>
      <Divider sx={{ bgcolor: "primary.main" }} />
      <Typography sx={{ color: "primary.main", paddingLeft: 10, paddingY: 3 }}>
        @SPS. All rights reseved
      </Typography>
    </Box>
  );
}

export default Footer;
