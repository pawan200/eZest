import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

export default function Ucard(props) {
  return (
    <Grid item xs={12} md={4}>
      <Card sx={{ display: "flex", marginBottom: 5 }} key={props.key}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={props.img}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              id - {props.id}
            </Typography>
            <Typography component="div" variant="h5" sx={{ marginRight: 3 }}>
              {props.title}. {props.name} {props.last}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
}
