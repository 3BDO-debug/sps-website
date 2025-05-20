import React from "react";
// next
import { useRouter } from "next/navigation";
// mui
import {
  Box,
  Container,
  Stack,
  Typography,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// assets
import ourProjectsBg from "@/assets/ourProjectsBg.png";
import project1 from "@/assets/homeProjects/project1.png";
import project2 from "@/assets/homeProjects/project2.png";
import project3 from "@/assets/homeProjects/project3.png";
// components
import ProjectAndLabCard from "@/components/ProjectAndLabCard";
import CustomButton from "@/components/CustomButton";

function OurProjects() {
  const theme = useTheme();

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const { push } = useRouter();

  return (
    <Box>
      <Box sx={{ bgcolor: "secondary.main", height: 50 }} />
      <Box
        sx={{
          backgroundImage: `url(${ourProjectsBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "75vh",
          "&::before": {
            content: '""',
            position: "absolute",
            width: "100%",
            height: isMdOrLarger ? "75vh" : "180vh",
            bgcolor: alpha(theme.palette.secondary.main, 0.3),
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
                Our Projects
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
            <Box sx={{ my: 5, display: "flex", justifyContent: "center" }}>
              <Stack direction={isMdOrLarger ? "row" : "column"} gap={3}>
                <ProjectAndLabCard
                  image={project1}
                  description="Scope is Installation testing and Commissioning"
                />
                <ProjectAndLabCard
                  image={project2}
                  description="Scope is Installation testing and Commissioning"
                />
                <ProjectAndLabCard
                  image={project3}
                  description="Scope is Installation testing and Commissioning"
                />
                <Box
                  sx={{
                    bgcolor: "secondary.main",
                    width: isMdOrLarger ? 400 : 280,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <CustomButton
                      label="See more"
                      color="grey.0"
                      bgColor="secondary.main"
                      onClick={() => push("./projects")}
                    />
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default OurProjects;
