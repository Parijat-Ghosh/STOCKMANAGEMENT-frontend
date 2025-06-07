import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../authContext'; 


import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControl,
  FormControlLabel,
  FormLabel,
  Link,
  TextField,
  Typography,
  Stack,
  Card as MuiCard,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { use } from 'react';

const Card = styled(MuiCard)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '450px',
  padding: theme.spacing(5),
  gap: theme.spacing(3),
  margin: 'auto',
  background: 'rgba(255, 255, 255, 0.75)',
  backdropFilter: 'blur(15px)',
  borderRadius: theme.spacing(3),
  border: '1px solid rgba(255, 255, 255, 0.3)',
  boxShadow:
    '0 8px 32px 0 rgba(31, 38, 135, 0.2), 0 4px 16px rgba(0, 0, 0, 0.1)',
}));

const SignUpContainer = styled(Stack)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(4),
  background: 'linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));




export default function SignUp() {
  const { setCurrentUser } = useAuth();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [username,setUsername] = useState("");
  const [loading,setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleSignup = async (event) => {
      event.preventDefault();
      try{
        setLoading(true);
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
          email: email,
          password: password,
          username: username
        });
        
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);

        setCurrentUser(res.data.userId);
        setLoading(false);

        // window.location.href = "/"; // Redirect to home page after signup
        // toast.success("Signup successful!");

        navigate("/", { state: { toastMessage: "Signup successful!" } });




      }catch(err){
        //  console.log(error);
        //  alert("Error signing up. Please try again.");
        //  setLoading(false);
        console.error("Signup error:", err.response?.data || err.message);
        toast.error("Signup failed!"); // 🚨 This shows the toast
        setLoading(false);

        
      }

  }
  
  return (
    <>
      <CssBaseline />
      <SignUpContainer>
        <Card variant="outlined">
          <Typography variant="h4" align="center" fontWeight="bold">
            Create Account
          </Typography>

          <Box
            component="form"
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <FormControl>
              <FormLabel>Full Name</FormLabel>
              <TextField
                required
                fullWidth
                id="name"
                name="name"
                placeholder="username"
                autoComplete="name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormControl>

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
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <FormControlLabel
              control={<Checkbox color="primary" />}
              label="I want to receive updates via email."
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={loading}
              onClick={handleSignup}
              sx={{
                mt: 2,
                py: 1.5,
                fontWeight: 'bold',
                backgroundColor: '#007FFF',
                '&:hover': {
                  backgroundColor: '#005FCC',
                },
              }}
            >
              {loading ? "Loading..." : "Sign Up"}
            </Button>

            <Typography align="center" variant="body2" sx={{ mt: 1 }}>
              Already have an account?{' '}
              <Link href="/signin" underline="hover">
                Login
              </Link>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </>
  );
}


