"use client";
import React from "react";
// mui
import {
  Box,
  Card,
  CardContent,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import Iconify from "./Iconify";

function CategoryCard({ items, title, img, height }) {
  return (
    <Card
      sx={{
        backgroundImage: `url(${img.src})`,
        backgroundSize: "cover",
        borderRadius: 4,
      }}
    >
      <CardContent>
        <Paper sx={{ borderRadius: 10, width: "fit-content", paddingX: 4 }}>
          <Typography variant="h3" sx={{ color: "black" }} align="center">
            {items}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ color: "black", fontWeight: "bold", mt: -1.5 }}
            align="center"
          >
            Items
          </Typography>
        </Paper>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: `${height}vh`,
          }}
        >
          <Typography variant="h1" sx={{ color: "grey.0" }}>
            {title}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton
            sx={{
              bgcolor: "grey.0",
            }}
          >
            <Iconify icon="icon-park-outline:right" color="grey.900" />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
}

export default CategoryCard;
