"use client";
import React, { useRef, useState } from "react";
// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// next
import Image from "next/image";
// @Mui
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
  CardContent,
  Card,
} from "@mui/material";
// components
import Iconify from "@/components/Iconify";
// assets
import cloud from "../../assets/cloud.png";
import makeup from "../../assets/makeup.jpg";
import body from "../../assets/body.jpg";
import hair from "../../assets/hair.jpeg";
import sunscreen from "../../assets/sunscreen.png";
import accessories from "../../assets/accessories.jpg";

// -----------------------------------------------------------------

const ReviewCard = ({ video, title, subtitle }) => {
  return (
    <Box sx={{ px: 5, py: 3 }}>
      <Card
        sx={{
          borderRadius: 10,
          height: 500,
          backgroundImage: `url(${video.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent>
          <Box>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 15 }}>
              <Iconify
                icon="ep:video-play"
                sx={{ fontSize: 100, color: "grey.0" }}
              />
            </Box>
            <Typography variant="h3" sx={{ color: "grey.0" }}>
              {title}
            </Typography>
            <Typography variant="h6" sx={{ color: "grey.0" }}>
              {subtitle}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

// -----------------------------------------------------------------

function VideoReview() {
  const theme = useTheme();

  const carouselRef = useRef();

  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const slidesToShow = isMobile ? 1 : 3;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    centerPadding: "10px",
  };

  const videos = [
    {
      video: makeup,
      title: "Emily Roberts",
      subtitle: "Emily Roberts",
    },
    {
      video: body,
      title: "Sophia Martinez",
      subtitle: "Sophia Martinez",
    },
    {
      video: sunscreen,
      title: "Chloe Johnson",
      subtitle: "Chloe Johnson",
    },
    {
      video: hair,
      title: "Mia Brown",
      subtitle: "Mia Brown",
    },
    {
      video: accessories,
      title: "Olivia Wilson",
      subtitle: "Olivia Wilson",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "flex-end" },
        }}
      >
        <Image src={cloud} width={300} alt="Cloud Image" />
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h1">Video Reviews</Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} style={{ overflow: "hidden" }}>
          <Slider ref={carouselRef} {...settings}>
            {videos.map((data, index) => (
              <ReviewCard
                key={index}
                video={data.video}
                title={data.title}
                subtitle={data.subtitle}
              />
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Container>
  );
}

export default VideoReview;
