import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useState } from "react";
import { ThemeKind, useThemeUIStore } from "../Stores/UIStores/ThemeUIStore";

export function Home() {
  const [height, setHeight] = useState(window.innerHeight);
  function resizeListener() {
    setHeight(window.innerHeight);
  }
  window.addEventListener("resize", resizeListener); //Evento scaturito dal resize (Appartiene al DOM)

  const themeUIStore = useThemeUIStore();

  function switchTheme() {

    const themeToSet = themeUIStore.themeKind == ThemeKind.Light ? ThemeKind.Dark : ThemeKind.Light;

    themeUIStore.setTheme(themeToSet)
  }

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: height }}
      >
        <Button variant="text" color="error" onClick={switchTheme}>
          Press Start
        </Button>
      </Box>
    </Container>
  );
}
