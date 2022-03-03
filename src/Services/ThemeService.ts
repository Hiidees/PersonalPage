import { createTheme } from "@mui/material";

//const font = "Quicksand, Heebo, sans-serif, Roboto, Arial";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export { darkTheme, lightTheme };