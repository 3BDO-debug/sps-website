import React from "react";
// next
import Image from "next/image";
import { useRouter } from "next/navigation";
// mui
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Icon } from "@iconify/react";

function ProjectAndLabCard({
  id,
  image,
  name,
  width = 400,
  color = "secondary.main",
}) {
  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const { push } = useRouter();

  return (
    <Box
      sx={{
        bgcolor: color,
        width: isMdOrLarger ? width : 280,
        cursor: "pointer",
      }}
      onClick={() => push(`/project-details/${id}`)}
    >
      {image ? (
        <Image
          src={image}
          alt="project"
          height={350}
          width={isMdOrLarger ? width : 280}
        />
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center", // horizontal center
            alignItems: "center", // vertical center
            height: "37vh", // full viewport height (or any fixed height)
          }}
        >
          <Icon
            icon="material-symbols-light:hide-image-outline"
            fontSize={100}
            color="grey.0"
          />
        </Box>
      )}
      <Box sx={{ display: "flex", justifyContent: "flex-start", paddingY: 1 }}>
        <Stack direction="row" alignItems="center" gap={1}>
          <Box
            sx={{
              bgcolor: "grey.0",
              width: 5,
              height: "100%",
              ml: 2,
              borderRadius: 100,
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{ color: "grey.0", width: "90%" }}
          >
            {name}
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default ProjectAndLabCard;
