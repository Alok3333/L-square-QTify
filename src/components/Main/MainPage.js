import React from "react";
import Hero from "../Hero/Hero";
import Section from "../Section/Section";
import { Box } from "@mui/material";

function MainPage() {
  return (
    <Box sx={{background: "var(--color-black)", color: "var(--color-white)"}}>
      <Hero />
      <br/>
      <Section/>
    </Box>
  );
}

export default MainPage;
