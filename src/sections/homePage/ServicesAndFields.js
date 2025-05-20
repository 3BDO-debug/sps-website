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
import construction from "@/assets/icons/construction.png";
import design from "@/assets/icons/design.png";
import engineering from "@/assets/icons/engineering.png";
import feasibility from "@/assets/icons/feasibility.png";
import management from "@/assets/icons/management.png";
import operation from "@/assets/icons/operation.png";
import procurement from "@/assets/icons/procurement.png";
import security from "@/assets/icons/security.png";
import planning from "@/assets/icons/planning.png";

function ServicesAndFields() {
  const theme = useTheme();
  const [currentSlide, setCurrentSlide] = useState("services");

  const bgImage = currentSlide === "services" ? servicesBg.src : fieldsBg.src;

  const servicesCardsData = [
    {
      color: "primary.main",
      image: feasibility,
      title: "Feasibility",
      items: [
        "Master Planning",
        "Feasibility Studies",
        "Transport & Traffic Planning",
      ],
    },
    {
      color: "primary.main",
      image: planning,
      title: "Planning",
      items: [
        "Architectural & Interior Design",
        "Urban Design",
        "Sustainability & Environmental ",
      ],
    },
    {
      color: "primary.main",
      image: design,
      title: "Design",
      items: [
        "Structural Engineering",
        "Mechanical & Electrical Engineering",
        "Infrastructure & Water Systems Design",
      ],
    },
    {
      color: "primary.main",
      image: procurement,
      title: "Procurement",
      items: [
        "Procurement Strategy",
        "Tender Evaluation",
        "Contract Management",
      ],
    },
    {
      color: "primary.main",
      image: construction,
      title: "Construction",
      items: ["Construction Management", "Site Supervision", "Quality Control"],
    },
    {
      color: "primary.main",
      image: operation,
      title: "Operation & Maintenance",
      items: [
        "Facility Management",
        "Maintenance Planning",
        "Technology Transfer & Training",
      ],
    },
  ];

  const fieldsCardsData = [
    {
      color: "secondary.main",
      image: engineering,
      title: "Engineering",
      items: [
        "Architectural & Interior Design",
        "Urban Design",
        "Sustainability & Environmental ",
      ],
    },
    {
      color: "secondary.main",
      image: management,
      title: "Management",
      items: [
        "Structural Engineering",
        "Mechanical & Electrical Engineering",
        "Infrastructure & Water Systems Design",
      ],
    },
    {
      color: "secondary.main",
      image: security,
      title: "Security",
      items: [
        "Procurement Strategy",
        "Tender Evaluation",
        "Contract Management",
      ],
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
                image={card.image}
                color={card.color}
                title={card.title}
                item1={card.items[0]}
                item2={card.items[1]}
                item3={card.items[2]}
              />
            ))}
          </Slider>
        </Container>
      </Box>
    </Box>
  );
}

export default ServicesAndFields;
