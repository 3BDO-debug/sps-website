import React from "react";
// next
import Image from "next/image";
// mui
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// assets
import ourClientsBg from "@/assets/ourClientsBg.jpg";
import client1 from "@/assets/clientsLogos/1.png";
import client2 from "@/assets/clientsLogos/2.png";
import client3 from "@/assets/clientsLogos/3.png";
import client4 from "@/assets/clientsLogos/4.png";
import client5 from "@/assets/clientsLogos/5.png";
import client6 from "@/assets/clientsLogos/6.png";
import client7 from "@/assets/clientsLogos/7.png";
import client8 from "@/assets/clientsLogos/8.png";
import client9 from "@/assets/clientsLogos/9.png";
import client10 from "@/assets/clientsLogos/10.png";
import client11 from "@/assets/clientsLogos/11.png";
import client12 from "@/assets/clientsLogos/12.png";

function OurClients() {
  const theme = useTheme();

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const clientImages = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
    client11,
    client12,
  ];
  return (
    <Box
      sx={{
        backgroundImage: `url(${ourClientsBg.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh",
        "&::before": {
          content: '""',
          position: "absolute",
          width: "100%",
          height: "60vh",
          bgcolor: alpha(theme.palette.secondary.main, 0.6),
          zIndex: 1,
        },
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Stack>
          <Stack>
            <Typography
              variant="h2"
              sx={{ color: "grey.0", mt: 5, textAlign: "center" }}
            >
              Our Clients Sample
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "grey.0", textAlign: "center" }}
            >
              SPS EXCELS IN DELIVERING LARGE-SCALE, MULTIDISCIPLINARY
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{ color: "grey.0", textAlign: "center" }}
            >
              PROJECTS ACROSS A WIDE RANGE OF SECTORS.
            </Typography>
          </Stack>
        </Stack>
      </Container>
      <Box
        sx={{
          bgcolor: "grey.0",
          position: "relative",
          zIndex: 2,
          mt: 10,
          paddingX: isMdOrLarger ? 30 : 5,
        }}
      >
        <Grid container spacing={3}>
          {clientImages.map((img, index) => (
            <Grid item size={{ xs: 12, md: 3 }} key={index}>
              <Image
                src={img}
                alt={`Client ${index + 1}`}
                style={{
                  width: isMdOrLarger ? 200 : 100,
                  height: isMdOrLarger ? 80 : 50,
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}

export default OurClients;
