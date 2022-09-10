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
          <Grid md={9} xs={12}>
            <Card variant="outlined">
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  flexWrap: "wrap",
                  // gap: 0.5,
                }}
              >
                <Grid md={3} xs={12}>
                  <MobileDetailsImage />
                </Grid>
                <Grid md={9} xs={12}>
                  <Typography
                    level="h1"
                    sx={{
                      p: 1,
                    }}
                  >
                    Samsung Galaxy S10
                  </Typography>
                  <List
                    row
                    variant="outlined"
                    sx={{
                      display: "flex",
                      borderRadius: "sm",
                      flexGrow: 1,
                      flexWrap: "wrap",
                      mx: "auto",
                      p: 1,
                      "--List-decorator-size": "28px",
                      "--List-item-paddingY": "1rem",
                    }}
                  >
                    <ListItem
                      variant="outlined"
                      sx={{ borderRadius: "sm", margin: 1 }}
                    >
                      <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                        <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                      </ListItemDecorator>
                      Mabel Boyle
                    </ListItem>
                    <ListItem
                      variant="outlined"
                      sx={{ borderRadius: "sm", margin: 1 }}
                    >
                      <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                        <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                      </ListItemDecorator>
                      Mabel Boyle
                    </ListItem>
                    <ListItem
                      variant="outlined"
                      sx={{ borderRadius: "sm", margin: 1 }}
                    >
                      <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                        <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                      </ListItemDecorator>
                      Mabel Boyle
                    </ListItem>
                    <ListItem
                      variant="outlined"
                      sx={{ borderRadius: "sm", margin: 1 }}
                    >
                      <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                        <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                      </ListItemDecorator>
                      Mabel Boyle
                    </ListItem>
                    <ListItem
                      variant="outlined"
                      sx={{ borderRadius: "sm", margin: 1 }}
                    >
                      <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                        <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                      </ListItemDecorator>
                      Mabel Boyle
                    </ListItem>
                    <ListItem
                      variant="outlined"
                      sx={{ borderRadius: "sm", margin: 1 }}
                    >
                      <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                        <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                      </ListItemDecorator>
                      Mabel Boyle
                    </ListItem>
                    <ListItem
                      variant="outlined"
                      sx={{ borderRadius: "sm", margin: 1 }}
                    >
                      <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                        <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                      </ListItemDecorator>
                      Mabel Boyle
                    </ListItem>
                    <ListItem
                      variant="outlined"
                      sx={{ borderRadius: "sm", margin: 1 }}
                    >
                      <ListItemDecorator sx={{ alignSelf: "flex-start" }}>
                        <Avatar size="sm" src="/static/images/avatar/1.jpg" />
                      </ListItemDecorator>
                      Mabel Boyle
                    </ListItem>
                  </List>
                </Grid>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
