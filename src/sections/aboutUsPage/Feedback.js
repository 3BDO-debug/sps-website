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
  Avatar,
  Box,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Rating,
  Container,
} from "@mui/material";
// components
import Iconify from "@/components/Iconify";
// assets
import cloud from "../../assets/cloud.png";

// -----------------------------------------------------------------

const ReviewCard = ({ review, avatar, name }) => {
  return (
    <Box sx={{ px: 5, py: 3 }}>
      <Paper
        sx={{
          px: 3,
          py: 4,
          borderRadius: 7,
          position: "relative",
          "&:hover": {
            border: 1,
            borderColor: "primary.main",
            "& .review-text": {
              WebkitLineClamp: "unset",
              overflow: "visible",
              whiteSpace: "normal",
            },
          },
        }}
        elevation={20}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Iconify
              icon="icon-park-outline:quote"
              sx={{
                float: "left",
                width: 70,
                height: 70,
                color: "primary.main",
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h6"
              color="text.primary"
              className="review-text"
              align="center"
              sx={{
                fontWeight: "bold",
                display: "-webkit-box",
                overflow: "hidden",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 5,
                // direction: currentLang.value === "ar" ? "rtl" : "ltr",
              }}
            >
              {review}
            </Typography>
          </Grid>
          {/* Personal Info */}
          <Grid item xs={12}>
            <Stack direction="row" gap={2} alignItems="center" sx={{ pl: 7 }}>
              <Avatar src={avatar} sx={{ width: 60, height: 60 }} />
              <Stack>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {name}
                </Typography>
                <Rating
                  name="read-only"
                  value={5}
                  readOnly
                  sx={{ color: "primary.main" }}
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

// -----------------------------------------------------------------

function Feedback() {
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

  const reviewData = [
    {
      review:
        "This makeup foundation is incredible! It blends so smoothly and lasts all day. Highly recommend it!",
      avatar: "",
      name: "Emily Roberts",
    },
    {
      review:
        "The lipstick shades are absolutely stunning! I love how moisturizing they feel on my lips.",
      avatar: "",
      name: "Sophia Martinez",
    },
    {
      review:
        "I’ve tried a lot of mascaras, but this one beats them all. My lashes look fuller and longer!",
      avatar: "",
      name: "Chloe Johnson",
    },
    {
      review:
        "The eyeshadow palette has such vibrant colors, and they stay put all day without smudging.",
      avatar: "",
      name: "Mia Brown",
    },
    {
      review:
        "The primer works wonders! My skin feels smooth, and my makeup looks flawless all day.",
      avatar: "",
      name: "Olivia Wilson",
    },
  ];

  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h1">Feedback from our customers</Typography>
            {!isMobile && <Image src={cloud} width={500} alt="Cloud Image" />}
          </Stack>
        </Grid>
        <Grid item xs={12} style={{ overflow: "hidden" }}>
          <Slider ref={carouselRef} {...settings}>
            {reviewData.map((data, index) => (
              <ReviewCard
                key={index}
                category={data.category}
                review={data.review}
                avatar={data.avatar}
                name={data.name}
                role={data.role}
              />
            ))}
          </Slider>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Feedback;
