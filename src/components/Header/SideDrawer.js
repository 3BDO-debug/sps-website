"use client";
import React from "react";
// Next
import Link from "next/link";
import { useRouter } from "next/navigation";
// Iconify
import { Icon } from "@iconify/react";
// @Mui
import {
  Box,
  Drawer,
  List,
  ListItem,
  Divider,
  IconButton,
  Button,
  styled,
} from "@mui/material";
//
import Logo from "../Logo";

// ------------------------------------------------------------------------------------------------------------------

function SideDrawer({ isTriggered, closeHandler, navLinks }) {
  const NavLink = styled(Link)(({ theme }) => ({
    ...theme.typography.subtitle1,
    color: theme.palette.text.primary,
    textDecoration: "none",
  }));

  const router = useRouter();

  return (
    <Drawer anchor="left" open={isTriggered} onClose={closeHandler}>
      <div
        style={{ width: 250 }}
        role="presentation"
        onClick={closeHandler}
        onKeyDown={closeHandler}
      >
        {/* Logo Section */}
        <Box sx={{ padding: "16px", textAlign: "center" }}>
          {/* Replace with your logo */}
          <Logo />
        </Box>

        <Divider />

        {/* Drawer Items */}
        <List>
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.href} passHref>
              <ListItem
                button
                component="a"
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {link.title}
              </ListItem>
            </NavLink>
          ))}
        </List>

        <Divider />

        {/* Social Media Section */}
        <div
          style={{ display: "flex", justifyContent: "center", padding: "16px" }}
        >
          <Box marginRight={1}>
            <IconButton
              onClick={() =>
                window.open("https://www.instagram.com/dt.lamisalkhawaja/")
              }
            >
              <Icon icon="skill-icons:instagram" width={30} height={30} />
            </IconButton>
          </Box>

          <Box marginRight={1}>
            <IconButton
              onClick={() =>
                window.open(
                  "https://www.youtube.com/watch?v=fEEfXSqph5E&feature=youtu.be"
                )
              }
            >
              <Icon icon="logos:youtube-icon" width={30} height={30} />
            </IconButton>
          </Box>
        </div>
        <Divider />
        <div style={{ padding: "16px", textAlign: "center" }}>
          <Button
            variant="outlined"
            startIcon={
              <Icon
                icon="fluent:call-12-filled"
                // style={{
                //   marginLeft: currentLang.value === "ar" ? "10" : "0",
                //   marginRight: currentLang.value === "ar" ? "-10" : "0",
                // }}
              />
            }
            color="primary"
            size="medium"
            sx={{ mt: 2 }}
            onClick={() => router.push("/contact-us")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </Drawer>
  );
}

export default SideDrawer;
