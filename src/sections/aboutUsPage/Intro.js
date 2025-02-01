import React from "react";
// next
import Image from "next/image";
// mui
import { Box, Button, Container, Typography } from "@mui/material";
// assets
import abouUsBg from "../../assets/aboutUsBg.jpg";
import title2 from "../../../public/title2.png";

function Intro() {
  return (
    <Container maxWidth="xl" sx={{ pt: 20 }}>
      <Box
        sx={{
          borderRadius: 10,
          border: 2,
          borderColor: "grey.0",
          px: { xs: 0, md: 7 },
          py: 3,
        }}
      >
        <Box
          sx={{
            height: { xs: "70vh", md: "50vh" },
            backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), 
            url(${abouUsBg.src})
          `,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 20,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              mt: -25,
            }}
          >
            <Box
              sx={{
                width: { xs: "70%", sm: "50%", md: "35%" },
                position: "relative",
              }}
            >
              <Image src={title2} alt="Title" layout="responsive" />
            </Box>
            <Typography
              variant="h1"
              sx={{
                position: "absolute",
                fontSize: { xs: "11vw", sm: "8vw", md: "4vw" },
                textAlign: "center",
                mt: { xs: -7, md: -7 },
                color: "grey.0",
              }}
            >
              About Us
            </Typography>
          </Box>
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              textAlign: "center",
              color: "grey.0",
              width: "70%",
              mt: { xs: 15, md: 0 },
            }}
          >
            It is a long established fact that a reader will be distracted by
            the readable content It is a long established fact that a reader
            will be distracted by the readable content
          </Typography>
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              color: "grey.900",
              bgcolor: "grey.0",
              borderRadius: 3,
              top: { xs: 750, md: 500 },
            }}
          >
            Learn More
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Intro;
