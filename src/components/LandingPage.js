import React from "react";
import { Grid, Avatar, Button, Typography } from "@material-ui/core";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FF00FF",
    borderRadius: ".8rem",
    border: 0,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    margin: "1rem",
  },
  format: {
    marginTop: "3rem",
    textAlign: "-webkit-center",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "4px solid #FF00FF",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(3, 4, 3),
  },
}));

const LandingDiv = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(key.jpg);
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

function LandingPage() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <LandingDiv>
      <Grid container spacing={3}>
        <Grid className={classes.format} item sm={12}>
          <Avatar
            src="/guy.png"
            style={{ width: "6rem", height: "5.6rem", margin: "2rem" }}
          />

          <Typography variant="h3" style={{ color: "white" }}>
            Hello! I'm <span style={{ color: "#FF00FF" }}>Tyler</span>,<br /> a{" "}
            <span style={{ color: "#FF00FF" }}>Full-Stack</span> Developer
          </Typography>
          <div style={{ margin: "2rem" }}>
            <a style={{ textDecorationLine: "none" }} href="#project">
              <Button className={classes.root}>Projects</Button>
            </a>

            <Button className={classes.root} type="button" onClick={handleOpen}>
              Contact
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
                  <a
                    style={{ color: "#FF00FF" }}
                    href="https://github.com/Tylerbrown1"
                  >
                    <GitHubIcon style={{ margin: "1rem" }}></GitHubIcon>
                  </a>
                  <a
                    style={{ color: "#FF00FF" }}
                    href="mailto:tylerbwn14@gmail.com"
                  >
                    <EmailIcon style={{ margin: "1rem" }} />
                  </a>
                  <a style={{ color: "#FF00FF" }} href="tel:7194000180">
                    <PhoneIcon style={{ margin: "1rem" }} />
                  </a>
                </div>
              </Fade>
            </Modal>
          </div>
        </Grid>
        <Grid className={LandingDiv} item sm={6}></Grid>
      </Grid>
      <div style={{ textAlign: "center" }}>
        <ExpandMoreIcon style={{ color: "white" }} />
      </div>
    </LandingDiv>
  );
}

export default LandingPage;
