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
  useMediaQuery,
  useTheme,
} from "@mui/material";
// assets
import experience from "@/assets/experience.png";
// components
import Iconify from "@/components/Iconify";

function Experience() {
  const theme = useTheme();

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box sx={{ paddingLeft: isMdOrLarger ? 10 : 0 }}>
      <Grid container>
        <Grid size={{ xs: 12, md: 5 }}>
          <Stack>
            <Box sx={{ mt: 10, paddingLeft: isMdOrLarger ? 0 : 2 }}>
              <Stack direction="row" gap={1}>
                <Typography variant="h3" sx={{ color: "primary.main" }}>
                  OUR 10 YEARS WORKING
                </Typography>
                <Iconify
                  icon="fa:circle"
                  color="secondary.main"
                  sx={{ fontSize: 20 }}
                />
              </Stack>
              <Typography variant="h3" sx={{ color: "primary.main" }}>
                EXPERIENCE DESIGN
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 3,
                width: isMdOrLarger ? "80%" : "100%",
                paddingLeft: isMdOrLarger ? 0 : 2,
              }}
            >
              <Typography variant="caption" sx={{ color: "primary.main" }}>
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUER ADIPISCING ELIT, SED
                DIAM NONUMMY NIBH EUISMOD TINCIDUNT UT LAOREET DOLORE MAGNA
                ALIQUAM ERAT VOLUTPAT. UT WISI ENIM AD MINIM VENIAM, QUIS
                NOSTRUD EXERCI TATION ULLAMCORPER SUSCIPIT LOBORTIS NISL UT
              </Typography>
            </Box>
            <Box
              sx={{
                bgcolor: "primary.main",
                width: isMdOrLarger ? "80%" : "100%",
                mt: 7,
                padding: 4,
              }}
            >
              <Stack direction="row" alignItems="center" gap={4}>
                <Typography variant="h3" sx={{ color: "grey.0" }}>
                  10
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "grey.0" }}>
                  LOREM IPSUM DOLOR SIT AMET, CONS
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={4} sx={{ mt: 3 }}>
                <Typography variant="h3" sx={{ color: "grey.0" }}>
                  300
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "grey.0" }}>
                  LOREM IPSUM DOLOR SIT AMET, CONS
                </Typography>
              </Stack>
              <Stack direction="row" alignItems="center" gap={4} sx={{ mt: 3 }}>
                <Typography variant="h3" sx={{ color: "grey.0" }}>
                  20+
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "grey.0" }}>
                  LOREM IPSUM DOLOR SIT AMET, CONS
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Image
            src={experience}
            alt="experience"
            style={{ height: "100%", width: "100%" }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Experience;
