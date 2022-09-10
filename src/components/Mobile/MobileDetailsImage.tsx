import React from "react";

import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";

export default function MobileDetailsImage() {
  return (
    <>
      <Card variant="outlined">
        <Box>
          <Typography level="h2" fontSize="md" sx={{ alignSelf: "flex-start" }}>
            Samsung Galaxy S2
          </Typography>
          <Typography level="body2">April 24 to May 02, 2021</Typography>
        </Box>
        <img
          src="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg" // Route of the image file
          height={200} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        <Box sx={{ display: "flex" }}>
          <div>
            <Typography level="body3">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              $2900
            </Typography>
          </div>
        </Box>
      </Card>
    </>
  );
}
