import React from "react";
import Hero from "../Hero/Hero";
import Section from "../Section/Section";
import { Box } from "@mui/material";
import Swiper from "../Swiper";

function MainPage() {
  return (
    <Box sx={{background: "var(--color-black)", color: "var(--color-white)", minHeight: "100vh"}}>
      <Hero />
      <br/>
      <Section/>
      {/* <br/> */}
      {/* <Swiper/> */}
    </Box>
  );
}

export default MainPage;
