import React from "react";
// next
import Image from "next/image";
// mui
import { Box, Container, Grid, Typography } from "@mui/material";
// assets
import title from "../../../public/title.svg";
// assets
import icon1 from "../../assets/why us icons/icon1.png";
import icon2 from "../../assets/why us icons/icon2.png";
import icon3 from "../../assets/why us icons/icon3.png";
// compoenets
import WhyUsCard from "@/components/WhyUsCard";

function WhyChooseUs() {
  return (
    <Container maxWidth="xl" sx={{ py: 10 }}>
      <Box sx={{ borderRadius: 10, border: 2, borderColor: "grey.0" }}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: { xs: "30vh", md: "30vh" },
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "80%", md: "32%" },
              position: "relative",
            }}
          >
            <Image src={title} alt="Title" layout="responsive" />
          </Box>
          <Typography
            variant="h1"
            sx={{
              position: "absolute",
              fontSize: { xs: "9vw", sm: "7.5vw", md: "2.8vw" },
              textAlign: "center",
              mt: { xs: -7, md: -10 },
            }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h1"
            align="center"
            sx={{
              position: "absolute",
              fontSize: { xs: "2vw", sm: "1.5vw", md: "1vw" },
              textAlign: "center",
              mt: { xs: 3, md: 4 },
              width: "50%",
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content It is a long established fact that a reader It
            is a long established fact
          </Typography>
        </Box>
        <Container maxWidth="xl">
          <Grid container sx={{ pb: 5 }} spacing={3}>
            <Grid item xs={12} md={4}>
              <WhyUsCard
                icon={icon1}
                title="Premium natural ingredients"
                description="From powerful botanical extract to nourishing oils each ingredient is carefully selected for its proven benefits to the skin."
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <WhyUsCard
                icon={icon2}
                title="Scientifically backed formulas"
                description="Our team of experts combines the best of nature With skincare technology to create formulation that deliver real results"
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <WhyUsCard
                icon={icon3}
                title="Transparent and ethical practices"
                description="Our commitment to clean beauty and cruelty-free Standards ensure that our products are safe for you and the environment"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Container>
  );
}

export default WhyChooseUs;
