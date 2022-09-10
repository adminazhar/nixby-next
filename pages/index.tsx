import React from "react";
import MainMenu from "../src/layouts/Header/MainMenu.tsx";
import Head from "next/head";

import Box from "@mui/joy/Box";
import Grid from "@mui/material/Unstable_Grid2";

import Card from "@mui/joy/Card";
import Button from "@mui/joy/Button";
import Typography from "@mui/joy/Typography";

import MobileDetailsImage from "../src/components/Mobile/MobileDetailsImage.tsx";
import MobileDetailsSidebar from "../src/layouts/Sidebar/MobileDetailsSidebar";

import Avatar from "@mui/joy/Avatar";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
export default function Home() {
  return (
    <>
      <Head>
        <title>HomePage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainMenu />
      <Box
        sx={{
          flexGrow: 1,
          mt: 0.5,
        }}
      >
        <Grid container spacing={1}>
          <Grid
            md={3}
            xs={12}
            sx={{
              // height: "100vh",
              // backgroundColor: "primary.dark",
              zIndex: -100,
            }}
          >
            <MobileDetailsSidebar />
          </Grid>
          <Grid
            md={9}
            xs={12}
            sx={{ display: "flex", flexDirection: "row", gap: 0.5 }}
          >
            <Grid md={3} xs={12}>
              <MobileDetailsImage />
            </Grid>
            <Grid md={9} xs={12}>
              <Card variant="soft">
                <List
                  row
                  variant="outlined"
                  sx={{
                    display: "flex",
                    borderRadius: "sm",
                    flexGrow: 0,
                    mx: "auto",
                    "--List-decorator-size": "48px",
                    "--List-item-paddingY": "1rem",
                  }}
                >
                  <ListItem>
                    <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                      <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                    </ListItemDecorator>
                    Mabel Boyle
                  </ListItem>
                  <ListDivider inset="gutter" />
                  <ListItem>
                    <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                      <Avatar size="sm" src="/static/images/avatar/2.jpg" />
                    </ListItemDecorator>
                    Boyd Burt
                  </ListItem>
                  <ListDivider inset="gutter" />
                  <ListItem>
                    <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                      <Avatar size="sm" src="/static/images/avatar/3.jpg" />
                    </ListItemDecorator>
                    Adam Tris
                  </ListItem>
                  <ListDivider inset="gutter" />
                  <ListItem>
                    <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                      <Avatar size="sm" src="/static/images/avatar/3.jpg" />
                    </ListItemDecorator>
                    Adam Tris
                  </ListItem>
                  <ListDivider inset="gutter" />
                  <ListItem>
                    <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                      <Avatar size="sm" src="/static/images/avatar/3.jpg" />
                    </ListItemDecorator>
                    Adam Tris
                  </ListItem>
                  <ListDivider inset="gutter" />
                  <ListItem>
                    <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                      <Avatar size="sm" src="/static/images/avatar/3.jpg" />
                    </ListItemDecorator>
                    Adam Tris
                  </ListItem>
                  <ListDivider inset="gutter" />
                  <ListItem>
                    <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                      <Avatar size="sm" src="/static/images/avatar/3.jpg" />
                    </ListItemDecorator>
                    Adam Tris
                  </ListItem>
                  <ListDivider inset="gutter" />
                  <ListItem>
                    <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                      <Avatar size="sm" src="/static/images/avatar/3.jpg" />
                    </ListItemDecorator>
                    Adam Tris
                  </ListItem>
                </List>

                <Box>
                  <Typography
                    level="h2"
                    fontSize="md"
                    sx={{ alignSelf: "flex-start" }}
                  >
                    Yosemite National Park
                  </Typography>
                  <Typography level="body2">
                    April 24 to May 02, 2021
                  </Typography>
                </Box>

                <Box sx={{ display: "flex" }}>
                  <div>
                    <Typography level="body3">Total price:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                      $900
                    </Typography>
                  </div>
                  <Button
                    variant="solid"
                    size="sm"
                    color="primary"
                    aria-label="Explore Bahamas Islands"
                    sx={{ ml: "auto", fontWeight: 600 }}
                  >
                    Explore
                  </Button>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
