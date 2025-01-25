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
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";
// assets
import bg2 from "../../../public/bg2.png";
import footer from "../../assets/footer.png";

function Footer() {
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
        backgroundImage: `url(${bg2.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Divider sx={{ bgcolor: "#939598" }} />
      <Box sx={{ mx: 5, mt: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={7} sx={{ mt: 20 }}>
            <Box>
              <Typography variant="h1" sx={{ fontSize: 55 }}>
                Join Our Rediant Newsletter And <br /> Get exclusive Offers
              </Typography>
              <TextField
                label="Enter your email"
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
                      <Button variant="contained">Subscribe</Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Image src={footer} alt="Footer" layout="responsive" width={100} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Typography variant="h3">Just a girl</Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, width: "60%" }}>
              we are passionate about empowering you to embrace your natural
              beauty and achieve a glowing health complexion
            </Typography>
          </Grid>
          <Grid item xs={12} md={2.3}>
            <Typography variant="h4">Contact Us</Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, width: "60%" }}>
              justagirl@info.com
            </Typography>
            <Typography variant="subtitle1" sx={{ mt: 2, width: "60%" }}>
              112343443234
            </Typography>
          </Grid>
          <Grid item xs={12} md={2.3}>
            <Typography variant="h4">Our Company</Typography>
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
                    width: "60%",
                    cursor: "pointer",
                    color: "grey.900",
                  }}
                >
                  {link.title}
                </Typography>
              </Link>
            ))}
          </Grid>
          <Grid item xs={12} md={2.3}>
            <Typography variant="h4">Legal</Typography>
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
                    width: "60%",
                    cursor: "pointer",
                    color: "grey.900",
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
