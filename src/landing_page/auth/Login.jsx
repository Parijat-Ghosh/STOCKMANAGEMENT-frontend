import React, { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../authContext";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  CssBaseline,
  FormControl,
  FormLabel,
  TextField,
  Typography,
  Stack,
  Card as MuiCard,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  maxWidth: "450px",
  padding: theme.spacing(5),
  gap: theme.spacing(3),
  margin: "auto",
  background: "rgba(255, 255, 255, 0.75)",
  backdropFilter: "blur(15px)",
  borderRadius: theme.spacing(3),
  border: "1px solid rgba(255, 255, 255, 0.3)",
  boxShadow:
    "0 8px 32px 0 rgba(31, 38, 135, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1)",
}));

const LoginContainer = styled(Stack)(({ theme }) => ({
  minHeight: "100vh",
  padding: theme.spacing(4),
  background: "linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setCurrentUser(null);
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { currentUser, setCurrentUser } = useAuth();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post("http://localhost:3002/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.userId);

      setCurrentUser(res.data.userId);
      setLoading(false);

      // window.location.href = "/"; // Redirect to home page after signup
      navigate("/", { state: { toastMessage: "Successfully loggedin" } });
      
    } catch (err) {
      toast.error("Login failed!"); // 🚨 This shows the toast
      setLoading(false);
    }
  };

  return (
    <>
      <CssBaseline />
      <LoginContainer>
        <Card variant="outlined">
          <Typography variant="h4" align="center" fontWeight="bold">
            Login
          </Typography>

          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                name="email"
                placeholder="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Password</FormLabel>
              <TextField
                required
                fullWidth
                id="password"
                name="password"
                type="password"
                placeholder="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick={handleLogin}
              disabled={loading}
              sx={{
                mt: 2,
                py: 1.5,
                fontWeight: "bold",
                backgroundColor: "#007FFF",
                "&:hover": {
                  backgroundColor: "#005FCC",
                },
              }}>
              {loading ? "Loading..." : "Login"}
            </Button>
          </Box>
        </Card>
      </LoginContainer>
    </>
  );
}
