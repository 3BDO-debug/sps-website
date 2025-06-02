"use client";
import React, { useState } from "react";
// next
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
// @Mui
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Stack,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";
//
// import Logo from "../Logo";
import HeaderLink from "./HeaderLink";
import { Icon } from "@iconify/react";
import SideDrawer from "./SideDrawer";
// assets
import logo from "@/assets/logo.png";
import CustomButton from "../CustomButton";

// ---------------------------------------------------------------------

function Header() {
  const [sideDrawer, triggerSideDrawer] = useState(false);

  const HEADER_LINKS = [
    { title: "Home", href: "/" },
    {
      title: "What We Do",
      children: [
        { title: "Services", href: "/what-we-do/services" },
        { title: "Fields", href: "/what-we-do/fields" },
      ],
    },
    { title: "Projects", href: "/projects" },
    { title: "Lab", href: "/lab" },
    { title: "Why SPS", href: "/why-sps" },
    { title: "Careers", href: "/careers" },
  ];

  const theme = useTheme();

  const isMdOrLarger = useMediaQuery(theme.breakpoints.up("md"));

  const { push } = useRouter();

  const pathname = usePathname();

  return (
    <Box
      sx={{
        py: 1,
        position: "fixed",
        top: 0,
        zIndex: 10,
        width: "100%",
        bgcolor: "white",
      }}
    >
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={logo} alt="logo" style={{ width: 250, height: 80 }} />
        </Box>
        <Divider sx={{ my: 2 }} />
        <Stack direction="row" justifyContent="center" alignItems="center">
          {/* Header Links */}
          {isMdOrLarger && (
            <Stack direction="row" alignItems="center" gap={15}>
              {HEADER_LINKS.map((link, index) => (
                <HeaderLink
                  key={index}
                  title={link.title}
                  href={link.href}
                  children={link.children}
                />
              ))}
            </Stack>
          )}
          {/* Actions */}
          <Stack direction="row" alignItems="center" gap={1}>
            {!isMdOrLarger && (
              <Tooltip title="Menu">
                <IconButton onClick={() => triggerSideDrawer(!sideDrawer)}>
                  <Icon icon="mi:menu" style={{ width: 40, height: 40 }} />
                </IconButton>
              </Tooltip>
            )}
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
