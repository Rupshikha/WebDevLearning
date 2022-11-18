import React from "react";
import styled from "@emotion/styled";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const MovieInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;
`;

export default function MovieCard({ movie }) {
  console.log('movetitle', movie.Title);
  
  return (
    <div>
      <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none" }}>
        <Card
          sx={{
            backgroundColor:"#363636",
            maxWidth: "245",
            margin: "1em",
            // boxShadow: "3px 3px 10px gray",
            transition: "all 0.3s",
            ":hover": {
              transform: "scale(1.1)",
              transition: "all 0.3s",
            },
          }}
        >
          <CardContent>
            <img
              src={movie.Poster}
              alt=""
              style={{ width: "210px", height: "240px" }}
            />
            <div>
              {" "}
              <Typography sx={{ fontSize: "16px", fontWeight: "700",color:"#cec2c6" }}>
                {movie.Title.length> 20? (`${movie.Title.slice(0,20)} ...`):(movie.Title)}
              </Typography>
            </div>
            <MovieInfo>
              <Typography sx={{ fontSize: "13px", fontWeight: "700",color:"#cec2c6" }}>
                Year :{movie.Year}
              </Typography>
              <Typography sx={{ fontSize: "13px", fontWeight: "700",color:"#cec2c6" }}>
                Type :{movie.Type}
              </Typography>
            </MovieInfo>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Link>
    </div>
  );
}
