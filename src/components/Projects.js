import React from "react";
import { Grid, Typography, Link, Button } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "4px solid #FF00FF",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const ProImg = styled.img`
  width: 20rem;
  height: 15rem;
`;

const TechImg = styled.img`
  width: 5rem;
  height: 3.5rem;
`;

function Projects(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div id="project" style={{ backgroundColor: "#f7f4ff" }}>
      <Typography
        variant="h3"
        style={{
          textAlign: "-webkit-center",
          color: "#FF00FF",
          padding: "4rem",
        }}
      >
        My Most Recent Work
      </Typography>
      <Grid
        style={{ display: "flex", justifyContent: "space-between" }}
        container
        spacing={3}
      >
        <Grid style={{ textAlign: "-webkit-center" }} item sm={4}>
          <Typography variant="h6">LUXCAR</Typography>

          <ProImg style={{ borderRadius: "1rem" }} src="/lux.PNG" alt="" />
        </Grid>
        <Grid style={{ textAlign: "-webkit-center" }} item sm={4}>
          <Typography variant="h6">What was used</Typography>
          <TechImg
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png"
            alt=""
          />
          <TechImg
            src="https://www.gstatic.com/devrel-devsite/prod/v2e3f09d6e6536badfdb5bf4153d08404c10f0bdcdc9056b4896a90327dc2c4ff/firebase/images/touchicon-180.png"
            alt=""
          />
          <br />
          <TechImg
            src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"
            alt=""
          />
          <TechImg
            src="https://seeklogo.com/images/C/css3-logo-8724075274-seeklogo.com.png"
            alt=""
          />
        </Grid>
        <Grid style={{ textAlign: "-webkit-center" }} item sm={4}>
          <Typography variant="h6">Links</Typography>
          <Link href="https://cars-281812.web.app/">
            <h5 style={{ color: "#FF00FF" }}>Live</h5>
          </Link>
          <Link href="https://github.com/Tylerbrown1/Music">
            <h5 style={{ color: "#FF00FF" }}>Github</h5>
          </Link>
          <div>
            <Button
              style={{ backgroundColor: "#FF00FF", color: "white" }}
              type="button"
              onClick={handleOpen}
            >
              ReadMe
            </Button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={open}>
                <div className={classes.paper}>
                  <p id="transition-modal-description">
                    Problem: Budapest has no Uber or Lyft making it difficult
                    for people <br />
                    traveling for business to find a ride. LuxCar solves that{" "}
                    problem by <br /> making it easy for users to book a car of
                    their choice at their desired <br /> location. Users can
                    select a time and location, this information is <br />{" "}
                    received by the chauffeur who uses the users information to
                    call and confirm
                  </p>
                  <p>Future updates: Price estimator, Payment methods</p>
                </div>
              </Fade>
            </Modal>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Projects;
