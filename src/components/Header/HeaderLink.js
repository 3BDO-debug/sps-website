"use client";
import React, { useState } from "react";
// next
import { usePathname } from "next/navigation";
import Link from "next/link";
// @Mui
import { alpha, Stack, Typography, useTheme } from "@mui/material";
// @Iconify
import { Icon } from "@iconify/react";

// ---------------------------------------------------------------------------------------------

function HeaderLink({ title, href }) {
  const location = usePathname();

  const theme = useTheme();

  const [hovered, setIsHovered] = useState(false);

  return (
    <Stack
      gap={1}
      direction="row"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      alignItems="center"
    >
      <Icon
        style={{
          color:
            hovered && href !== location
              ? alpha(theme.palette.text.primary, 0.5)
              : theme.palette.primary.main,
          opacity: hovered || href === location ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        icon="fa6-solid:chess-queen"
      />
      <Typography
        sx={{
          textDecoration: "none",
          color: location === href ? "primary.main" : "text.primary",
          fontWeight: 600,
        }}
        component={Link}
        href={href}
        variant="subtitle1"
      >
        {title}
      </Typography>
    </Stack>
  );
}

export default HeaderLink;
