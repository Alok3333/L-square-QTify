import { Box, Grid2, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import CSS styles
import Cart from "../Cart/Cart";

// import required modules
import { Zoom, Navigation, Pagination } from "swiper/modules";

const SongSection = () => {
  const [albums, setAlbums] = useState([]);

  const API_URL = "https://qtify-backend-labs.crio.do/songs";

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
    <>
      <Box
        sx={{
          px: "30px",
          display: "block",
        }}
      >
        <Box
          sx={{
            padding: "0px 0px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            Songs
          </Typography>
        </Box>

        {/* Swiper use here */}
        <Swiper
          slidesPerView={7}
          // spaceBetween={50}
          style={{
            "--swiper-navigation-color": "var(--color-white)",
            "--swiper-pagination-color": "var(--color-white)",
            "--swiper-navigation-size": "16px",
          }}
          zoom={true}
          navigation={true}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Zoom, Navigation, Pagination]}
          className="mySwiper"
        >
          <Grid2 container spacing={0}>
            {albums.map((item) => (
              <SwiperSlide>
                <Grid2 key={item.id}>
                  <Cart
                    title={item.title}
                    image={item.image}
                    likes={item.likes}
                  />
                </Grid2>
              </SwiperSlide>
            ))}
          </Grid2>
        </Swiper>
      </Box>
    </>
  );
};

export default SongSection;
