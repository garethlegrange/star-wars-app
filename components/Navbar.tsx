import { Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="sticky">
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          bgcolor: "rgb(0 0 0 / 1)",
          p: "0.75rem 1rem",
        }}
      >
        <Typography
          sx={{ color: "white", fontSize: "0.875rem", fontWeight: "bold" }}
        >
          Task 1
        </Typography>
        <Box sx={{ ml: "auto", display: "flex", gap: "1rem" }}>
          <Link
            href="/"
            className="text-white no-underline hover:text-yellow-400 text-sm"
          >
            Home
          </Link>
        </Box>
      </Container>
    </AppBar>
  );
}
