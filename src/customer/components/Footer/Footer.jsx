import { Grid, Button, Typography, Link } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div>
      <Grid
        className="bg-black text-white text-center mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">About</Button>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">Blog</Button>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">Press</Button>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">Jobs</Button>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">Partners</Button>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">Marketing</Button>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">Analytics</Button>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">Insights</Button>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">Support</Button>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">Guides</Button>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">API Status</Button>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">Terms & Conditions</Button>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">Privacy Policy</Button>
          </Typography>
          <Typography variant="body1" gutterBottom>
            <Button color="inherit">Disclaimer</Button>
          </Typography>
        </Grid>
      </Grid>

      <Grid container className="p-5 bg-black text-white text-center">
        <Grid item xs={12}>
          <Typography variant="body2" component="p" align="center">
            &copy; 2024. All rights reserved by Nikhil raghuwanshi
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
