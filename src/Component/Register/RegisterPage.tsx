import {
  Card,
  CardContent,
  TextField,
  Container,
  Button
} from "@material-ui/core";
import React from "react";
import "../Register/RegisterPage.css";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <Container maxWidth="sm" style={{ transform: "translate(0%,50%)" }}>
      <Card>
        <CardContent>
          <TextField label="Username" className="Input" />
        </CardContent>
        <CardContent>
          <TextField label="Email" className="Input" />
        </CardContent>
        <CardContent>
          <TextField type="password" label="Password" className="Input" />
        </CardContent>
        <CardContent>
          <Link to="/">
            <Button className="Input" variant="contained" color="secondary">
              Register
            </Button>
          </Link>
        </CardContent>
      </Card>
    </Container>
  );
}
