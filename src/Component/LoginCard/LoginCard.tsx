import React from "react";
import {
  Card,
  Input,
  TextField,
  Grid,
  Container,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "../LoginCard/LoginCard.css";

const style = makeStyles(theme => ({
  center: {
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    }
  }
}));

export default class LoginCard extends React.Component {
  render() {
    return (
      <Container
        maxWidth="sm"
        style={{
          width: "maxWidth",
          height: "maxHeight",
          transform: "translate(0%,50%)"
        }}
      >
        <Card elevation={5} style={{ padding: 10 }}>
          <CardContent>
            <Typography color="textPrimary" variant="caption">
              Login Page
            </Typography>
          </CardContent>
          <CardContent>
            <TextField
              variant="outlined"
              placeholder="Email"
              type="email"
              className="InputText"
            />
          </CardContent>
          <CardContent>
            <TextField
              variant="outlined"
              placeholder="Password"
              type="password"
              className="InputText"
            />
          </CardContent>
          <CardContent>
            <Button variant="contained" color="primary" className="LoginButton">
              Login
            </Button>
          </CardContent>
        </Card>
      </Container>
    );
  }
}
