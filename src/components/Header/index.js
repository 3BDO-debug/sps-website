"use client";
import React, { useState } from "react";
// @Mui
import {
  Box,
  Container,
  IconButton,
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
//
import Logo from "../Logo";
import HeaderSearch from "./HeaderSearch";
import HeaderLink from "./HeaderLink";
import { Icon } from "@iconify/react";
import SideDrawer from "./SideDrawer";

// ---------------------------------------------------------------------

function Header() {
  const [sideDrawer, triggerSideDrawer] = useState(false);

  const HEADER_LINKS = [
    { title: "Home", href: "/" },
    { title: "Products", children: [], href: "/products" },
    { title: "Collection", href: "/collection" },
    { title: "About Us", href: "/about-us" },
  ];

  const theme = useTheme();
  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        bgcolor: "rgba(255, 255, 255, 0.9)",
        py: 2,
        position: "fixed",
        top: 20,
        zIndex: 10,
        width: "80%",
        left: "50%",
        transform: "translateX(-50%)",
        borderRadius: 7,
      }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box sx={{ width: 130 }}>
            <Logo />
          </Box>

          {/* Header Links */}
          {isMdOrLarger && (
            <Stack direction="row" alignItems="center" gap={3}>
              {HEADER_LINKS.map((_, index) => (
                <HeaderLink key={index} title={_.title} href={_.href} />
              ))}
            </Stack>
          )}
          {/* Actions */}
          <Stack direction="row" alignItems="center" gap={1}>
            <Tooltip title="Cart">
              <IconButton>
                <Icon icon="proicons:cart" style={{ width: 30, height: 30 }} />
              </IconButton>
            </Tooltip>
            {!isMdOrLarger && (
              <Tooltip title="Menu">
                <IconButton onClick={() => triggerSideDrawer(!sideDrawer)}>
                  <Icon icon="jam:menu" style={{ width: 30, height: 30 }} />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Search Product">
              <IconButton>
                <Icon icon="icon-park-outline:search" />
              </IconButton>
            </Tooltip>
          </Stack>
        </Stack>
      </Container>
      <SideDrawer
        isTriggered={sideDrawer}
        closeHandler={() => triggerSideDrawer(false)}
        navLinks={HEADER_LINKS}
      />
    </Box>
  );
}

export default Header;
