"use client";
import React from "react";
// next
import Image from "next/image";
// mui
import { Box, Card, CardContent, Typography } from "@mui/material";

function WhyUsCard({ icon, title, description }) {
  return (
    <Card sx={{ borderRadius: 10, height: 300 }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "center", pt: 1 }}>
          <Image src={icon} alt="none" width={60} style={{}} />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h3" align="center" sx={{ width: "70%" }}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
          <Typography
            variant="subtitle1"
            sx={{ width: "80%", color: "grey.500" }}
          >
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

export default WhyUsCard;
