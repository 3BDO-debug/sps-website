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
            <Box sx={{ mt: 5, paddingLeft: isMdOrLarger ? 0 : 2 }}>
              <Stack direction="row" gap={1}>
                <Typography variant="h3" sx={{ color: "primary.main" }}>
                  OUR WORKING EXPERIENCE
                </Typography>
                <Iconify
                  icon="fa:circle"
                  color="secondary.main"
                  sx={{ fontSize: 20 }}
                />
              </Stack>
            </Box>
            <Box
              sx={{
                mt: 2,
                width: isMdOrLarger ? "80%" : "100%",
                paddingLeft: isMdOrLarger ? 0 : 2,
              }}
            >
              <Typography variant="caption" sx={{ color: "primary.main" }}>
                Smart Power For Energy Services Co. is an EPC contractor with
                accumulated experience in the field of electrical consultancy
                services, engineering of high voltage substations, testing and
                commissioning of high and medium voltage substations and power
                stations, design and procurement of control, protection,
                planning and designs of LV & MV distribution networks,
                communication and SCADA systems for distribution & transmission
                networks and generating stations to procurement and construction
                management of power projects.
              </Typography>
            </Box>
            <Box
              sx={{
                mt: 2,
                width: isMdOrLarger ? "80%" : "100%",
                paddingLeft: isMdOrLarger ? 0 : 2,
              }}
            >
              <Typography variant="caption" sx={{ color: "primary.main" }}>
                Smart Power for Energy Services (SPS) specialist also, for the
                renewable energy projects and electrical substation projects up
                to 500 KV and L.V projects. - Since then, we’ve been certified
                by a lot of multinational and local companies like Siemens, GE
                (USA, France), Schneider Electric (Germany, Egypt, KSA), TSK,
                ANSALDO, ORASCOM, ALSTOM, LARSEN & TOUBRO (L&T India), HYUNDAI,
                HYOSUNG, CCC, etc.
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ color: "primary.main", my: 2 }}>
              SPS records
            </Typography>
            <Stack
              gap={2}
              sx={{
                bgcolor: "primary.main",
                width: isMdOrLarger ? "80%" : "100%",
                padding: 3,
              }}
            >
              <Typography variant="subtitle2" sx={{ color: "grey.0" }}>
                6* 500 KV
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "grey.0" }}>
                8* 220KV
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "grey.0" }}>
                5* 66 KV
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "grey.0" }}>
                + 50 Power transformers various rating levels from 125 MVA up to
                750 MVA (Erection, Testing & Commissioning).
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "grey.0" }}>
                +275 MW of photovoltaic (Erection, Testing & Commissioning).
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "grey.0" }}>
                +9 Power Plants (Engineering, Erection, Testing &
                Commissioning).
              </Typography>
            </Stack>
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
