import React, { useState } from "react";
// mui
import {
  Box,
  Button,
  Stack,
  Typography,
  useTheme,
  alpha,
  Container,
} from "@mui/material";
// iconify
import { Icon } from "@iconify/react";
// react-slick
import Slider from "react-slick";
// Slick Carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// components
import InfoCard from "@/components/InfoCard";
// assets
import servicesBg from "@/assets/servicesBg.png";
import fieldsBg from "@/assets/fieldsBg.png";

function ServicesAndFields() {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState("services");

  const bgImage = currentSlide === "services" ? servicesBg.src : fieldsBg.src;

  const servicesCardsData = [
    {
      color: "primary.main",
      icon: "material-symbols:engineering",
      title: "Engineering",
    },
    {
      color: "primary.main",
      icon: "emojione-monotone:building-construction",
      title: "Construction",
    },
    {
      color: "primary.main",
      icon: "pajamas:rocket-launch",
      title: "Testing & Commissioning",
    },
    {
      color: "primary.main",
      icon: "fa:group",
      title: "Staffing",
    },
  ];

  const fieldsCardsData = [
    {
      color: "secondary.main",
      icon: "game-icons:power-lightning",
      title: "Power Plants & Substations",
    },
    {
      color: "secondary.main",
      icon: "hugeicons:solar-panel-02",
      title: "Solar Energy",
    },
    {
      color: "secondary.main",
      icon: "fa6-solid:oil-well",
      title: "Oil & Gas",
    },
    {
      color: "secondary.main",
      icon: "mdi:transportation",
      title: "Transportation",
    },
    {
      color: "secondary.main",
      icon: "iconoir:industry",
      title: "Industry",
    },
    {
      color: "secondary.main",
      icon: "gis:story-map",
      title: "Abroad",
    },
  ];

  const [cardsData, setCardsData] = useState(servicesCardsData);

  const settings = {
    infinite: true,
    slidesToShow: currentSlide === "services" ? 4 : 3,
    slidesToScroll: 1,
    // rtl: currentLang.value === "ar", // Adjust direction based on current language
    nextArrow: (
      <Icon
        color="white"
        // icon={currentLang.value === "ar" ? "bx:left-arrow" : "bx:right-arrow"}
        icon="line-md:chevron-right"
      />
    ),
    prevArrow: (
      <Icon
        color="white"
        // icon={currentLang.value === "ar" ? "bx:right-arrow" : "bx:left-arrow"}
        icon="line-md:chevron-left"
      />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "75vh",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: "75vh",
            bgcolor:
              currentSlide === "fields"
                ? alpha(theme.palette.secondary.main, 0.3)
                : "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            sx={{ mt: 10, border: 1.5, borderColor: "grey.0" }}
          >
            <Button
              onClick={() => {
                setCurrentSlide("services"), setCardsData(servicesCardsData);
              }}
              variant="contained"
              sx={{
                borderRadius: 0,
                bgcolor:
                  currentSlide === "services" ? "inheret" : "transparent",
              }}
            >
              Services
            </Button>
            <Button
              onClick={() => {
                setCurrentSlide("fields"), setCardsData(fieldsCardsData);
              }}
              variant="contained"
              sx={{
                borderRadius: 0,
                bgcolor:
                  currentSlide === "fields" ? "secondary.main" : "transparent",
              }}
            >
              Fields
            </Button>
          </Stack>
        </Box>
        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 2,
            mt: 10,
            paddingX: 3,
          }}
        >
          <Slider {...settings}>
            {cardsData.map((card, index) => (
              <InfoCard
                key={index}
                icon={card.icon}
                color={card.color}
                title={card.title}
              />
            ))}
          </Slider>
        </Container>
      </Box>
    </Box>
  );
}

export default ServicesAndFields;
