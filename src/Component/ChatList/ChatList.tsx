import * as React from "react";
import {
  Table,
  Grid,
  TableBody,
  TableRow,
  Card,
  List,
  ListItem,
  Divider
} from "@material-ui/core";

interface ChatProps {
  nama: string;
  imageUrl: string;
  lastChat: string;
}

export function PeopleChat(props: ChatProps) {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      alignContent="space-around"
      spacing={2}
    >
      <Grid item>
        <img
          src={props.imageUrl}
          style={{
            position: "relative",
            width: 100,
            height: 100,
            borderRadius: "50%"
          }}
        />
      </Grid>
      <Grid item xs>
        <div> {props.nama}</div>
        <div> {props.lastChat}</div>
      </Grid>
    </Grid>
  );
}

export function AllChat(props: any) {
  return (
    <List component="nav">
      <ListItem>
        <PeopleChat
          imageUrl="http://animekompi.web.id/wp-content/uploads/2019/11/maxresdefault-35.jpg"
          nama="zul"
          lastChat="asdasd"
        />
      </ListItem>
      <Divider/>
    </List>
  );
}
