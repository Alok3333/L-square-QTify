import { Box, Button, Grid2, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";

const Section = () => {
  const [albums, setAlbums] = useState([]);

  const API_URL = "https://qtify-backend-labs.crio.do/albums/top";

  useEffect(() => {
    getAlbumData();
  }, []);

  const getAlbumData = async () => {
    try {
      const response = await axios.get(API_URL);

      // console.log(response.data, "result");
      setAlbums(response.data);
    } catch (err) {
      console.log(err, "error from catch block");
    }
  };

  return (
    <Box
      sx={{
        padding: "0px 20px",
        display: "block",
      }}
    >
      <Box
        sx={{
          padding: "0px 0px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
          }}
        >
          Top Albums
        </Typography>
        <Button
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            color: "var(--green)",
          }}
        >
          Collapse
        </Button>
      </Box>
      <Grid2 container sx={{ margin: "0px 0px", gap: "20px" }} spacing={0}>
        {albums.map((item) => (
          <Grid2 key={item.id} size={{ md: 1.6 }}>
            <Cart
              title={item.title}
              image={item.image}
              follows={item.follows}
            />
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
};

export default Section;
