import React from "react";

import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";

export default function MobileDetailsSidebar() {
  return (
    <>
      <Card variant="outlined">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 0.5,
          }}
        >
          <Typography level="h2" fontSize="md" sx={{ alignSelf: "flex-start" }}>
            Yosemite National Park
          </Typography>
          <Typography level="body2">April 24 to May 02, 2021</Typography>
        </Box>

        <Box sx={{ display: "flex" }}>
          <div>
            <Typography level="body3">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              $2900
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
    </>
  );
}
