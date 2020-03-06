import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { useLogin, useNotify } from "react-admin";
import { withRouter } from "react-router";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "10% auto",
    padding: "5%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  logo: {
    maxWidth: 200,
    margin: "auto"
  },
  button: {
    backgroundColor: "#668398"
  }
});

const LoginPage = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const notify = useNotify();
  const submit = e => {
    e.preventDefault();
    login({ email, password }).catch(() => notify("Invalid email or password"));
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.logo}
        component="img"
        image="LashbrookLogo.png"
        title="Lashbrook Logo"
        style={{ marginBottom: 10 }}
      />
      <CardContent>
        <form onSubmit={submit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            fullWidth
          />
          <CardActions>
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 10 }}
              onClick={submit}
            >
              Login
            </Button>
          </CardActions>
          <Typography variant="body2" component="p" align="center">
            Trouble logging in?
            <Link to="/reset" color="primary">
              Reset Password
            </Link>
          </Typography>
        </form>
      </CardContent>
    </Card>
  );
};

export default withRouter(LoginPage);
