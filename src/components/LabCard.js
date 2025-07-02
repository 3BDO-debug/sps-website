"use client";
import {
  Box,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Image from "next/image";
import React from "react";
import Iconify from "./Iconify";

function LabCard({ image, name, description, specifications }) {
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box sx={{ bgcolor: "primary.main", p: 2, borderRadius: 2 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // vertical center
            }}
          >
            <Image
              src={image}
              alt="device image"
              width={isMdOrLarger ? 270 : 250}
              height={200}
              style={{ borderRadius: 15 }}
            />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 7 }}>
          <Stack gap={1}>
            <Typography variant="h4" sx={{ color: "grey.0" }}>
              {name}
            </Typography>
            {description && (
              <Typography
                sx={{
                  color: "grey.0",
                  wordBreak: "break-word",
                }}
              >
                {description}
              </Typography>
            )}
            {specifications && (
              <Accordion
                sx={{
                  color: "primary.main",
                  bgcolor: "grey.400",
                }}
              >
                <AccordionSummary
                  expandIcon={<Iconify icon="lucide:chevron-down" />}
                >
                  <Typography fontWeight="bold">Specifications</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {specifications.split(",").map((spec, index) => (
                    <Typography key={index} sx={{ wordBreak: "break-word" }}>
                      • {spec.trim()}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LabCard;
