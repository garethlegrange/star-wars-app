import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Image from "next/image";
import { Link as MUILink } from "@mui/material";
import Link from "next/link";
import image from "@/public/avatar.png";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Container
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "rgb(255 255 255 / 0.3)",
          backdropFilter: "blur(8px)",
          p: "0.75rem 1rem",
          borderRadius: "9999px",
          mt: "1.5rem",
        }}
      >
        <Avatar alt="Gareth le Grange" />
        <Box sx={{ ml: "auto", display: "flex", gap: "1rem", }}>
          <Link href="/">Home</Link>
          <Link href="/movies">Movies</Link>
          <Link href="/gallery">Gallery</Link>
        </Box>
      </Container>
    </AppBar>
  );
}
