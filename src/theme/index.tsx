// theme.js
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2C2727",
    },
    secondary: {
      main: "#EEEEEE",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "capitalize",
          padding: "8px 22px",
          boxShadow: "none",
          ":hover": {
            boxShadow: "none",
          },
        },
        containedSecondary: {
          "&:hover": {
            backgroundColor: "#E0E0E0",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          transition: ".4s",
          borderRadius: "8px",
          backgroundColor: "#EEEEEE",
          border: "2px solid #EEEEEE",
          "& .MuiOutlinedInput-notchedOutline": {
            border: "transparent",
          },
          "&.Mui-focused": {
            backgroundColor: "transparent",
          },
          "&.Mui-error": {
            border: `1px solid ${red[400]}`,
            backgroundColor: "transparent",
          },
        },
        input: {
          height: "10px",
        },
      },
    },
  },
});

export default theme;
