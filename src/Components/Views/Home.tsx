import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useState } from "react";
import { AppThemeKind } from "../../Domains/Enums/AppThemeEnums";
import useAppTheme from "../../Hooks/useAppTheme";

export function Home() {
  const [height, setHeight] = useState(window.innerHeight);
  function resizeListener() {
    setHeight(window.innerHeight);
  }
  window.addEventListener("resize", resizeListener); //Evento scaturito dal resize (Appartiene al DOM)

  const themeUIStore = useAppTheme();

  function onSwitchTheme() {
    // We should move this method on controller
    const themeToSet =
      themeUIStore.themeKind === AppThemeKind.Light
        ? AppThemeKind.Dark
        : AppThemeKind.Light;

    themeUIStore.setTheme(themeToSet);
  }

  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ height: height }}
      >
        <Button variant="contained" onClick={onSwitchTheme}>
          Press Start
        </Button>
      </Box>
    </Container>
  );
}
