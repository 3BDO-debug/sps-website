"use client";
import React from "react";
// Next
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// @Mui
import {
  Box,
  Drawer,
  List,
  ListItem,
  Divider,
  styled,
  Popper,
  ClickAwayListener,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
// components
import CustomButton from "../CustomButton";
// assets
import logo from "@/assets/logo.png";

// ------------------------------------------------------------------------------------------------------------------

function SideDrawer({ isTriggered, closeHandler, navLinks }) {
  const NavLink = styled(Link)(({ theme }) => ({
    ...theme.typography.subtitle1,
    color: theme.palette.text.primary,
    textDecoration: "none",
  }));

  const { push } = useRouter();

  return (
    <Drawer anchor="left" open={isTriggered} onClose={closeHandler}>
      <Box
        style={{ width: 250 }}
        role="presentation"
        onClick={closeHandler}
        onKeyDown={closeHandler}
      >
        {/* Logo Section */}
        <Box sx={{ padding: "16px", textAlign: "center" }}>
          {/* Replace with your logo */}
          <Image src={logo} alt="logo" style={{ width: 200, height: 60 }} />
        </Box>
        <Divider />
        {/* Drawer Items */}
        <List>
          {navLinks.map((link, index) => {
            if (link.title === "What We Do") {
              return null; // skip rendering this link
            }

            const listItem = (
              <ListItem
                button
                component={link.href ? "a" : "div"}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                {link.title}
              </ListItem>
            );

            return link.href ? (
              <NavLink key={index} href={link.href} passHref>
                {listItem}
              </NavLink>
            ) : (
              <React.Fragment key={index}>{listItem}</React.Fragment>
            );
          })}
          <Stack sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              component={Link}
              href={"/what-we-do/services"}
              sx={{
                textDecoration: "none",
                fontWeight: 600,
                cursor: "pointer",
                textAlign: "center",
                mb: 1,
                color: "black",
              }}
              variant="subtitle1"
            >
              Services
            </Typography>
            <Typography
              component={Link}
              href={"/what-we-do/fields"}
              sx={{
                textDecoration: "none",
                fontWeight: 600,
                cursor: "pointer",
                textAlign: "center",
                color: "black",
              }}
              variant="subtitle1"
            >
              Fields
            </Typography>
          </Stack>
        </List>
        <Divider sx={{ my: 2 }} />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CustomButton
            label="Contact Us"
            bgColor="grey.0"
            color="secondary.main"
            onClick={() => push("/contact-us")}
          />
        </Box>
      </Box>
    </Drawer>
  );
}

export default SideDrawer;
