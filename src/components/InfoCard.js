"use client"
import React from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// mui
import { Box, Stack, Typography } from "@mui/material";
import Iconify from "./Iconify";

function InfoCard({
  icon,
  color = "primary.main",
  title,
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  value,
}) {
  const { push } = useRouter();

  return (
    <Box
      onClick={() => push(`/projects?category=${value}`)}
      sx={{
        bgcolor: "grey.0",
        position: "relative",
        mx: 1,
        boxShadow: 3,
      }}
    >
      <Box sx={{ paddingY: 10 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Stack gap={1}>
            {icon && (
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Iconify icon={icon} sx={{ color: color, fontSize: 100 }} />
              </Box>
            )}
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="h4"
                sx={{ color: color, textAlign: "center" }}
              >
                {title}
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 3,
            paddingX: 10,
          }}
        >
          <Stack gap={2}>
            {[item1, item2, item3, item4, item5, item6, item7].map(
              (item, index) =>
                item && (
                  <Typography
                    key={index}
                    variant="subtitle1"
                    sx={{ color: color }}
                  >
                    {item}
                  </Typography>
                )
            )}
          </Stack>
        </Box>
      </Box>
      <Box sx={{ bgcolor: color, height: 7 }}></Box>
    </Box>
  );
}

export default InfoCard;
