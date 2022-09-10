import React from "react";
import Link from "next/link";
import { MainMenuLinks } from "../../data/MainMenu.tsx";
import DarkMode from "../../components/Misc/DarkMode/DarkMode.tsx";
import Image from "next/image";
import { CssVarsProvider } from "@mui/joy/styles";

import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import TextField from "@mui/joy/TextField";
import Box, { BoxProps } from "@mui/joy/Box";
import Button from "@mui/joy/Button";

// Icons import
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import MenuIcon from "@mui/icons-material/Menu";

const Header = (props: BoxProps) => (
  <Box
    component="header"
    className="Header"
    {...props}
    sx={[
      {
        p: 2,
        gap: 2,
        bgcolor: "background.componentBg",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gridColumn: "1 / -1",
        borderBottom: "1px solid",
        borderColor: "divider",
        // position: 'sticky',
        top: 0,
        zIndex: 1100,
        // boxShadow: "md",
      },
      ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
    ]}
  />
);

export default function MainMenu() {
  return (
    <>
      {/* <nav>
          {MainMenuLinks.map((link, index) => {
            return (
              <ul>
                <Link href={link.path}>
                  <li key={index}><a>{link.name}</a></li>
                </Link>
              </ul>
            );
          })}
      </nav> */}

      <Header>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1.5,
          }}
        >
          <IconButton
            variant="outlined"
            size="sm"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Image
            src="/nixby.in-logo.png"
            height={50}
            width={150}
            alt="Nixby Media"
          />
        </Box>

        <TextField
          size="sm"
          placeholder="Search anything…"
          startDecorator={<SearchRoundedIcon color="primary" />}
          endDecorator={
            <IconButton variant="outlined" size="sm" color="neutral">
              <Typography
                fontWeight="lg"
                fontSize="sm"
                textColor="text.tertiary"
              >
                /
              </Typography>
            </IconButton>
          }
          sx={{
            flexBasis: "500px",
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
        />
        <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
          {MainMenuLinks.map((link, index) => {
            return (
              <Link href={link.path}>
                <Button variant="soft" key={index}>
                  <a>{link.name}</a>
                </Button>
              </Link>
            );
          })}
          <CssVarsProvider>
            <DarkMode />
          </CssVarsProvider>
        </Box>
      </Header>
    </>
  );
}
