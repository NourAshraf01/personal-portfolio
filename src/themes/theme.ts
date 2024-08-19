import { blue, pink } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
  palette: {
    primary: {
      main: "#666666",
    },
    secondary: pink,
  },
  typography: {
    fontFamily: "Inter",
    fontSize: 32,
  },
});
