import React from "react";
import { Grid, Typography } from "@material-ui/core";

function AboutMe() {
  return (
    <div
      style={{
        height: "auto",
        textAlign: "center",
        paddingTop: "8rem",
        paddingBottom: "8rem",
      }}
    >
      <Grid container spacing={3}>
        <Grid style={{ textAlign: "center" }} item sm={6}>
          <img
            style={{ width: "20rem", marginLeft: "6rem" }}
            src="/man-removebg-preview.png"
            alt=""
          />
        </Grid>
        <Grid item sm={6}>
          <Typography
            style={{ paddingTop: "1rem", color: "#FF00FF", textAlign: "left" }}
            variant="h3"
          >
            {" "}
            About
          </Typography>
          <Typography
            variant="h6"
            style={{ paddingTop: "1rem", textAlign: "left", width: "30rem" }}
          >
            Previously, a Business Development Manager at a Tech start-up. I
            always found myself wanting to learn more about the product team.
            After being let go do to Covid-19, I took this oppurtunity to
            upskill and advance into an area that intriges me.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default AboutMe;
