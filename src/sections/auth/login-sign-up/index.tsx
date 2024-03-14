import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";

import GoogleIcon from "../../../assets/google-icon.png";
import { Link } from "react-router-dom";
import { LuUser, LuMail } from "react-icons/lu";
import { FaRegEyeSlash, FaRegEye } from "react-icons/fa6";
import AnimationWrapper from "../../../components/animation-wrapper";
import useFormHandler from "./use-form";

export default function LoginOrSignUp() {
  const {
    pathname,
    formData,
    hasError,
    showPassword,
    togglePassword,
    handleChange,
    handleSubmit,
  } = useFormHandler();

  return (
    <AnimationWrapper keyValue={pathname}>
      <Container maxWidth="xs">
        <Typography
          fontStyle="italic"
          variant="h5"
          color="#1C2025"
          my={3}
          textAlign="center"
        >
          {pathname === "/login" ? "Welcome Back" : "Join Us Today"}
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {pathname === "/sign-up" && (
              <>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      name="firstName"
                      error={hasError && !formData.firstName}
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LuUser />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <TextField
                      name="lastName"
                      error={hasError && !formData.lastName}
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      variant="outlined"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LuUser />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                </Grid>
              </>
            )}

            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  name="email"
                  error={hasError && !formData.email}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LuMail />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <TextField
                  name="password"
                  error={hasError && !formData.password}
                  type={showPassword.password ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        sx={{ cursor: "pointer" }}
                        position="end"
                        onClick={() => togglePassword("password")}
                      >
                        {showPassword.password ? <FaRegEye /> : <FaRegEyeSlash />}
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </Grid>

            {pathname === "/sign-up" && (
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <TextField
                    name="confirmPassword"
                    error={hasError && !formData.confirmPassword}
                    type={showPassword.confirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm Password"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment
                          sx={{ cursor: "pointer" }}
                          position="end"
                          onClick={() => togglePassword("confirmPassword")}
                        >
                          {showPassword.confirmPassword ? (
                            <FaRegEye />
                          ) : (
                            <FaRegEyeSlash />
                          )}
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Grid>
            )}
          </Grid>
          <Box textAlign="center" mt={2}>
            <Button type="submit" variant="contained" color="primary">
              {pathname === "/login" ? "Sign In" : "Sign Up"}
            </Button>
          </Box>
        </form>

        <Box display="flex" alignItems="center" gap="5px" mt={2}>
          <Divider sx={{ width: "46.5%" }} />
          <Typography color="secondary">or</Typography>
          <Divider sx={{ width: "46.5%" }} />
        </Box>

        <Button variant="contained" fullWidth sx={{ marginTop: 2 }}>
          <img src={GoogleIcon} alt="Google Icon" style={{ marginRight: "8px" }} />
          Continue with Google
        </Button>

        <Typography fontSize="14px" textAlign="center" mt={2} color="#434D5B">
          {pathname === "/sign-up" ? `Already a member?` : `Don't have an Account?`}
          <Link
            to={pathname === "/login" ? "/sign-up" : "/login"}
            style={{ color: "#434D5B", fontWeight: 500 }}
          >
            {pathname === "/sign-up" ? " Sign In here" : " Join us today"}
          </Link>
        </Typography>
      </Container>
    </AnimationWrapper>
  );
}
