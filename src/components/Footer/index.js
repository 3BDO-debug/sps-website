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
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// assets
import bg from "../../../public/bg.png";
import footer from "../../assets/footer.png";
import { Icon } from "@iconify/react";
import Iconify from "../Iconify";

function Footer() {
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const FOOTER_LINKS = [
    { title: "Home", href: "/" },
    { title: "Products", children: [], href: "/products" },
    { title: "Collection", href: "/collection" },
    { title: "About Us", href: "/about-us" },
  ];

  const LEGAL_FOOTER_LINKS = [
    { title: "Terms & Conditions", href: "/terms-Conditions" },
    { title: "Privacy & Policy", href: "/privacy-Policy" },
  ];

  return (
    <Box
      sx={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Divider sx={{ bgcolor: "#939598" }} />
      <Box sx={{ mx: 5, mt: 5 }}>
        <Grid container spacing={5}>
          <Grid
            item
            xs={12}
            md={7}
            sx={{ mt: { lg: 10, xl: 20 }, order: isMdOrLarger ? 1 : 2 }}
          >
            <Box>
              <Typography
                variant="h1"
                sx={{
                  fontSize: { md: 55 },
                  textAlign: { xs: "center", md: "inherit" },
                }}
              >
                Join Our Rediant Newsletter And <br /> Get exclusive Offers
              </Typography>
              <TextField
                placeholder="Enter your email"
                variant="outlined"
                sx={{
                  width: { xs: "100%", md: "60%" },
                  mt: 2,
                  bgcolor: "grey.0",
                  borderRadius: 10,
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 10,
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {isMdOrLarger ? (
                        <Button variant="contained">Subscribe</Button>
                      ) : (
                        <IconButton>
                          <Iconify
                            icon="iconamoon:send-fill"
                            color="primary.main"
                          />
                        </IconButton>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5} sx={{ order: isMdOrLarger ? 2 : 1 }}>
            <Image src={footer} alt="Footer" layout="responsive" width={100} />
          </Grid>
        </Grid>
        <Grid container spacing={5} sx={{ mt: 3 }}>
          <Grid item xs={12} md={5}>
            <Typography
              variant="h3"
              sx={{ textAlign: { xs: "center", md: "inherit" } }}
            >
              Just a girl
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                width: { xs: "100%", md: "60%" },
                textAlign: { xs: "center", md: "inherit" },
              }}
            >
              we are passionate about empowering you to embrace your natural
              beauty and achieve a glowing health complexion
            </Typography>
          </Grid>
          <Grid item xs={12} md={2.3}>
            <Typography
              variant="h4"
              sx={{ textAlign: { xs: "center", md: "inherit" } }}
            >
              Contact Us
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                textAlign: { xs: "center", md: "inherit" },
              }}
            >
              justagirl@info.com
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                mt: 2,
                textAlign: { xs: "center", md: "inherit" },
              }}
            >
              112343443234
            </Typography>
          </Grid>
          <Grid item xs={12} md={2.3}>
            <Typography
              variant="h4"
              sx={{ textAlign: { xs: "center", md: "inherit" } }}
            >
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
                    mt: 2,
                    cursor: "pointer",
                    color: "grey.900",
                    textAlign: { xs: "center", md: "inherit" },
                  }}
                >
                  {link.title}
                </Typography>
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} md={2.3}>
            <Typography
              variant="h4"
              sx={{ textAlign: { xs: "center", md: "inherit" } }}
            >
              Legal
            </Typography>
            {LEGAL_FOOTER_LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                sx={{ textDecoration: "none" }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    mt: 2,
                    cursor: "pointer",
                    color: "grey.900",
                    textAlign: { xs: "center", md: "inherit" },
                  }}
                >
                  {link.title}
                </Typography>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Box>
      <Divider sx={{ bgcolor: "#939598", mt: 10 }} />
      <Typography variant="subtitle1" sx={{ mx: 5, py: 3 }}>
        @ 2025 just a girl . All rights reserved
      </Typography>
    </Box>
  );
}

export default Footer;
