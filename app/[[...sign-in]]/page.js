// Navigation Bar for Account Management pages/buttons (not home page or others)


import {
    Container,
    Box,
    Typography,
    AppBar,
    Toolbar,
    Button,
  } from "@mui/material";
  import {
    SignIn,
    SignInButton,
    SignedOut,
    SignedIn,
    UserButton,
    ClerkProvider,
  } from "@clerk/nextjs";
  import Link from "next/link";
  
  export default function SignUpPage() {
    return (
      <Container>
        <AppBar position="static" sx={{ backgroundColor: "#6A1B9A" }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              AI Flashcards
            </Typography>
          </Toolbar>
        </AppBar>
  
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          sx={{ textAlign: "center", my: 4 }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
            Sign In
          </Typography>
          <SignedOut>
            <SignIn />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Box>
      </Container>
    );
  }
  