import { CiSearch } from "react-icons/ci";
import { RxPencil2 } from "react-icons/rx";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar(): JSX.Element {
  const user = false;
  return (
    <Box sx={styles.navbarStyle}>
      <Box sx={{ mx: { xl: "70px", lg: "50px", sm: "20px", xs: "10px" } }}>
        <Box sx={styles.navWrapper}>
          <Box display="flex" alignItems="center" gap="20px">
            <Typography variant="h6">Logo</Typography>
            <TextField
              variant="outlined"
              placeholder="Search"
              sx={styles.searchStyle}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <CiSearch size="20px" />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box display="flex" alignItems="center" gap="20px" ml="auto" order="1">
            <IconButton
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Box display="flex" gap="5px" alignItems="center">
                <RxPencil2 size="12px" />
                <Typography fontSize="14px" fontWeight={500}>
                  Write
                </Typography>
              </Box>
            </IconButton>
            {!user ? (
              <>
                <Link to="/login">
                  <Button variant="contained">Sign In</Button>
                </Link>
                <Link to="/sign-up">
                  <Button variant="contained" color="secondary">
                    Sign Up
                  </Button>
                </Link>
              </>
            ) : (
              <Avatar alt="Ali Dev" src="" sx={{ cursor: "pointer" }}>
                AD
              </Avatar>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

const styles = {
  navbarStyle: {
    position: "sticky",
    top: 0,
    zIndex: 1,
    background: "#fff",
    padding: "10px 0px",
    boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
  },
  navWrapper: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchStyle: {
    "& .MuiOutlinedInput-root": {
      borderRadius: "25px",
    },
    input: {
      height: "6px",
    },
  },
};
