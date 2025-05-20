"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Box,
  Typography,
  Stack,
  Popper,
  Paper,
  ClickAwayListener,
} from "@mui/material";

function HeaderLink({ title, href, children }) {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    if (children?.length) {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const isActive = pathname === href;

  return (
    <Box position="relative" onClick={handleClick}>
      {href ? (
        <Typography
          component={Link}
          href={href}
          sx={{
            textDecoration: "none",
            color: isActive ? "secondary.main" : "text.primary",
            fontWeight: 600,
            cursor: "pointer",
          }}
          variant="subtitle1"
        >
          {title}
        </Typography>
      ) : (
        <Typography
          sx={{
            color: "text.primary",
            fontWeight: 600,
            cursor: "pointer",
          }}
          variant="subtitle1"
        >
          {title}
        </Typography>
      )}

      {children?.length > 0 && (
        <Popper
          open={open}
          anchorEl={anchorEl}
          placement="bottom-start"
          sx={{ zIndex: 100 }}
        >
          <ClickAwayListener onClickAway={handleClose}>
            <Paper elevation={3}>
              <Stack p={1}>
                {children.map((child) => (
                  <Typography
                    key={child.href}
                    component={Link}
                    href={child.href}
                    sx={{
                      px: 2,
                      py: 1,
                      color: "text.primary",
                      textDecoration: "none",
                      "&:hover": {
                        color: "secondary.main",
                      },
                    }}
                  >
                    {child.title}
                  </Typography>
                ))}
              </Stack>
            </Paper>
          </ClickAwayListener>
        </Popper>
      )}
    </Box>
  );
}

export default HeaderLink;
